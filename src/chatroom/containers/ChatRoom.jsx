import React, { Component } from 'react';
import {connect} from 'react-redux';

import doGetRoomsAsync from '../actions/doGetRoomsAsync';
import ChatRoom from '../components/ChatRoom';
import selector from '../reducers';

const mapDispatchToProps = dispatch => ({
  doGetRoomsAsync() {
    dispatch(doGetRoomsAsync());
  }
});

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    hasFailed: state.roomsHasFailed,
    isLoading: state.roomsIsLoading,
  };
};

const ChatRoomContainer = connect(mapStateToProps, mapDispatchToProps)(ChatRoom);

export default ChatRoomContainer;
