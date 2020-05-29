import React from 'react';
import { loadUser } from './app/actions/authActions';
import store from './index';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegisterPage from './app/containers/AuthPage/RegisterPage';
import Navbarview from './app/containers/Navbar/Navbarview';
import LoginPage from './app/containers/AuthPage/LoginPage';
import TodoPage from './app/containers/TodoPage/TodoPage';

class App extends React.Component {
      componentDidMount() {
            store.dispatch(loadUser());
      }

      render() {
            return (
                  <div className="container">
                        <Navbarview />
                        <Switch>
                              <Route path="/register" component={RegisterPage} />
                              <Route path="/login" component={LoginPage} />
                              <Route path="/todo" exact component={TodoPage} />
                              <Route path="/" exact component={TodoPage} />
                              <Redirect to="/" />
                        </Switch>
                  </div>
            );
      }
}

export default App;
