/**
 * Axios with thunk middleware
 */
import {
    requestTodos,
    receiveTodos,
    addTodoStart,
    addTodoSuccess,
    addTodoFailure,
    removeTodoStart,
    removeTodoSuccess,
    removeTodoFailure,
    saveTodoStart,
    saveTodoSuccess,
    saveTodoFailure
} from '../actions/asyncActions';

import { tokenConfig } from './authService';
import { returnErrors } from '../actions/errorActions';

import axios from 'axios';

export const fetchTodos = () => ((dispatch, getState) => {
    dispatch(requestTodos());
    console.log("REQUESTING...");
    console.log("FETCHING...");
    axios.get('/todos', tokenConfig(getState))
        .then(response => {
            console.log(response.data);
            dispatch(receiveTodos(response.data));
        })
        .then(() => console.log("FINISHED FETCHING!"))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
});

//add todo
export const addTodo = (content) => ((dispatch, getState) => {
    console.log("ADD START...");
    const todoAction = addTodoStart(content);
    dispatch(todoAction);

    const newTodo = {
        _id: todoAction._id,
        content: todoAction.content
    }

    axios.post('/todos', newTodo, tokenConfig(getState))
        .then(response => {
            console.log(response.data);
            dispatch(addTodoSuccess());
        })
        .then(() => console.log("FINISHED ADDING!"))
        .catch(err => {
            console.log(err);
            dispatch(addTodoFailure(err));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
});

//remove todo
export const removeTodo = (_id) => ((dispatch, getState) => {
    console.log("REMOVE START...");
    dispatch(removeTodoStart(_id));
    axios.delete(`/todos/${_id}`, tokenConfig(getState))
        .then(response => {
            console.log(response);
            dispatch(removeTodoSuccess());
        })
        .then(() => console.log("FINISHED REMOVING!"))
        .catch(err => {
            console.log(err);
            dispatch(removeTodoFailure(err));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
});

//save todo
export const saveTodo = (todo) => ((dispatch, getState) => {
    console.log("SAVE START...");
    dispatch(saveTodoStart(todo));

    const editedTodo = {
        _id: todo._id,
        completed: todo.completed,
        content: todo.content
    };
    axios.put(`/todos/${todo._id}`, editedTodo, tokenConfig(getState))
        .then(response => {
            console.log(response);
            dispatch(saveTodoSuccess());
        })
        .then(() => console.log("FINISHED SAVING!"))
        .catch(err => {
            console.log(err);
            dispatch(saveTodoFailure());
            dispatch(returnErrors(err.response.data, err.response.status));
        });
});