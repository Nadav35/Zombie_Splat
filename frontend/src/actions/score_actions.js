import axios from 'axios';
export const ADD_FIFTY = "ADD_FIFTY";
export const ADD_HUNDRED = "ADD_HUNDRED";
export const RESET_SCORE = "RESET_SCORE";
export const RECEIVE_HIGH_SCORE = "RECEIVE_HIGH_SCORE";

export const addFifty = (score) => ({
  type: ADD_FIFTY,
});

export const addHundred = (score) => ({
  type: ADD_HUNDRED,
})

export const resetScore = () => ({
  type: RESET_SCORE
});

const receiveHighScore = (highScore) => ({
  type: RECEIVE_HIGH_SCORE,
  highScore
})

// export const receiveHighScore = (highScore) => dispatch => {
//   User.findOne({
//     id: 
//   })
// }
