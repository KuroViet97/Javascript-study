import { v4 as randomUUID } from 'uuid';
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

export const requestTodos = () => ({
    type: REQUEST_TODOS,
})

//Function to handle received todos. 
//Normally, axios will automatically convert json to data, so no need for mapping json manually here
export const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos
});

/**
 *  ADD TODO
 */
export const addTodoStart = (content) => ({
    type: ADD_START,
    content,
    _id: generateRandomUUID()
});

export const addTodoSuccess = () => ({
    type: ADD_SUCCESS
});

export const addTodoFailure = (err) => ({
    type: ADD_FAILURE,
    err
});

/**
 * REMOVE TODO
 */
export const removeTodoStart = (_id) => ({
    type: REMOVE_START,
    _id
});

export const removeTodoSuccess = () => ({
    type: REMOVE_SUCCESS
});

export const removeTodoFailure = (err) => ({
    type: REMOVE_FAILURE,
    err
});

/**
 * SAVE TODO
 */
export const saveTodoStart = (todo) => ({
    type: SAVE_START,
    todo
});

export const saveTodoSuccess = () => ({
    type: SAVE_SUCCESS,
});

export const saveTodoFailure = () => ({
    type: SAVE_FAILURE
});