const express = require('express');
const router = express.Router();
const Course = require('../models/courses');

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

// get course by course code
router.get('/getCourse/:code', function (req, res, next) {
    let course_code = req.params.code;
    Course.getCourseByCourseCode(course_code, function (err, course) {
        if (err) return res.json({success: false, msg: 'Failed to find course'});
        else return res.json({
            success: true,
            msg: 'Found course',
            course: {
                course_name: course.course_name,
                course_code: course.course_code,
                year: course.year,
                semester: course.semester
            }
        });
    })
});

// get courses by year
router.get('/getCoursesByYear/:year', function (req, res, next) {
    let year = req.params.year;
    Course.getCoursesByYear(year, function (err, courses) {
        if (err) return res.json({success: false, msg: 'Failed to find courses'});
        else return res.json(courses);
    })
});

// get courses by semester
router.get('/getCoursesBySemester/:semester', function (req, res, next) {
    let semester = req.params.semester;
    Course.getCoursesBySemester(semester, function (err, courses) {
        if (err) return res.json({success: false, msg: 'Failed to find courses'});
        else return res.json(courses);
    })
});

module.exports = router;