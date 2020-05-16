import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import RemainingTasks from './RemainingTasks';
import EditTodo from './EditTodo';

const TodoList = ({ todoList, remainingTodoList, toggleTodo, removeTodo, editTodo }) => {
    const renderTodo = (todo) => (
        <Todo
            key={todo.id}
            {...todo}
            onComplete={() => toggleTodo(todo.id)}
            onRemove={() => removeTodo(todo.id)}
            onEdit={() => editTodo(todo.id)}
        />
    );

    const renderEditTodo = (todo) => (
        <EditTodo
            todo={todo}
            key={todo.id}
        />
    );

    return (
        <>
            <RemainingTasks
                todoList={remainingTodoList}
            />
            <table className="responsive-table">
                <thead className="centered">
                    <tr>
                        <th>Task Description</th>
                        <th>Status</th>
                        <th>Task Modification</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map(todo => (
                        todo.editable ? renderEditTodo(todo) : renderTodo(todo)
                    ))}
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