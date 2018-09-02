import React, { Component } from 'react';
import { connect } from 'react-redux';


class GameOver extends Component {
  render () {
    if (this.props.gameOver) {
      return (
        <a-text
          value="Game Over"
          width="10%"
          position="-1 0 -2"
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
  gameOver: state.gameState.gameOver
})

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);