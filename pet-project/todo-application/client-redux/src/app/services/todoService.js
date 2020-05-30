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
    axios.get(`/api/user/${localStorage.getItem('userid')}`, tokenConfig(getState))
        .then(response => {
            console.log(response.data);
            dispatch(receiveTodos(response.data));
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
});

//add todo
export const addTodo = (content) => ((dispatch, getState) => {
    const todoAction = addTodoStart(content);
    dispatch(todoAction);

    const newTodo = {
        _id: todoAction._id,
        content: todoAction.content
    }

    axios.post(`/api/user/${localStorage.getItem('userid')}`, newTodo, tokenConfig(getState))
        .then(response => {
            console.log(response.data);
            dispatch(addTodoSuccess());
        })
        .catch(err => {
            console.log(err);
            dispatch(addTodoFailure(err));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
});

//remove todo
export const removeTodo = (_id) => ((dispatch, getState) => {
    dispatch(removeTodoStart(_id));
    axios.delete(`/api/user/${localStorage.getItem('userid')}/todo/${_id}`, tokenConfig(getState))
        .then(response => {
            console.log(response);
            dispatch(removeTodoSuccess());
        })
        .catch(err => {
            console.log(err);
            dispatch(removeTodoFailure(err));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
});

//save todo
export const saveTodo = (todo) => ((dispatch, getState) => {
    dispatch(saveTodoStart(todo));

    const editedTodo = {
        _id: todo._id,
        completed: todo.completed,
        content: todo.content
    };
    axios.put(`/api/user/${localStorage.getItem('userid')}/`, editedTodo, tokenConfig(getState))
        .then(response => {
            console.log(response);
            dispatch(saveTodoSuccess());
        })
        .catch(err => {
            console.log(err);
            dispatch(saveTodoFailure());
            dispatch(returnErrors(err.response.data, err.response.status));
        });
});