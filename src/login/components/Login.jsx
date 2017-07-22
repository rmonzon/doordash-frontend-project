import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Spinner from '../../core/components/Spinner';
import '../../styles/login.scss';

class Login extends Component {
  state = {
    isLoading: false
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const {history} = this.props;
    this.setState({isLoading: true});

    setTimeout(() => {
      this.setState({isLoading: true});
      history.push('/');
    }, 2000);
  };

  render() {
    return (
      <div className="login-container">
        <Header />
        <div className="login-box__container">
          <form className="login-box__form" onSubmit={this.handleOnSubmit}>
            <h2>Join the DoorDash Chat</h2>
            <input
              id="user-name"
              name="username"
              type="text"
              className="input-field"
              placeholder="Type your username..." />
            <button type="submit" className="button button-default" disabled={this.state.isLoading}>
              Let's Go
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
export {Login};
