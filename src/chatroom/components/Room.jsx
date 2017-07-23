import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Room extends Component {

  componentDidMount() {
    // do room info call here
    const {doGetRoomInfoAsync, room} = this.props;
    // doGetRoomInfoAsync(room.id);
  }

  render() {
    const {room, isDataReady} = this.props;
    return (
      <div className="chat__room-header">
        {isDataReady ?
          <div>
            <h1 className="chat__room-title">{room.name}</h1>
            <h4>
              <span className="chat__room-user">Raul</span>, Quintin, Ryan, Nick, Mark, Abdul, Danielle, Ashwin
            </h4>
          </div>
           :
          <div className="chat__room--no-data" />
        }

      </div>
    );
  }
}

Room.defaultProps = {
  room: {}
};

Room.propTypes = {
  room: PropTypes.object,
  isDataReady: PropTypes.bool.isRequired,
  // doGetRoomInfoAsync: PropTypes.func.isRequired
};

export default Room;
