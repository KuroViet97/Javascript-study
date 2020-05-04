import React from 'react';
import Todo from './components/Todo';
const App = () => {
  const [tasks, setTasks] = React.useState([
    {
      content: "Study Javascript",
      completed: true
    },
    {
      content: "Study React",
      completed: true
    },
    {
      content: "Study Redux",
      completed: false
    }
  ]);

  return (
    <div className="todo-container">
      <div className="header">TODO LIST</div>
      <Todo tasks={tasks} />
    </div>
  );
}

export default App;
