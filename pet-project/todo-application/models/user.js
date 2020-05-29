const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registered_date: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

//create model from schema
const userModel = mongoose.model('user', UserSchema);

module.exports = userModel;