import merge from 'lodash/merge';

import {
  SET_GAME_OVER,
  SET_GAME_ON,
  RESET_GAME
} from '../actions/game_state_actions';

export default (state = false, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case SET_GAME_ON:
      return false;
    case SET_GAME_OVER:
      return true;
    case RESET_GAME:
      return false;
    default:
      return state;
  }
};