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

import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3001/todos/';

export const fetchTodos = () => (async (dispatch) => {
    dispatch(requestTodos());
    console.log("REQUESTING...");
    try {
        console.log("FETCHING...");
        await axios.get(API_ENDPOINT)
            .then(response => {
                console.log(response.data);
                dispatch(receiveTodos(response.data));
            });
        console.log("FINISHED FETCHING!");
    } catch (err) {
        console.log(err);
    }
});

//add todo
export const addTodo = (content) => (async (dispatch) => {
    try {
        console.log("ADD START...");
        const todoAction = addTodoStart(content);
        dispatch(todoAction);

        const newTodo = {
            _id: todoAction._id,
            content: todoAction.content
        }

        await axios.post(API_ENDPOINT, newTodo)
            .then(response => {
                console.log(response.data);
                dispatch(addTodoSuccess());
            })
        console.log("FINISHED ADDING!");
    } catch (err) {
        dispatch(addTodoFailure(err));
    }
});

//remove todo
export const removeTodo = (_id) => (async (dispatch) => {
    try {
        console.log("REMOVE START...");
        dispatch(removeTodoStart(_id));
        await axios.delete(`${API_ENDPOINT}${_id}`)
            .then(response => {
                console.log(response);
                dispatch(removeTodoSuccess());
            });
        console.log("FINISHED REMOVING!");
    } catch (err) {
        dispatch(removeTodoFailure(err));
    }
});

//save todo
export const saveTodo = (todo) => (async (dispatch) => {
    try {
        console.log("SAVE START...");
        dispatch(saveTodoStart(todo));

        const editedTodo = {
            _id: todo._id,
            completed: todo.completed,
            content: todo.content
        };
        await axios.put(`${API_ENDPOINT}${todo._id}`, editedTodo)
            .then(response => {
                console.log(response);
                dispatch(saveTodoSuccess());
            });
        console.log("FINISHED SAVING!");
    } catch (err) {
        dispatch(saveTodoFailure());
    }
})