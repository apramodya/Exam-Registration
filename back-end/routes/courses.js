const express = require('express');
const router = express.Router();
const Course = require('../models/courses');
const config = require('../config/database');

// add course
router.post('/add', function (req, res, next) {
    let newCourse = new Course({
        course_name: req.body.course_name,
        course_code: req.body.course_code,
        year: req.body.year,
        semester: req.body.semester
    });
    Course.addCourse(newCourse, function (err, course) {
        if (err) return res.json({success: false, msg: 'Failed to add course'});
        else return res.json({success: true, msg: 'Added course'});
    })
});

module.exports = router;