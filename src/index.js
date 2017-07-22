import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chatApp from './core/reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import ChatRoom from './chatroom/components/ChatRoom';
import './styles/App.scss';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(chatApp);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ChatRoom} />
        <Route exact path="/login" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
