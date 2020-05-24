import { connect } from 'react-redux';
import { toggleTodo, removeTodo, editTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions/index';
import { fetchTodos } from '../actions/actions';

const getTodoList = (todoList, filter) => {
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
        todoList: getTodoList(state.asyncTodoList.todos, state.visibilityFilter),
        remainingTodoList: getTodoList(state.asyncTodoList.todos, VisibilityFilters.SHOW_ACTIVE)
    }
};

//map redux dispatch to props 
const mapDispatchToProps = dispatch => ({
    toggleTodo: _id => dispatch(toggleTodo(_id)),
    removeTodo: _id => dispatch(removeTodo(_id)),
    editTodo: _id => dispatch(editTodo(_id)),
    fetchTodos: () => dispatch(fetchTodos())
});

const TodoListView = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListView;