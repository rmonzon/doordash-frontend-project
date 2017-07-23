import 'whatwg-fetch';
// import createReducer from '../../core/reducers/createReducer';
import {requestIsLoading, requestSuccess, requestHasFailed} from './getRoomsActions';

// const create = createReducer();

export default () => {
  return async (dispatch, getState) => {
    // dispatch(create(FETCHING));
    dispatch(requestIsLoading(true));

    try {
      const response = await fetch('http://localhost:8080/api/rooms');
      const json = await response.json();
      // dispatch(create(SUCCESS, json));
      setTimeout(() => {
        dispatch(requestIsLoading(false));
        dispatch(requestSuccess(json));
      }, 1000);
      // dispatch(requestSuccess(json));
    } catch (e) {
      // dispatch(create(FAILURE, e.message));
      dispatch(requestHasFailed(true));
    }
  }
};