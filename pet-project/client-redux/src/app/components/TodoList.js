import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import RemainingTasks from './RemainingTasks';

const TodoList = ({ todoList, remainingTodoList, toggleTodo, removeTodo }) => {
    const displayTodoTask = () => (
        todoList.map(todo => (
            <Todo
                key={todo.id}
                {...todo}
                onComplete={() => toggleTodo(todo.id)}
                onRemove={() => removeTodo(todo.id)}
            />
        ))
    );
    return (
        <>
            <RemainingTasks
                todoList={remainingTodoList}
            />
            <table className="responsive-table">
                <thead>
                    <tr>
                        <th>Task Description</th>
                        <th>Status</th>
                        <th>Task Modification</th>
                    </tr>
                </thead>
                <tbody>
                    {displayTodoTask()}
                </tbody>
            </table>
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