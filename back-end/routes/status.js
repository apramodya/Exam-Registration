const express = require('express');
const router = express.Router();
const Status = require('../models/status')

// get status
router.get('/get', function (req, res, next) {
    Status.getStatus(function (err, status) {
        if (err) return res.json({success: false, msg: 'Failed to find status'});
        else return res.json({
            success: true,
            msg: 'Found status',
            status: {
                id: status._id,
                p_examination_year: status.p_examination_year,
                p_semester: status.p_semester,
                p_allow: status.p_allow,
                p_deadline: status.p_deadline,
                u_examination_year: status.u_examination_year,
                u_semester: status.u_semester,
                u_allow: status.u_allow,
                u_deadline: status.u_deadline
            }
        })
    })
});

// add status
router.post('/add', function (req, res, next) {
    let newStatus = new Status({
        p_examination_year: req.body.p_examination_year,
        p_semester: req.body.p_semester,
        p_allow: req.body.p_allow,
        p_deadline: req.body.p_deadline,
        u_examination_year: req.body.u_examination_year,
        u_semester: req.body.u_semester,
        u_allow: req.body.u_allow,
        u_deadline: req.body.u_deadline
    });
    Status.addStatus(newStatus, function (err, status) {
        if (err) return res.json({success: false, msg: 'Failed to add status'});
        else return res.json({success: true, msg: 'Added status', status: status});
    })
});

// update status
router.put('/update/:id', function (req, res, next) {
    let status = new Status({
        p_examination_year: req.body.p_examination_year,
        p_semester: req.body.p_semester,
        p_allow: req.body.p_allow,
        p_deadline: req.body.p_deadline,
        u_examination_year: req.body.u_examination_year,
        u_semester: req.body.u_semester,
        u_allow: req.body.u_allow,
        u_deadline: req.body.u_deadline
    });
    Status.updateStatus(req.params.id, status, function (err, status) {
        if (err) return res.json({success: false, msg: 'Failed to update status'});
        else return res.json({success: true, msg: 'Updated status', status: status});
    })
});


module.exports = router;