import React from 'react';
import PropTypes from 'prop-types';

const RemainingTasks = ({ todoList }) => {
    const [remainingTasks, setRemainingTasks] = React.useState(todoList.length);

    React.useEffect(() => {
        setRemainingTasks(todoList.filter(todo => !todo.completed).length);
    }, [todoList]);

    return (
        <div className="right">
            <strong>Remaining Tasks:</strong> {remainingTasks}
        </div>

    );
};

RemainingTasks.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            content: PropTypes.string.isRequired
        })
    )
};

export default RemainingTasks;