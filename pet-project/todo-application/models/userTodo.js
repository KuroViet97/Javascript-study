const todoSchema = require('./todo').todoSchema;
const mongoose = require('mongoose');

const userTodoSchema = new mongoose.Schema({
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
    todos: [
        todoSchema
    ],
    registered_date: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

//create model from schema
const userTodoModel = mongoose.model('userTodo', userTodoSchema);

module.exports = userTodoModel;