import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const RoomsList = ({rooms, clickRoom, isDataReady}) => (
  <ul className="chat__rooms-list">
    {!isDataReady && <li className="chat__room-list--no-data" />}
    {!isDataReady && <li className="chat__room-list--no-data" />}
    {!isDataReady && <li className="chat__room-list--no-data" />}
    {
      rooms.map(room => (
        <li
          key={room.id}
          id={room.id}
          className={cx({'chat__rooms-list--selected': room.selected})}
          onClick={clickRoom}>
          {room.name}
        </li>
      ))
    }
  </ul>
);

RoomsList.propTypes = {
  rooms: PropTypes.array.isRequired,
  clickRoom: PropTypes.func.isRequired,
  isDataReady: PropTypes.bool.isRequired
};

export default RoomsList;
