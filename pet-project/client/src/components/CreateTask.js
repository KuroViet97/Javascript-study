import React from 'react';

const CreateTask = ({ addNewTask }) => {
    const [task, setTask] = React.useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (!task) {
            return;
        }

        addNewTask(task);
        setTask('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={task}
                placeholder="Add a new task"
                onChange={event => setTask(event.target.value)}
            />
        </form>
    );
};

export default CreateTask;