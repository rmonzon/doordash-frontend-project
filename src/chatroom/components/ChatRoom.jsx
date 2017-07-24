import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Room from '../containers/Room';
import RoomsList from './RoomsList';
import MessagesList from './MessagesList';
import TypingBox from './TypingBox';
import Spinner from '../../core/components/Spinner';
import '../../styles/login.scss';
import avatar from '../../images/avatar.png';

const username = 'Raul Rivero';

class ChatRoom extends Component {
  state = {
    rooms: [],
    selectedRoom: {},
    indexSelectedRoom: 0
  };

  componentDidMount() {
    const {
      doGetRoomsAsync,
      doGetRoomInfoAsync,
      doGetRoomMessagesAsync
    } = this.props;
    // Simulate server response delay
    doGetRoomsAsync();
    doGetRoomInfoAsync(0);
    doGetRoomMessagesAsync(0);
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
    const {rooms, indexSelectedRoom} = this.state;
    const {doPostNewMessageAsync} = this.props;
    const newMessage = {
      id: 'H1l-B17Ib',
      name: username,
      message: msgBody
    };
    newMsgList.push(newMessage);
    rooms[indexSelectedRoom]['messages'] = newMsgList;
    this.setState({selectedRoom: rooms[indexSelectedRoom]});
    // we send the POST request to insert a new message
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

  render() {
    const {selectedRoom} = this.state;
    const roomMessages = selectedRoom.messages || [];
    const {rooms, roomsIsLoading, roomMsgIsLoading} = this.props;
    return (
      <div className="chat__container">
        <div className="chat__left-panel">
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
              <div>
                <h2 className="chat__username">{username}</h2>
                <h6>Online for 12 minutes</h6>
              </div>
          }
          <RoomsList
            isDataReady={!roomsIsLoading}
            rooms={rooms}
            clickRoom={this.handleClickRoom} />
        </div>

        <div className="chat__right-panel">
          <Room
            isDataReady={!roomMsgIsLoading}
            room={selectedRoom}
            loggedInUser={username} />

          {roomMessages.length > 0 &&
            <MessagesList
              loggedInUser={username}
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
