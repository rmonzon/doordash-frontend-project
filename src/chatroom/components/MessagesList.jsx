import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MessagesList = ({messages, loggedInUser}) => (
  <div className="messages__container">
    {
      messages.map(msgObj => (
        msgObj.name === loggedInUser ?
          <div className="right messages-column" key={msgObj.id}>
            <div className="message-bubble-container">
              <div>
                <div className="mine message-bubble btm-right-out">
                  <span>{msgObj.message}</span>
                </div>
              </div>
            </div>
          </div> :
          <div className="left messages-column" key={msgObj.id}>
            <div className="message-bubble-container">
              <div>
                <div className="other message-bubble btm-left-in">
                  <span>{msgObj.message}</span>
                </div>
              </div>
              <span>{msgObj.name}</span>
            </div>
          </div>
      ))
    }
  </div>
);

MessagesList.defaultProps = {
  messages: [],
  loggedInUser: ''
};

MessagesList.propTypes = {
  messages: PropTypes.array,
  loggedInUser: PropTypes.string
};

export default MessagesList;
