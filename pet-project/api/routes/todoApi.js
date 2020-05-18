var express = require('express');
var router = express.Router();
var database = require('../models');

function success(res, payload) {
    return res.status(200).json(payload);
}

function handleError(nextFunction, httpStatusCode, errorMessage) {
    return nextFunction({ status: httpStatusCode, message: errorMessage });
}

exports.getTodo = router.get('/todos', async (req, res, next) => {
    try {
        const todos = await database.Todo.find({});
        return success(res, todos);
    } catch (err) {
        handleError(next, 400, 'cannot get todos');
    }
})

exports.postTodo = router.post('/todos', async (req, res, next) => {
    try {
        const todo = await database.Todo.create(req.body);
        return success(res, todo);
    } catch (err) {
        handleError(next, 400, 'cannot create todo');
    }
});

exports.putTodo = router.put('/todos/:id', async (req, res, next) => {
    try {
        const todo = await database.Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true //return new modified document instead of the original one 
        })
        return success(res, todo);
    } catch (error) {
        handleError(next, 400, 'cannot update todo');
    }
});

exports.deleteTodo = router.delete('/todos/:id', async (req, res, next) => {
    try {
        const todo = await database.Todo.findByIdAndDelete(req.params.id);
        return success(res, 'todo deleted: ' + todo);
    } catch (error) {
        handleError(next, 400, 'cannot delete todo');
    }
}); 