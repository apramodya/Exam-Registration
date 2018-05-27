const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const config = require('../config/database');

module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, function (jwt_playload, done) {
        console.log(jwt_playload);
        User.getUserById(jwt_playload.data._id, function (err, user) {
            if (err) return done(err, false);
            if (user) return done(null, user);
            else return done(null, false);
        })
    }))
};