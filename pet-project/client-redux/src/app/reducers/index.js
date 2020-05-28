import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import asyncTodoList from './asyncTodoList';
import userAuth from './userAuth';
import serverError from './serverError';

const rootReducer = combineReducers({
    visibilityFilter,
    asyncTodoList,
    serverError,
    userAuth,
});

export default rootReducer;