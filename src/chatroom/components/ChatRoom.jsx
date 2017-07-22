import React, { Component } from 'react';
import cx from 'classnames';

import '../../styles/login.scss';
import avatar from '../../images/avatar.png';

const rooms = [
  {
    "name": "Tea Chats",
    "id": 0
  },
  {
    "name": "Coffee Chats",
    "id": 1,
    "selected": true
  },
  {
    "name": "Beer Chats",
    "id": 2
  },
  {
    "name": "Wine Chats",
    "id": 3
  },
  {
    "name": "Whisky Chats",
    "id": 4
  }
];

class ChatRoom extends Component {

  handleOnSubmit = e => {
    e.preventDefault();

    console.log('here');
  };

  handleClickRoom = e => {
    const index = Number(e.target.id);
    rooms.map(room => room['selected'] = false);
    rooms[index]['selected'] = true;
  };

  render() {
    return (
      <div className="chat__container">
        <div className="chat__right-panel">
          <div className="chat__avatar-container">
            <img src={avatar} className="chat__avatar-img" />
            <div className="chat__avatar-mask">
              <small>Change</small>
            </div>
          </div>
          <h2 className="chat__username">Raul Rivero</h2>
          <h6>Online for 12 minutes</h6>

          <ul className="chat__rooms-list">
            {
              rooms.map(room => (
                <li
                  key={room.id}
                  id={room.id}
                  className={cx({'chat__rooms-list--selected': room.selected})}
                  onClick={this.handleClickRoom}>
                  {room.name}
                </li>
              ))
            }

          </ul>
        </div>
        <div className="chat__left-panel">
          <form className="chat__input-container" onSubmit={this.handleOnSubmit}>
            <div className="chat__input-col--left">
              <input
                id="chat_input_message"
                type="text"
                className="input-field"
                placeholder="Type a message" />
            </div>
            <div className="chat__input-col--right">
              <button type="submit" className="button button-link">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
