import React from 'react';
import PropTypes from 'prop-types';

const RemainingTodos = ({ todoList }) => {
    const [remainingTodos, setRemainingTodos] = React.useState(todoList.length);

    React.useEffect(() => {
        setRemainingTodos(todoList.filter(todo => !todo.completed).length);
    }, [todoList]);

    return (
        <span className="float-right pb-3">
            <strong>Remaining Tasks:</strong> {remainingTodos}
        </span>

    );
};

RemainingTodos.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            content: PropTypes.string.isRequired
        })
    )
};

export default RemainingTodos;