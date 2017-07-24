import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom';

import Login from '../../login/components/Login';
import ChatRoom from '../../chatroom/containers/ChatRoom';

// NOTE: using Hash history here for simplicity purposes (client-side rendering).
// In a real production environment with server-side rendering we'd use browserHistory instead.

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/chat" component={ChatRoom} />
        <Route path="/" component={Login} />
      </Switch>
    </HashRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;