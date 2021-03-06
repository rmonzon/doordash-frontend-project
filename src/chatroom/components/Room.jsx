import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Room extends PureComponent {

  formatRoomNames = names => {
    if (names) {
      return names.join(', ');
    }
    return '';
  };

  render() {
    const {room, isDataReady, loggedInUser} = this.props;
    const names = this.formatRoomNames(room.users);
    return (
      <div className="chat__room-header">
        {isDataReady ?
          <div>
            <h1 className="chat__room-title">{room.name}</h1>
            <h4>
              <span className="chat__room-user">{loggedInUser}</span>, {names}
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
  room: {},
  loggedInUser: ''
};

Room.propTypes = {
  room: PropTypes.object,
  loggedInUser: PropTypes.string,
  isDataReady: PropTypes.bool.isRequired
};

export default Room;
