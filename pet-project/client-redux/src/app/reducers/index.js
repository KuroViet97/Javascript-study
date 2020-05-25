import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import asyncTodoList from './asyncTodoList';

const rootReducer = combineReducers({
    visibilityFilter,
    asyncTodoList
});

export default rootReducer;