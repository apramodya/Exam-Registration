var mongoose = require('mongoose');

const ExamSchema = mongoose.Schema({
    index_number: {
        type: Number
    },
    course_code: {
        type: String
    },
    year: {
        type: Number
    },
    // undergraduate or postgraduate
    type: {
        type: Number
    }
});

const Exam = module.exports = mongoose.model('Exam', ExamSchema);

// add exam data
module.exports.addExam = function (exam, callback) {
    exam.save(callback);
};

// all registered exams
module.exports.getAllRegisteredExams_undergraduate = function (type, callback) {
    Exam.find({'type': type}, callback);
};

module.exports.getRegisteredExamsByCourseCode_undergraduate = function (code, type, callback) {
    Exam.find({'course_code': code, 'type': type}, callback);
};

module.exports.getRegisteredExamsByYear_undergraduate = function (year, type, callback) {
    Exam.find({'year': year, 'type': type}, callback);
};

// all registered exams
module.exports.getAllRegisteredExams_postgraduate = function (type, callback) {
    Exam.find({'type': type}, callback);
};

module.exports.getRegisteredExamsByCourseCode_postgraduate = function (code, type, callback) {
    Exam.find({'course_code': code, 'type': type}, callback);
};

module.exports.getRegisteredExamsByYear_postgraduate = function (year, type, callback) {
    Exam.find({'year': year, 'type': type}, callback);
};
