import { combineReducers } from 'redux';
import zombies from './zombies_reducer';
import player from './player_reducer';
export default combineReducers({
  zombies,
  player
});