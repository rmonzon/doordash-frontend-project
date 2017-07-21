import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import App from './App';
// import Home from './views/Home/Home';
// import Login from './views/Login/Login';
import './styles/App.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={App}>
    </Route>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
