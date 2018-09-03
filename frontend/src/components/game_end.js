import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions/game_state_actions';
import { setHealth } from '../actions/player_actions';
import { updateHighScore } from '../util/session_api_util';

class GameEnd extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    let highScore;
    highScore = this.props.user.highScore < this.props.score ? this.props.score : this.props.user.highScore
  
    // if (this.props.gameOver === true) {
    //   this.props.updateHighScore({
    //     id: this.props.user.id,
    //     highScore
    //   });
    // }
  }
  
  componentDidMount() {
    this.props.resetGame();
    this.props.setHealth(10);
  }

  render () {
    if ((this.props.gameOver || this.props.userHealth <= 0) && this.props.zombieCount > 0) {
      return (
        <a-text
          value="Game Over"
          width="10%"
          position="-1 0 -2"
          font="mozillavr"
        >
        </a-text>
      )
    } else if (this.props.gameOver || this.props.zombieCount === 0) {
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
  user: state.session,
  score: state.gameState.score
})

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(resetGame()),
  setHealth: (health) => dispatch(setHealth(health)),
  updateHighScore: (highScore) => dispatch(updateHighScore(highScore))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameEnd);