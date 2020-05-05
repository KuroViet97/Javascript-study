import React from 'react';
import CreateTask from './components/tasks/CreateTask';
import Task from './components/tasks/Task';

const App = () => {
  const [tasks, setTasks] = React.useState([]);

  const displayTask = (tasks) => {
    return tasks.map((task, index) => (
      <Task 
        task={task}
        index={index}
        key={index}
        completeTask={completeTask}
        removeTask={removeTask}
      />
    ));
  };

  const createTask = (content) => {
    const newTasks = [...tasks, { content, completed: false }]
    setTasks(newTasks);
  }

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  }

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="todo-container">
      <div className="header">TODO LIST</div>
      <div className="task-list">
        {displayTask(tasks)}
      </div>
      <div className="create-task">
        <CreateTask addNewTask={createTask} />
      </div>
    </div>
  );
}

export default App;
