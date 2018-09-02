import { combineReducers } from 'redux';
import zombies from './zombies_reducer';
import player from './player_reducer';
import gameOver from './game_over_reducer';
import currentLevel from './level_reducer';
export default combineReducers({
  gameOver,
  currentLevel,
  zombies,
  player
});