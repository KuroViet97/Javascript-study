/**
 * Action Creators
 */

//create a todo task
import { v4 as randomUUID } from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const CANCEL_UPDATE_TODO = 'CANCEL_UPDATE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const generateRandomUUID = () => {
    const uuid = randomUUID();
    console.log('UUID CREATED: ' + uuid);
    return uuid;
};

export const addTodo = content => ({
    type: ADD_TODO,
    _id: generateRandomUUID(),
    content
});

//remove a todo task
export const removeTodo = _id => ({
    type: REMOVE_TODO,
    _id
});

//mark complete/incomplete tasks
export const toggleTodo = _id => ({
    type: TOGGLE_TODO,
    _id
});

//set a todo task editable
export const editTodo = _id => ({
    type: EDIT_TODO,
    _id,
});

//update a todo task
export const updateTodo = (_id, content) => ({
    type: UPDATE_TODO,
    _id,
    content
});

//cancel updating a todo task
export const cancelUpdateTodo = (_id) => ({
    type: CANCEL_UPDATE_TODO,
    _id
});

//set filters
export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};