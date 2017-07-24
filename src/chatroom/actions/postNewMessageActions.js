import {POST_NEW_MESSAGE} from '../constants';
import {FETCHING, SUCCESS, FAILURE} from '../../core/constants';

export function requestHasFailed(bool) {
  return {
    type: `${POST_NEW_MESSAGE}_${FAILURE}`,
    hasFailed: bool
  };
}

export function requestIsLoading(bool) {
  return {
    type: `${POST_NEW_MESSAGE}_${FETCHING}`,
    isLoading: bool
  };
}

export function requestSuccess(payload) {
  return {
    type: `${POST_NEW_MESSAGE}_${SUCCESS}`,
    roomInfo: payload
  };
}
