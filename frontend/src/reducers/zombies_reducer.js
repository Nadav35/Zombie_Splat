import merge from 'lodash/merge';

import {
  REMOVE_ZOMBIE,
  RESET_ZOMBIES,
  SET_ZOMBIE_COUNT
} from '../actions/zombie_actions';
import {
  NEXT_LEVEL
} from '../actions/level_actions';

export default (state = null, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case SET_ZOMBIE_COUNT:
      return action.count;
    case NEXT_LEVEL:
      return null;
    case REMOVE_ZOMBIE:
      if (state === 0) {
        return 0;
      } else {
        return state - 1;
      }
    case RESET_ZOMBIES:
      return null;
    default:
      return state;
  }
};