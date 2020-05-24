import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import asyncTodoList from './reducers';

const rootReducer = combineReducers({
    visibilityFilter,
    asyncTodoList
});

export default rootReducer;