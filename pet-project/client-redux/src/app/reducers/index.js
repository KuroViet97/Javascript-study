import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import asyncTodoList from './asyncTodoList';
import auth from './auth';
import serverError from './serverError';

const rootReducer = combineReducers({
    visibilityFilter,
    asyncTodoList,
    auth,
    serverError
});

export default rootReducer;