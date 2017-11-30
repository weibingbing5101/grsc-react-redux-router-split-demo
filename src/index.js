import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/index.js';

import Routes from './Routes.js';

ReactDOM.render(
  <Provider store={store} >
    <Routes />
  </Provider>,
  document.getElementById('root')
);

