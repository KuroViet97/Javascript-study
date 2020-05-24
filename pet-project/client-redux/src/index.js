import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rootReducer from './app/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import Root from './app/routers/Root';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
