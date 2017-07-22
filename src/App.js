import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Login from './login/components/Login';

class App extends Component {
  render() {
    const {history} = this.props;
    return (
      <div className="App">
        <Login history={history} />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default App;
