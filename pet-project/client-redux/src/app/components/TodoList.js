import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todoList, onTodoClick}) => {
    return (
        <ul>
            {todoList.map((todo, index) => (
                <Todo 
                    key = {todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            ))}
        </ul>

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
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;