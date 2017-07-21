import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import '../../styles/login.scss';

class Login extends Component {
  handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);
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
              className="input-field"
              placeholder="Type your username..." />
            <button type="submit" className="button">Let's Go</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
export {Login};
