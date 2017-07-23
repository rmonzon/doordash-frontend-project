import {FETCHING, SUCCESS, FAILURE} from '../constants';

return (action, payload) => {
  switch (action) {
    case FETCHING:
      return true;
    case SUCCESS:
      return payload;
    case FAILURE:
      return true;
    default:
      return false;
  }
};