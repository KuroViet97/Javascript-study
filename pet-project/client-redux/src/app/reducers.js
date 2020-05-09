import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

//in case no state given in the beginning (undefined), show all is set as default
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

//manage add item in todo list and toggle 'complete' for a given todo item
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    content: action.content,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todoItem, index) => {
                if (index === action.index) {
                    //new object is created to avoid mutation
                    return Object.assign({}, todoItem, { completed: !todoItem.completed });
                }
                return todoItem;
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;