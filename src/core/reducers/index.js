import { combineReducers } from 'redux'
import login from '../../login/reducers';
import chatRoom from '../../chatroom/reducers';

const chatApp = combineReducers({
  login,
  chatRoom
});

export default chatApp;