import React from 'react';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import {Provider} from 'react-redux';
import {createStore, combineReducers, compose} from 'redux';

// import {syncHistoryWithStore} from 'react-router-redux';
// const history = syncHistoryWithStore(hashHistory, store);

import App from './pages/App.js';


const getHomePage = (nextState, callback) => {
  require.ensure([], function(require) {
    callback(null, require('./pages/home/index.jsx').default);
  }, 'home');
};

const getCounterFoundPage = (nextState, callback) => {
  require.ensure([], function(require) {
    callback(null, require('./pages/counter/index.jsx').default);
  }, 'counter');
};

const getNotFoundPage = (nextState, callback) => {
  require.ensure([], function(require) {
    callback(null, require('./pages/404/NotFound.js').default);
  }, '404');
};


const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute getComponent={getHomePage} />
      <Route path="home" getComponent={getHomePage} />
      <Route path="counter" getComponent={getCounterFoundPage} />
      <Route path="*" getComponent={getNotFoundPage} />
    </Route>
  </Router>
);
      // <Route path="counter" getComponent={getCounterPage} />

export default Routes;
