var mongoose = require('mongoose');

// Status schema
const StatusSchema = mongoose.Schema({
    u_examination_year: {
        type: Number,
        required: true
    },
    u_semester: {
        type: Number,
        required: true
    },
    u_allow: {
        type: Boolean,
        required: true
    },
    u_deadline: {
        type: Date
    },
    p_examination_year: {
        type: Number,
        required: true
    },
    p_semester: {
        type: Number,
        required: true
    },
    p_allow: {
        type: Boolean,
        required: true
    },
    p_deadline: {
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
                p_examination_year: status.p_examination_year,
                p_semester: status.p_semester,
                p_allow: status.p_allow,
                p_deadline: status.p_deadline,
                u_examination_year: status.u_examination_year,
                u_semester: status.u_semester,
                u_allow: status.u_allow,
                u_deadline: status.u_deadline
            }
        }, callback
    );
};