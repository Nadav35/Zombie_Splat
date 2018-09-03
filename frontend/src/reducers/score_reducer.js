import merge from 'lodash/merge';

import {
  ADD_FIFTY,
  ADD_HUNDRED,
  RESET_SCORE
} from '../actions/score_actions';

export default (state = 0, action) => {
  Object.freeze(state);
  let newState = 0;

  switch (action.type) {
    case ADD_FIFTY:
      return state + 50
    case ADD_HUNDRED:
      return state + 100
    case RESET_SCORE:
      return 0;
    default:
      return state;
  }
};