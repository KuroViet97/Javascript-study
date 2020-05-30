const todoSchema = require('./todo').todoSchema;
const mongoose = require('mongoose');

const userTodosSchema = new mongoose.Schema({
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
const userTodosModel = mongoose.model('userTodos', userTodosSchema);

module.exports = userTodosModel;