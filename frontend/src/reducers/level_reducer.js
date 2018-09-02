import merge from 'lodash/merge';

import {
  NEXT_LEVEL,
  RESET_LEVEL
} from '../actions/level_actions';

export default (state = 1, action) => {
  Object.freeze(state);

  switch (action.type) {
    case NEXT_LEVEL:
      return state + 1;
    case RESET_LEVEL:
      return 1;
    default:
      return state;
  }
};