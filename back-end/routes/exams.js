const express = require('express');
const router = express.Router();
const Exam = require('../models/exams');

// add exam
router.post('/add', function (req, res, next) {
    let newExam = new Exam({
        index_number: req.body.index_number,
        courses: req.body.courses,
        year: req.body.year,
        type: req.body.type
    });
    Exam.addExam(newExam, function (err, exam) {
        if (err) return res.json({success: false, msg: 'Failed to add details'});
        else return res.json({success: true, msg: 'Added details', data: exam});
    })
});

// get exams by type
router.get('/getAllRegisteredExams_undergraduate', function (req, res, next) {
    let type = 1;
    Exam.getAllRegisteredExams_undergraduate(type, function (err, exams) {
        if (err) return res.json({success: false, msg: 'Failed to find courses'});
        else return res.json(exams);
    })
});

// get exams by code
router.get('/getRegisteredExamsByCourseCode_undergraduate/:code', function (req, res, next) {
    let type = 1;
    let code = req.params.code;
    Exam.getRegisteredExamsByCourseCode_undergraduate(type, code, function (err, exams) {
        if (err) return res.json({success: false, msg: 'Failed to find courses'});
        else return res.json(exams);
    })
});

// get exams by year
router.get('/getRegisteredExamsByYear_undergraduate/:year', function (req, res, next) {
    let type = 1;
    let year = req.params.year;
    Exam.getRegisteredExamsByYear_undergraduate(type, year, function (err, exams) {
        if (err) return res.json({success: false, msg: 'Failed to find courses'});
        else return res.json(exams);
    })
});

// postgraduates

// get exams by type
router.get('/getAllRegisteredExams_postgraduate', function (req, res, next) {
    let type = 1;
    Exam.getAllRegisteredExams_undergraduate(type, function (err, exams) {
        if (err) return res.json({success: false, msg: 'Failed to find courses'});
        else return res.json(exams);
    })
});

// get exams by code
router.get('/getRegisteredExamsByCourseCode_postgraduate/:code', function (req, res, next) {
    let type = 1;
    let code = req.params.code;
    Exam.getRegisteredExamsByCourseCode_undergraduate(type, code, function (err, exams) {
        if (err) return res.json({success: false, msg: 'Failed to find courses'});
        else return res.json(exams);
    })
});

// get exams by code
router.get('/getRegisteredExamsByYear_postgraduate/:year', function (req, res, next) {
    let type = 1;
    let year = req.params.year;
    Exam.getRegisteredExamsByYear_undergraduate(type, year, function (err, exams) {
        if (err) return res.json({success: false, msg: 'Failed to find courses'});
        else return res.json(exams);
    })
});

module.exports = router;