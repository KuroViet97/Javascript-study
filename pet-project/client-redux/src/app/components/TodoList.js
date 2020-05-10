import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import Header from './Header';

const TodoList = ({ todoList, remainingTodoList, toggleTodo }) => {
    return (
        <>
            <Header
                todoList={remainingTodoList}
            />
            <ul>
                {todoList.map(todo => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)}
                    />
                ))}
            </ul>
        </>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            content: PropTypes.string.isRequired
        })
    ),
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList;