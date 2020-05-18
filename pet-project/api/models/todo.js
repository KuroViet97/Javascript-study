const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    _id: {
        type: Number,
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
    }
});

//create model from schema
const todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;