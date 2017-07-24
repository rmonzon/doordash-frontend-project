import 'whatwg-fetch';
import {requestIsLoading, requestSuccess, requestHasFailed} from './getRoomMessagesActions';

export default (roomId) => {
  return async (dispatch, getState) => {
    dispatch(requestIsLoading(true));
    try {
      const response = await fetch(`http://localhost:8081/api/rooms/${roomId}/messages`);
      const json = await response.json();
      setTimeout(() => {
        dispatch(requestIsLoading(false));
        dispatch(requestSuccess(json));
      }, 1000);
    } catch (e) {
      dispatch(requestHasFailed(true));
    }
  }
};