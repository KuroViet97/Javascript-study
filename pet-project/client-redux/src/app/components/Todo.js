import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onComplete, onRemove, completed, content }) => {
    return (
        <li
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {content}
            <button onClick={onComplete}>Mark as completed</button>
            <button onClick={onRemove}>Remove</button>
        </li >
    );
}

Todo.propTypes = {
    onComplete: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired
}

export default Todo;