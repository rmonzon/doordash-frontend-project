import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import shortid from 'shortid';

import Room from '../containers/Room';
import RoomsList from './RoomsList';
import MessagesList from './MessagesList';
import TypingBox from './TypingBox';
import Spinner from '../../core/components/Spinner';
import PanelButton from './PanelButton';
import '../../styles/login.scss';
import avatar from '../../images/avatar.png';

class ChatRoom extends Component {
  state = {
    rooms: [],
    isPanelOpen: true,
    userSession: {},
    selectedRoom: {},
    indexSelectedRoom: 0
  };

  componentDidMount() {
    const {
      history,
      doGetRoomsAsync,
      doGetRoomInfoAsync,
      doGetRoomMessagesAsync
    } = this.props;
    const session = JSON.parse(sessionStorage.getItem('doordashChatSession'));
    // Check that the user has an active session, otherwise redirect back to login page
    if (!session || !session.username) {
      history.push('/');
    }
    else {
      this.setState({userSession: session});
      // Simulate server response delay
      doGetRoomsAsync();
      doGetRoomInfoAsync(0);
      doGetRoomMessagesAsync(0);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {roomMsg, roomInfo} = nextProps;
    const {indexSelectedRoom} = this.state;
    if (roomMsg.length > 0) {
      this.setSelectedRoom(nextProps.rooms, indexSelectedRoom, roomInfo.users, roomMsg);
    }
  }

  handleOnSubmit = msgBody => {
    const newMsgList = this.state.selectedRoom.messages;
    const {rooms, indexSelectedRoom, userSession} = this.state;
    const {doPostNewMessageAsync} = this.props;
    const newMessage = {
      id: shortid.generate(),
      name: userSession.username,
      message: msgBody
    };
    newMsgList.push(newMessage);
    rooms[indexSelectedRoom]['messages'] = newMsgList;
    this.setState({selectedRoom: rooms[indexSelectedRoom]});
    doPostNewMessageAsync(rooms[indexSelectedRoom].id, newMessage);
  };

  handleClickRoom = e => {
    const {
      doGetRoomInfoAsync,
      doGetRoomMessagesAsync
    } = this.props;
    const index = Number(e.target.id);
    doGetRoomInfoAsync(index);
    doGetRoomMessagesAsync(index);
    this.setState({indexSelectedRoom: index});
  };

  setSelectedRoom = (rooms, index, users, messages) => {
    rooms.map(room => room['selected'] = false);
    rooms[index]['selected'] = true;
    if (users) {
      rooms[index]['users'] = users;
    }
    if (messages) {
      rooms[index]['messages'] = messages;
    }
    this.setState({selectedRoom: rooms[index], rooms});
  };

  handleLogout = e => {
    e.preventDefault();
    const {history} = this.props;
    sessionStorage.clear();
    history.push('/');
  };

  // Calculates the online time in seconds from the login time until current time
  computeOnlineTime = () => {
    const {userSession} = this.state;
    if (userSession.loginTime !== undefined) {
      const diff = Math.abs(new Date(userSession.loginTime) - new Date(Date.now()));
      return diff / 1000 | 0;
    }
    return 0;
  };

  // Converts the total amount of online seconds to the format 'HH hours MM minutes'
  formatOnlineTime = () => {
    const secs = this.computeOnlineTime();
    const sec_num = parseInt(secs, 10);
    const hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);

    return hours > 0 ? `${hours} hour(s) ${minutes} minutes` : `${minutes} minutes`;
  };

  expandCloseRightPanel = () => {
    this.setState({isPanelOpen: !this.state.isPanelOpen});
  };

  scrollToBottom = () => {
    // Delay to wait for DOM element to be ready
    setTimeout(() => {
      const objDiv = document.querySelector('.messages__container');
      if (objDiv) {
        objDiv.scrollTop = objDiv.scrollHeight;
      }
    }, 100);
  };

  render() {
    const {selectedRoom, userSession, isPanelOpen} = this.state;
    const {rooms, roomsIsLoading, roomMsgIsLoading} = this.props;
    const roomMessages = selectedRoom.messages || [];
    const onlineTime = this.formatOnlineTime();
    if (!roomMsgIsLoading) {
      this.scrollToBottom();
    }
    return (
      <div className="chat__container">
        <div className={cx('chat__left-panel', {'minimized': !isPanelOpen})}>
          <PanelButton
            onOpenPanel={this.expandCloseRightPanel} />

          <div className={cx({'chat__avatar-container': !roomsIsLoading, 'chat__avatar--no-data': roomsIsLoading})}>
            <img src={avatar} className={cx({'chat__avatar-img': !roomsIsLoading, 'chat__img--no-data': roomsIsLoading})} />
            {!roomsIsLoading &&
              <div className="chat__avatar-mask">
                <small>Change</small>
              </div>
            }
          </div>

          {roomsIsLoading ?
            <div className="chat__username--no-data" /> :
            <div className="chat__username-container">
              <h2 className="chat__username">{userSession.username}</h2>
              <h6>Online for {onlineTime}</h6>
            </div>
          }

          <RoomsList
            isDataReady={!roomsIsLoading}
            rooms={rooms}
            clickRoom={this.handleClickRoom} />

          <button
            type="button"
            className="button button-link chat__logout-button"
            onClick={this.handleLogout}>
            Log out
          </button>
        </div>
        <div className="chat__right-panel">
          <Room
            isDataReady={!roomMsgIsLoading}
            room={selectedRoom}
            loggedInUser={userSession.username} />
          {
            roomMessages.length > 0 &&
            !roomMsgIsLoading &&
            <MessagesList
              loggedInUser={userSession.username}
              messages={roomMessages} />
          }
          {roomMsgIsLoading ?
            <Spinner classNames={'chat__spinner'} /> :
            <TypingBox onSubmit={this.handleOnSubmit} />
          }
        </div>
      </div>
    );
  }
}

ChatRoom.propTypes = {
  rooms: PropTypes.array.isRequired,
  roomsIsLoading: PropTypes.bool.isRequired,
  roomInfo: PropTypes.object.isRequired,
  roomInfoIsLoading: PropTypes.bool.isRequired,
  roomMsg: PropTypes.array.isRequired,
  roomMsgIsLoading: PropTypes.bool.isRequired
};

export default ChatRoom;
