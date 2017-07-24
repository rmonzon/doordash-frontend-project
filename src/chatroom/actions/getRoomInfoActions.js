import {REQUEST_ROOM_INFO} from '../constants';
import {FETCHING, SUCCESS, FAILURE} from '../../core/constants';

export function requestHasFailed(bool) {
  return {
    type: `${REQUEST_ROOM_INFO}_${FAILURE}`,
    hasFailed: bool
  };
}

export function requestIsLoading(bool) {
  return {
    type: `${REQUEST_ROOM_INFO}_${FETCHING}`,
    isLoading: bool
  };
}

export function requestSuccess(payload) {
  return {
    type: `${REQUEST_ROOM_INFO}_${SUCCESS}`,
    roomInfo: payload
  };
}
