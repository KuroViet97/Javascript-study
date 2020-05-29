import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rootReducer from './app/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import Root from './app/routers/Root';

//redux tool extension
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk, logger))
);
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
