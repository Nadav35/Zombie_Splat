import { combineReducers } from "redux";
import  sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers ({
  session: sessionReducer,
  errors: sessionErrorsReducer,
  entities: entitiesReducer
});

export default rootReducer;