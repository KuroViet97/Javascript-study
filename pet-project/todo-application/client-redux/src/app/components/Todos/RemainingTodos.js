import React from 'react';
import PropTypes from 'prop-types';

const RemainingTodos = ({ todoList }) => {
    const [remainingTodos, setRemainingTodos] = React.useState(todoList.length);

    React.useEffect(() => {
        setRemainingTodos(todoList.filter(todo => !todo.completed).length);
    }, [todoList]);

    return (
        <>
            <strong>Remaining Tasks:</strong> {remainingTodos}
        </>
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