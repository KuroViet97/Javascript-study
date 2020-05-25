import {
    INVALIDATE_TODO,
    REQUEST_TODOS,
    RECEIVE_TODOS,
    ADD_START,
    ADD_SUCCESS,
    ADD_FAILURE,
    REMOVE_START,
    REMOVE_SUCCESS,
    REMOVE_FAILURE,
    SAVE_START,
    SAVE_SUCCESS,
    SAVE_FAILURE
} from '../actions/actions';

import {
    ADD_TODO,
    UPDATE_TODO,
    REMOVE_TODO,
    CANCEL_UPDATE_TODO,
    EDIT_TODO,
    TOGGLE_TODO
} from '../actions/index'

const initialState = {
    isFetching: false,
    didInvaldiate: false,
    todos: []
};

const crudOperations = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    _id: action._id,
                    content: action.content,
                    completed: false,
                    editable: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo._id === action._id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

        case EDIT_TODO:
            return state.map((todo) => {
                if (todo._id === action._id) {
                    todo.editable = !todo.editable;
                }
                return todo;
            });

        case CANCEL_UPDATE_TODO:
            return state.map((todo) => {
                if (todo._id === action._id) {
                    todo.editable = !todo.editable;
                }
                return todo;
            });

        case UPDATE_TODO:
            return state.map((todo) => {
                if (todo._id === action._id) {
                    return {
                        ...todo,
                        editable: !todo.editable,
                        content: action.content
                    }
                } else {
                    return todo;
                }
            });

        case REMOVE_TODO:
            const newState = [...state];
            return newState.filter(state => state._id !== action._id);
        default:
            return state;
    }
}

//compute values of next state 
const asyncTodoList = (state = initialState, action) => {
    switch (action.type) {
        //TODO: to cache data
        case INVALIDATE_TODO:
            return Object.assign({}, state, {
                didInvaldiate: true
            });
        //to fetch new data, reset caching state
        case REQUEST_TODOS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvaldiate: false
            });
        //on fetching successfully, reset caching & fetching state
        case RECEIVE_TODOS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvaldiate: false,
                todos: [...action.todos]
            });

        case ADD_START:
            return Object.assign({}, state, {
                isFetching: true,
                didInvaldiate: false,
                todos: [
                    ...state.todos,
                    {
                        _id: action._id,
                        content: action.content,
                        completed: false,
                        editable: false
                    }
                ]
            });
        case ADD_SUCCESS:
        case ADD_FAILURE:
            return Object.assign({}, state, {
                ...state,
                isFetching: false
            });

        case REMOVE_START:
            return Object.assign({}, state, {
                isFetching: true,
                didInvaldiate: false,
                todos: state.todos.filter(todo => todo._id !== action._id)
            });
        case REMOVE_SUCCESS:
        case REMOVE_FAILURE:
            return Object.assign({}, state, {
                ...state,
                isFetching: false,
            });

        case SAVE_START:
            return Object.assign({}, state, {
                isFetching: true,
                didInvaldiate: false,
                todos: state.todos.map(todo => {
                    if (todo._id === action.todo._id) {
                        todo.content = action.todo.content;
                        todo.completed = action.todo.completed;
                    }
                    return todo;
                })
            })

        case SAVE_SUCCESS:
        case SAVE_FAILURE:
            return Object.assign({}, state, {
                ...state,
                isFetching: false,
            });
        case ADD_TODO:
        case REMOVE_TODO:
        case TOGGLE_TODO:
        case UPDATE_TODO:
        case CANCEL_UPDATE_TODO:
        case EDIT_TODO:
            return Object.assign({}, state, {
                ...state,
                didInvaldiate: false,
                todos: crudOperations(state.todos, action)
            });
        default:
            return state;
    }
}

export default asyncTodoList;