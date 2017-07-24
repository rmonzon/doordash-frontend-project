import React, { Component } from 'react';
import {connect} from 'react-redux';

import doGetRoomsAsync from '../actions/doGetRoomsAsync';
import doGetRoomInfoAsync from '../actions/doGetRoomInfoAsync';
import doGetRoomMessagesAsync from '../actions/doGetRoomMessagesAsync';
import doPostNewMessageAsync from '../actions/doPostNewMessageAsync';
import ChatRoom from '../components/ChatRoom';

const mapDispatchToProps = dispatch => ({
  doGetRoomsAsync() {
    dispatch(doGetRoomsAsync());
  },
  doGetRoomInfoAsync(...args) {
    dispatch(doGetRoomInfoAsync(...args));
  },
  doGetRoomMessagesAsync(...args) {
    dispatch(doGetRoomMessagesAsync(...args));
  },
  doPostNewMessageAsync(...args) {
    dispatch(doPostNewMessageAsync(...args));
  }
});

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    roomsHasFailed: state.roomsHasFailed,
    roomsIsLoading: state.roomsIsLoading,
    roomInfo: state.roomInfo,
    roomInfoHasFailed: state.roomInfoHasFailed,
    roomInfoIsLoading: state.roomInfoIsLoading,
    roomMsg: state.roomMessages,
    roomMsgHasFailed: state.roomMsgHasFailed,
    roomMsgIsLoading: state.roomMsgIsLoading
  };
};

const ChatRoomContainer = connect(mapStateToProps, mapDispatchToProps)(ChatRoom);

export default ChatRoomContainer;
