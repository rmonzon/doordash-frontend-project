import {REQUEST_ROOM_INFO} from '../constants';
import {FETCHING, SUCCESS, FAILURE} from '../../core/constants';

export function roomInfoHasFailed(state = false, action) {
  switch (action.type) {
    case `${REQUEST_ROOM_INFO}_${FAILURE}`:
      return action.hasFailed;
    default:
      return state;
  }
}

export function roomInfoIsLoading(state = false, action) {
  switch (action.type) {
    case `${REQUEST_ROOM_INFO}_${FETCHING}`:
      return action.isLoading;
    default:
      return state;
  }
}

export function roomInfo(state = {}, action) {
  switch (action.type) {
    case `${REQUEST_ROOM_INFO}_${SUCCESS}`:
      return action.roomInfo;
    default:
      return state;
  }
}
