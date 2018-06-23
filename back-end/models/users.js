var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// user schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    registration_number: {
        type: String,
        required: true
    },
    index_number: {
        type: String,
        required: true
    },
    year_enrolled: {
        type: Number
    },
    type: {
        type: Number,
        required: true
    },
    password: {
        type: String
    },
    current_level: {
        type: Number,
        default: 1
    },
    semester_1: {
        type: {}
    },
    semester_2: {
        type: {}
    },

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};
module.exports.getUserByIndexNumber = function (index_number, callback) {
    const query = {index_number: index_number};
    User.findOne(query, callback);
};
module.exports.addUser = function (user, callback) {
    User.create(user, callback);

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) throw err;
            user.password = hash;
            user.save(callback);
        });
    });
};
module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    })
};

module.exports.updateUser = function (id, user, callback) {
    User.findOneAndUpdate(
        {_id: id},
        {
            $set: {
                name: user.name,
                email: user.email,
            }
        }, callback
    );
};

module.exports.addExam = function (id, exam, callback) {
    User.findOneAndUpdate(
        {_id: id},
        {
            $set: {
                semester_1: exam.semester_1,
                semester_2: exam.semester_2
            }
        }, callback
    );
};