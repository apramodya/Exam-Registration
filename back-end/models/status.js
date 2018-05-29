var mongoose = require('mongoose');

// Status schema
const StatusSchema = mongoose.Schema({
    examination_year: {
        type: Number,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    allow: {
        type: Boolean,
        required: true
    },
    deadline: {
        type: Date
    }
});

const Status = module.exports = mongoose.model('Status', StatusSchema);

module.exports.addStatus = function (status, callback) {
    status.save(callback);
};

module.exports.getStatus = function (callback) {
    Status.findOne(callback).limit(1);
};

module.exports.updateStatus = function (id, status, callback) {
    Status.findOneAndUpdate(
        {_id: id},
        {
            $set: {
                examination_year: status.examination_year,
                semester: status.semester,
                allow: status.allow,
                deadline: status.deadline
            }
        }, callback
    );
};