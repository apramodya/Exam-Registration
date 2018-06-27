const express = require('express');
const router = express.Router();
const Module = require('../models/modules');

// add module
router.post('/add', function (req, res, next) {
    let newModule = new Module({
        course_name: req.body.course_name,
        course_code: req.body.course_code,
        year: req.body.year,
        semester: req.body.semester
    });
    Module.addModule(newModule, function (err, module) {
        if (err) return res.json({success: false, msg: 'Failed to add module'});
        else return res.json({success: true, msg: 'Added module', module: module});
    })
});

// get module by course code
router.get('/getModule/:code', function (req, res, next) {
    let course_code = req.params.code;
    Module.getModuleByCourseCode(course_code, function (err, course) {
        if (err) return res.json({success: false, msg: 'Failed to find module'});
        else return res.json({
            success: true,
            msg: 'Found module',
            module: {
                course_name: course.course_name,
                course_code: course.course_code,
                year: course.year,
                semester: course.semester
            }
        });
    })
});

// get modules by year
router.get('/getModulesByYear/:year', function (req, res, next) {
    let year = req.params.year;
    Module.getModulesByYear(year, function (err, modules) {
        if (err) return res.json({success: false, msg: 'Failed to find modules'});
        else return res.json(modules);
    })
});

// get modules by semester
router.get('/getModulesBySemester/:semester', function (req, res, next) {
    let semester = req.params.semester;
    Module.getModulesBySemester(semester, function (err, modules) {
        if (err) return res.json({success: false, msg: 'Failed to find modules'});
        else return res.json(modules);
    })
});

// get all modules
router.get('/getModules', function (req, res) {
    Module.getModules( function (err, modules) {
        if (err) return res.json({success: false, msg: 'Failed to find modules'});
        else return res.json(modules);
    })
});

// get all modules
router.get('/getModulesBySemesterAndYear/:semester/:year', function (req, res) {
    let semester = req.params.semester;
    let year = req.params.year;
    Module.getModulesBySemesterAndYear(semester, year, function (err, modules) {
        if (err) return res.json({success: false, msg: 'Failed to find modules'});
        else return res.json(modules);
    })
})

module.exports = router;