import React, { Component } from 'react';
import 'aframe';
import Timer from './timer';
import { connect } from 'react-redux';

class GameState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: "5%",
      score: 0,
      playerHealth: 10,
      gameOver: false
    }
  }
  
  decremHealth () {
    this.setState({playerHealth: this.state.playerHealth - 1})
    if (this.state.playerHealth === 0) {
      this.setState({gameOver: true})
    }
  }

  render() {
    const health = this.props.health < 0 ? 0 :this.props.health;
    return (
      <a-entity>
        <Timer position={"-.15 -.7 -1"} seconds={45}/>
        <a-text 
          value={`Score: ${this.state.score}`}
          position="-1 -.7 -1"
          width="2%"
          font="mozillavr"
        >
        </a-text>
        <a-text 
          value={`Health: ${health}`}
          position=".5 -.7 -1"
          width="2%"
          font="mozillavr"
        >
        </a-text>
      </a-entity>
    );
  }
}
const mapStateToProps = state => ({
  health: state.gameState.player.health
})

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, null)(GameState);
