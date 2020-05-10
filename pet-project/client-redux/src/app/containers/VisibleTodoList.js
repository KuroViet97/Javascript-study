import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions/index';

const getVisibleTodoList = (todoList, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todoList;
        case 'SHOW_COMPLETED':
            return todoList.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return todoList.filter(todo => !todo.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

//map redux state to props state
const mapStateToProps = state => {
    return {
        todoList: getVisibleTodoList(state.todoList, state.visibilityFilter),
        remainingTodoList: getVisibleTodoList(state.todoList, VisibilityFilters.SHOW_ACTIVE)
    }
};

//map redux dispatch to props 
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;