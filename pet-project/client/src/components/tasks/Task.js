import React from 'react';
import './Task.css';
//apply style for completed task
const Task = ({ task, index, completeTask, removeTask, editTask }) => (
    <div
        className="task"
        style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
        {task.content}
        <button class="fas fa-trash" onClick={() => removeTask(index)} />   
        <button class="fas fa-check" onClick={() => completeTask(index)} />
    </div>
);

export default Task;