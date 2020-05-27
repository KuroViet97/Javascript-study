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

export const fetchTodos = () => ((dispatch) => {
    dispatch(requestTodos());
    console.log("REQUESTING...");
    console.log("FETCHING...");
    axios.get(API_ENDPOINT)
        .then(response => {
            console.log(response.data);
            dispatch(receiveTodos(response.data));
        })
        .then(() => console.log("FINISHED FETCHING!"))
        .catch(err => {
            console.log(err);
        });
});

//add todo
export const addTodo = (content) => ((dispatch) => {
    console.log("ADD START...");
    const todoAction = addTodoStart(content);
    dispatch(todoAction);

    const newTodo = {
        _id: todoAction._id,
        content: todoAction.content
    }

    axios.post(API_ENDPOINT, newTodo)
        .then(response => {
            console.log(response.data);
            dispatch(addTodoSuccess());
        })
        .then(() => console.log("FINISHED ADDING!"))
        .catch(err => {
            console.log(err);
            dispatch(addTodoFailure(err));
        });
});

//remove todo
export const removeTodo = (_id) => ((dispatch) => {
    console.log("REMOVE START...");
    dispatch(removeTodoStart(_id));
    axios.delete(`${API_ENDPOINT}${_id}`)
        .then(response => {
            console.log(response);
            dispatch(removeTodoSuccess());
        })
        .then(() => console.log("FINISHED REMOVING!"))
        .catch(err => {
            console.log(err);
            dispatch(removeTodoFailure(err));
        });
});

//save todo
export const saveTodo = (todo) => ((dispatch) => {
    console.log("SAVE START...");
    dispatch(saveTodoStart(todo));

    const editedTodo = {
        _id: todo._id,
        completed: todo.completed,
        content: todo.content
    };
    axios.put(`${API_ENDPOINT}${todo._id}`, editedTodo)
        .then(response => {
            console.log(response);
            dispatch(saveTodoSuccess());
        })
        .then(() => console.log("FINISHED SAVING!"))
        .catch(err => {
            console.log(err);
            dispatch(saveTodoFailure());
        });
});