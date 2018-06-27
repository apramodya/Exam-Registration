// postgraduate courses

var mongoose = require('mongoose');

// subject schema
const ModuleSchema = mongoose.Schema({
    course_name: {
        type: String,
        required: true
    },
    course_code: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    credits: {
        type: Number,
        default: 2
    }
});

const Module = module.exports = mongoose.model('Module', ModuleSchema);

module.exports.addModule = function (module, callback) {
    module.save(callback);
};

module.exports.getModuleByCourseCode = function (course_code, callback) {
    Module.findOne({ 'course_code': course_code }, callback);
};

module.exports.getModulesByYear = function (year, callback) {
    Module.find({ 'year': year }, callback);
};

module.exports.getModulesBySemester = function (semester, callback) {
    Module.find({ 'semester': semester }, callback);
};

module.exports.getModules = function (callback) {
    Module.find( callback);
};

module.exports.getModulesBySemesterAndYear = function (semester, year, callback) {
    Module.find({ 'semester': semester, 'year': year }, callback);
};