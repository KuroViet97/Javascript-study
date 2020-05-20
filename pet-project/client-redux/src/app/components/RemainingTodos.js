import React from 'react';
import PropTypes from 'prop-types';

const RemainingTodos = ({ todoList }) => {
    const [remainingTodos, setRemainingTodos] = React.useState(todoList.length);

    React.useEffect(() => {
        setRemainingTodos(todoList.filter(todo => !todo.completed).length);
    }, [todoList]);

    return (
        <div className="right">
            <strong>Remaining Tasks:</strong> {remainingTodos}
        </div>

    );
};

RemainingTodos.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            content: PropTypes.string.isRequired
        })
    )
};

export default RemainingTodos;