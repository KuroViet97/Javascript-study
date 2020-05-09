import React from 'react';
//apply style for isCompleted task
const Task = ({ task, index, removeTask, completeTask }) => (
    <div
        className="task"
        style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
    >
        {task.content}
        <button class="fas fa-trash" onClick={() => removeTask(index)} />   
        <button class="fas fa-check" onClick={() => completeTask(index)} />
    </div>
);

export default Task;