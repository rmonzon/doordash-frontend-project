import React, { Component } from 'react';
import {connect} from 'react-redux';

// import doGetRoomInfoAsync from '../actions/doGetRoomInfoAsync';
import Room from '../components/Room';

const mapDispatchToProps = dispatch => {
  return {};
  // return ({
  //   doGetRoomInfoAsync: (...args) => {
  //     dispatch(doGetRoomInfoAsync(...args));
  //   }
  // })
};

const mapStateToProps = state => {
  return {
    // items: state.items,
    // hasFailed: state.itemsHasErrored,
    // isLoading: state.itemsIsLoading
  };
};

const RoomContainer = connect(mapStateToProps, mapDispatchToProps)(Room);

export default RoomContainer;
