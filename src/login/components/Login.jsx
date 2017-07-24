import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import '../../styles/login.scss';

class Login extends Component {
  state = {
    value: '',
    isLoading: false
  };

  componentDidMount() {
    const {history} = this.props;
    const session = JSON.parse(sessionStorage.getItem('doordashChatSession'));
    // Check if user is already logged in, if it is, redirect to chat rooms page
    if (session && session.username) {
      history.push('/chat');
    }
  }

  handleOnChange = e => {
    this.setState({value: e.target.value});
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const {history} = this.props;
    this.setState({isLoading: true});
    this.saveLoginToSessionStorage();

    setTimeout(() => {
      this.setState({isLoading: false});
      history.push('/chat');
    }, 2000);
  };

  saveLoginToSessionStorage = () => {
    const {value} = this.state;
    const doordashChatSession = {
      username: value,
      loginTime: Date.now()
    };
    sessionStorage.setItem('doordashChatSession', JSON.stringify(doordashChatSession));
  };

  render() {
    const {value, isLoading} = this.state;
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
              autoComplete="off"
              autoFocus
              value={value}
              disabled={isLoading}
              className="input-field"
              placeholder="Type your username..."
              onChange={this.handleOnChange} />
            <button type="submit" className="button button-default" disabled={isLoading}>
              {isLoading ? `Signing in...` : `Let's Go`}
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
