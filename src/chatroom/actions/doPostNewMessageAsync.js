import 'whatwg-fetch';
import {requestIsLoading, requestSuccess, requestHasFailed} from './postNewMessageActions';

export default (roomId, message) => {
  return async (dispatch, getState) => {
    dispatch(requestIsLoading(true));
    try {
      const response = await fetch(`http://localhost:8081/api/rooms/${roomId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: message.name,
          message: message.message,
        })
      });
      const json = await response.json();
      dispatch(requestIsLoading(false));
      dispatch(requestSuccess(json));
    } catch (e) {
      dispatch(requestHasFailed(true));
    }
  }
};