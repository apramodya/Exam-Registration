const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const config = require('../config/database');

// register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        registration_number: req.body.registration_number,
        index_number: req.body.index_number,
        type: req.body.type,
        password: req.body.index_number
    });
    User.addUser(newUser, function (err, user) {
        if (err) return res.json({success: false, msg: 'Failed to register user', err: err});
        else return res.json({success: true, msg: 'Registered user', user: user});
    });
});

// authenticate
router.post('/authenticate', (req, res, next) => {
    const index_number = req.body.index_number;
    const password = req.body.password;
    User.getUserByIndexNumber(index_number, function (err, user) {
        if (err) throw err;
        if (!user) {
            return res.json({success: false, msg: 'Failed to find user'})
        };
        User.comparePassword(password, user.password, function (err, isMatch) {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({data: user}, config.secret, {
                    expiresIn: 604800 // 1 week
                });
                res.json({
                    success: true,
                    msg: 'You are logged in',
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        index_number: user.index_number,
                        registration_number: user.registration_number,
                        type: user.type
                    }
                })
            }
            else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        })
    })
});

// profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;