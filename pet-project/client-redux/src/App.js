import React from 'react';
import TodoListView from './app/containers/TodoPage/TodoListView';
import AddTodoView from './app/containers/TodoPage/AddTodoView';
import FooterView from './app/containers/TodoPage/FooterView';
import HeaderView from './app/containers/HeaderView';
import { loadUser } from './app/actions/authActions';
import store from './index';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div>
        <div className="center">
          <HeaderView />
        </div>
        <div className="container">
          <AddTodoView />
          <TodoListView />
          <FooterView />
        </div>
      </div>

    );
  }
}

export default App;
