import 'whatwg-fetch';
import {requestIsLoading, requestSuccess, requestHasFailed} from './getRoomInfoActions';

export default (roomId) => {
  return async (dispatch, getState) => {
    dispatch(requestIsLoading(true));
    try {
      const response = await fetch(`http://localhost:8081/api/rooms/${roomId}`);
      const json = await response.json();
      dispatch(requestIsLoading(false));
      dispatch(requestSuccess(json));
    } catch (e) {
      dispatch(requestHasFailed(true));
    }
  }
};