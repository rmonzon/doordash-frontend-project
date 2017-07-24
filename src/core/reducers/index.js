import { combineReducers } from 'redux'
// import login from '../../login/reducers';
import {roomsHasFailed, roomsIsLoading, rooms} from '../../chatroom/reducers/chatroom';
import {roomInfoHasFailed, roomInfoIsLoading, roomInfo} from '../../chatroom/reducers/room.info';
import {roomMsgHasFailed, roomMsgIsLoading, roomMessages} from '../../chatroom/reducers/room.messages';


export default combineReducers({
  roomsHasFailed,
  roomsIsLoading,
  rooms,
  roomInfoHasFailed,
  roomInfoIsLoading,
  roomInfo,
  roomMsgHasFailed,
  roomMsgIsLoading,
  roomMessages
});
