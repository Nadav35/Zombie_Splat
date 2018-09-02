import { combineReducers } from "redux";
import  sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import gameState from './game_state_reducer';

const rootReducer = combineReducers ({
  session: sessionReducer,
  errors: sessionErrorsReducer,
  gameState
});

export default rootReducer;