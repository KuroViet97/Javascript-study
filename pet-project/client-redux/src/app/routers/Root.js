import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../App';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/:filter?' exact component={App} />
                <Redirect to='/' />
            </Switch>
        </Router>
    </Provider>
);

export default Root;