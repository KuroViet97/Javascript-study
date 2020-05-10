import React from 'react';
import VisibleTodoList from './app/containers/VisibleTodoList';
import AddTodo from './app/containers/AddTodo';
import Footer from './app/components/Footer';

function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
