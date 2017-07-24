import React, { Component } from 'react';
import {connect} from 'react-redux';

import doGetRoomInfoAsync from '../actions/doGetRoomInfoAsync';
import Room from '../components/Room';

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => {
  return {
    roomInfo: state.roomInfo,
    hasFailed: state.roomInfoHasFailed,
    isLoading: state.roomInfoIsLoading,
  };
};

const RoomContainer = connect(mapStateToProps, mapDispatchToProps)(Room);

export default RoomContainer;
