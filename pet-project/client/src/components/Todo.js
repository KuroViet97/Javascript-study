import React from 'react';
import './Todo.css';

//apply style for completed task
const Task = ({ task }) => (
    <div
        className="task"
        style={{ texDecoration: task.completed ? "line-through" : "" }}
    >
        {task.content}
    </div>
);

const Todo = ( {tasks} ) => {
    return (
        <div className="tasks">
            {tasks.map((task, index) => (
                <Task 
                    task={task}
                    index={index}
                    key={index}
                />
            ))}
        </div>
    );
}

export default Todo;