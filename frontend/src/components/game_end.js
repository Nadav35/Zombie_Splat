import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame,  setGameOver } from '../actions/game_state_actions';
import { setHealth } from '../actions/player_actions';
import { nextLevel } from '../actions/level_actions';

class GameEnd extends Component {
  constructor(props) {
    super(props);
  }

 
  
  componentDidMount() {
    this.props.resetGame();
    this.props.setHealth(10);
  }

  render () {
    if ((this.props.gameOver || this.props.userHealth <= 0) && (this.props.zombieCount > 0 || this.props.zombieCount === null)) {
      return (
        <a-text
          value="Game Over"
          width="10%"
          position="-1 0 -2"
          font="mozillavr"
        >
        </a-text>
      )
    } else if (this.props.zombieCount === 0) {
      if(this.props.currentLevel === 1) {

        setTimeout(() => {
          this.props.nextLevel();
          this.props.resetGame();
        }, 1000);
        return (
          <a-text
            value="Good Job, on to the next!"
            width="7%"
            position="-1.75 0 -2"
            font="mozillavr"
          >
          </a-text>
        )
      } else {
        setTimeout(() => {
          this.props.setGameOver();
        }, 1000); 
        return (
          <a-text
            value = "Congratulation! You Won! Press R to restart game!"
            width="6%"
            position="-2.5 0 -2"
            font="mozillavr"
          >
          </a-text>
        );
      }
    } else {
      return (
        <a-entity>

        </a-entity>
      )
    }
  }
}

const mapStateToProps = state => ({
  gameOver: state.gameState.gameOver,
  zombieCount: state.gameState.zombies,
  userHealth: state.gameState.player.health,
  currentLevel: state.gameState.currentLevel
})

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(resetGame()),
  setHealth: (health) => dispatch(setHealth(health)),
  nextLevel: () => dispatch(nextLevel()),
  setGameOver: () => dispatch(setGameOver())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameEnd);