import React from 'react';
import Task from '../components/Task';
import CreateTask from '../components/CreateTask';
import '../index.css';

const TodoPage = () => {
      const [tasks, setTasks] = React.useState([]);
      const [tasksRemaining, setTasksRemaining] = React.useState(0);

      React.useEffect(() => {
            setTasksRemaining(tasks.filter(task => !task.isCompleted).length);
      }, [tasks]);

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
            const newTasks = [...tasks, { content, isCompleted: false }]
            setTasks(newTasks);
      }

      const completeTask = (index) => {
            const newTasks = [...tasks];
            newTasks[index] = { ...newTasks[index], isCompleted: !newTasks[index].isCompleted };
            setTasks(newTasks);
      }

      const removeTask = (index) => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
      }

      return (
            <div className="todo-container">
                  <div className="header">Remaining Tasks: {tasksRemaining}</div>
                  <div className="task-list">
                        {displayTask(tasks)}
                  </div>
                  <div className="create-task">
                        <CreateTask addNewTask={createTask} />
                  </div>
            </div>
      );
}

export default TodoPage;