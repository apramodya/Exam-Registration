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
    }
});

const Course = module.exports = mongoose.model('Course', CourseSchema);

module.exports.addCourse = function (course, callback) {
    course.save(callback);
};