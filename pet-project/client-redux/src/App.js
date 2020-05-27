import React from 'react';
import TodoListView from './app/containers/TodoPage/TodoListView';
import AddTodoView from './app/containers/TodoPage/AddTodoView';
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
                        <div className="container">
                              <HeaderView />
                        </div>
                        <div className="container">
                              <AddTodoView />
                              <TodoListView />
                        </div>
                  </div>

            );
      }
}

export default App;
