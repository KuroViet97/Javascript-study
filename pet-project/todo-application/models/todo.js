const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    _id: {
        type: String,
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
const todoModel = mongoose.model('todo', todoSchema);

module.exports = {
    todoModel,
    todoSchema
}