import React from 'react';
import VisibleTodoList from './app/containers/VisibleTodoList';
import AddTodo from './app/containers/AddTodo';
import Footer from './app/components/Footer';
import Header from './app/containers/Header';

function App() {
  return (
    <div className="center">
      <Header />
      <div className="container">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
