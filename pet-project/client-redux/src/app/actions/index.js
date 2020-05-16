/**
 * Action Creators
 */

//create a todo task
let nextTodoId = 0;
export const addTodo = content => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    content
});

//remove a todo task
export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    id
});

//mark complete/incomplete tasks
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

//set a todo task editable
export const editTodo = id => ({
    type: 'EDIT_TODO',
    id,
});

//update a todo task
export const updateTodo = (id, content) => ({
    type: 'UPDATE_TODO',
    id,
    content
});

//cancel updating a todo task
export const cancelUpdateTodo = (id) => ({
    type: 'CANCEL_UPDATE_TODO',
    id
});

//set filters
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};