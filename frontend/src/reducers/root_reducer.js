import { combineReducers } from "redux";
import  sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer';

const rootReducer = combineReducers ({
  session: sessionReducer,
  errors: sessionErrorsReducer
});

export default rootReducer;