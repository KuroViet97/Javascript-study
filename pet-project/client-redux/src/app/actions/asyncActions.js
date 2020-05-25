import axios from 'axios';
import { v4 as randomUUID } from 'uuid';

const API_ENDPOINT = 'http://localhost:3001/todos/';

/**
 * ACTION TYPES
 */
//TODO: storing cache with INVALIDATE_TODO
export const INVALIDATE_TODO = 'INVALIDATE_TODO';
export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_FAILURE = 'ADD_FAILURE';

export const SAVE_START = 'SAVE_START';
export const SAVE_SUCCESS = 'SAVE_SUCCESS'
export const SAVE_FAILURE = 'SAVE_FAILURE';

export const REMOVE_START = 'REMOVE_START';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS'
export const REMOVE_FAILURE = 'REMOVE_FAILURE';

const generateRandomUUID = () => {
    const uuid = randomUUID();
    console.log('UUID CREATED: ' + uuid);
    return uuid;
};

/**
 * ACTION CREATORS
 */
export const invalidateTodo = (todos) => ({
    type: INVALIDATE_TODO,
    todos
});

const requestTodos = () => ({
    type: REQUEST_TODOS,
})

//Function to handle received todos. 
//Normally, axios will automatically convert json to data, so no need for mapping json manually here
const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos
});

/**
 *  ADD TODO
 */
const addTodoStart = (content) => ({
    type: ADD_START,
    content,
    _id: generateRandomUUID()
});

const addTodoSuccess = () => ({
    type: ADD_SUCCESS
});

const addTodoFailure = (err) => ({
    type: ADD_FAILURE,
    err
});

/**
 * REMOVE TODO
 */
const removeTodoStart = (_id) => ({
    type: REMOVE_START,
    _id
});

const removeTodoSuccess = () => ({
    type: REMOVE_SUCCESS
});

const removeTodoFailure = (err) => ({
    type: REMOVE_FAILURE,
    err
});

/**
 * SAVE TODO
 */
const saveTodoStart = (todo) => ({
    type: SAVE_START,
    todo
});

const saveTodoSuccess = () => ({
    type: SAVE_SUCCESS,
});

const saveTodoFailure = () => ({
    type: SAVE_FAILURE
});

/**
 * Thunk creators
 */
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

        console.log(newTodo.content);
        console.log(newTodo._id);

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
        console.log(editedTodo);
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