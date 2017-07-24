import {REQUEST_ROOMS} from '../constants';
import {FETCHING, SUCCESS, FAILURE} from '../../core/constants';

export function roomsHasFailed(state = false, action) {
  switch (action.type) {
    case `${REQUEST_ROOMS}_${FAILURE}`:
      return action.hasFailed;
    default:
      return state;
  }
}

export function roomsIsLoading(state = false, action) {
  switch (action.type) {
    case `${REQUEST_ROOMS}_${FETCHING}`:
      return action.isLoading;
    default:
      return state;
  }
}

export function rooms(state = [], action) {
  switch (action.type) {
    case `${REQUEST_ROOMS}_${SUCCESS}`:
      return action.rooms;
    default:
      return state;
  }
}
