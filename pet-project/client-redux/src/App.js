import React from 'react';
import HeaderView from './app/containers/HeaderView';
import { loadUser } from './app/actions/authActions';
import store from './index';
import { Route, Switch } from 'react-router-dom';
import TodoView from './app/containers/TodoPage/TodoView';
import RegisterForm from './app/components/Auth/RegisterForm';

class App extends React.Component {
      componentDidMount() {
            store.dispatch(loadUser());
      }

      render() {
            return (
                  <div className="container">
                        <HeaderView />
                        <Switch>
                              <Route path="/register" component={RegisterForm} />
                              <Route path="/todo" exact component={TodoView} />
                              <Route path="/" exact component={TodoView} />
                        </Switch>
                  </div>
            );
      }
}

export default App;
