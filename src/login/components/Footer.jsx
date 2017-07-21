import React, { Component } from 'react';

const Footer = () => (
  <div className="login-footer__container">
    <div className="login-footer__left-items">
      <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer" className="login-footer__logo">Logo</a>
      <span>&copy; 2017 DoorDash</span>
    </div>
    <div className="login-footer__right-items">
      <a className="twitter-social" href="http://twitter.com/doordash" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a className="facebook-social" href="http://facebook.com/doordash" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a className="instagram-social" href="http://instagram.com/doordash" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
  </div>
);

export default Footer;
