import { combineReducers } from 'redux';
import todoList from './todoList';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    todoList,
    visibilityFilter
});

export default rootReducer;