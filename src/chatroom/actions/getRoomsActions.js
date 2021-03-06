import {REQUEST_ROOMS} from '../constants';
import {FETCHING, SUCCESS, FAILURE} from '../../core/constants';

export function requestHasFailed(bool) {
  return {
    type: `${REQUEST_ROOMS}_${FAILURE}`,
    hasFailed: bool
  };
}

export function requestIsLoading(bool) {
  return {
    type: `${REQUEST_ROOMS}_${FETCHING}`,
    isLoading: bool
  };
}

export function requestSuccess(payload) {
  return {
    type: `${REQUEST_ROOMS}_${SUCCESS}`,
    rooms: payload
  };
}
