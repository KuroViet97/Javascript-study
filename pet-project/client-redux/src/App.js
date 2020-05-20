import React from 'react';
import TodoListView from './app/containers/TodoListView';
import AddTodoView from './app/containers/AddTodoView';
import FooterView from './app/containers/FooterView';
import HeaderView from './app/containers/HeaderView';

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
