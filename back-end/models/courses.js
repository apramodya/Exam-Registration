var mongoose = require('mongoose');

// subject schema
const CourseSchema = mongoose.Schema({
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

const Course = module.exports = mongoose.model('Course', CourseSchema);

module.exports.addCourse = function (course, callback) {
    course.save(callback);
};

module.exports.getCourseByCourseCode = function (course_code, callback) {
    Course.findOne({ 'course_code': course_code }, callback);
};

module.exports.getCoursesByYear = function (year, callback) {
    Course.find({ 'year': year }, callback);
};

module.exports.getCoursesBySemester = function (semester, callback) {
    Course.find({ 'semester': semester }, callback);
};

module.exports.getCourses = function (callback) {
    Course.find( callback);
}

module.exports.getCoursesBySemesterAndYear = function (semester, year, callback) {
    Course.find({ 'semester': semester, 'year': year }, callback);
};