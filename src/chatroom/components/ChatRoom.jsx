import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Room from '../containers/Room';
import RoomsList from './RoomsList';
import Spinner from '../../core/components/Spinner';
import '../../styles/login.scss';
import avatar from '../../images/avatar.png';

class ChatRoom extends Component {
  state = {
    selectedRoom: {}
  };

  componentDidMount() {
    const {doGetRoomsAsync} = this.props;
    doGetRoomsAsync();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({selectedRoom: nextProps.rooms[0]});
  }

  handleOnSubmit = e => {
    e.preventDefault();

    console.log('here');
  };

  handleClickRoom = e => {
    const index = Number(e.target.id);
    const {rooms} = this.props;
    rooms.map(room => room['selected'] = false);
    rooms[index]['selected'] = true;
    this.setState({selectedRoom: rooms[index]});
  };

  render() {
    const {selectedRoom} = this.state;
    const {rooms, isLoading} = this.props;
    return (
      <div className="chat__container">
        <div className="chat__left-panel">
          <div className={cx({'chat__avatar-container': !isLoading, 'chat__avatar--no-data': isLoading})}>
            <img src={avatar} className={cx({'chat__avatar-img': !isLoading, 'chat__img--no-data': isLoading})} />
            {
              !isLoading &&
              <div className="chat__avatar-mask">
                <small>Change</small>
              </div>
            }
          </div>
          {
            isLoading ?
              <div className="chat__username--no-data" /> :
              <div>
                <h2 className="chat__username">Raul Rivero</h2>
                <h6>Online for 12 minutes</h6>
              </div>
          }
          <RoomsList isDataReady={!isLoading} rooms={rooms} clickRoom={this.handleClickRoom} />
        </div>

        <div className="chat__right-panel">
          <Room isDataReady={!isLoading} room={selectedRoom} />

          {isLoading ?
            <Spinner classNames={'chat__spinner'} /> :
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
          }
        </div>
      </div>
    );
  }
}

ChatRoom.propTypes = {
  rooms: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default ChatRoom;
