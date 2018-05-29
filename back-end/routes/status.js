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
                examination_year: status.examination_year,
                semester: status.semester
            }
        })
    })
});

// add status
router.post('/add', function (req, res, next) {
    let newStatus = new Status({
        examination_year: req.body.examination_year,
        semester: req.body.semester
    });
    Status.addStatus(newStatus, function (err, status) {
        if (err) return res.json({success: false, msg: 'Failed to add status'});
        else return res.json({success: true, msg: 'Added status', status: status});
    })
});

// update status
router.put('/update/:id', function (req, res, next) {
    let status = new Status({
        examination_year: req.body.examination_year,
        semester: req.body.semester
    });
    Status.updateStatus(req.params.id, status, function (err, status) {
        if (err) return res.json({success: false, msg: 'Failed to update status'});
        else return res.json({success: true, msg: 'Updated status', status: status});
    })
});


module.exports = router;