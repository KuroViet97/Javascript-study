const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    _id: {
        type: String,
        unique: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    editable: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });

//create model from schema
const todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;