import React from 'react';
import TodoListView from './app/containers/TodoPage/TodoListView';
import AddTodoView from './app/containers/TodoPage/AddTodoView';
import FooterView from './app/containers/TodoPage/FooterView';
import HeaderView from './app/containers/TodoPage/HeaderView';

function App() {
  return (
    <div className="center">
      <HeaderView />
      <div className="container">
        <AddTodoView />
        <TodoListView />
        <FooterView />
      </div>
    </div>
  );
}

export default App;
