import {REQUEST_ROOM_MESSAGES} from '../constants';
import {FETCHING, SUCCESS, FAILURE} from '../../core/constants';

export function roomMsgHasFailed(state = false, action) {
  switch (action.type) {
    case `${REQUEST_ROOM_MESSAGES}_${FAILURE}`:
      return action.hasFailed;
    default:
      return state;
  }
}

export function roomMsgIsLoading(state = false, action) {
  switch (action.type) {
    case `${REQUEST_ROOM_MESSAGES}_${FETCHING}`:
      return action.isLoading;
    default:
      return state;
  }
}

export function roomMessages(state = [], action) {
  switch (action.type) {
    case `${REQUEST_ROOM_MESSAGES}_${SUCCESS}`:
      return action.roomMessages;
    default:
      return state;
  }
}
