import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Root from './core/components/Root';
import './styles/App.scss';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore;

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
