import { combineReducers } from 'redux'
// import login from '../../login/reducers';
import {roomsHasFailed, roomsIsLoading, rooms} from '../../chatroom/reducers/chatroom';

export default combineReducers({
  roomsHasFailed,
  roomsIsLoading,
  rooms
});
