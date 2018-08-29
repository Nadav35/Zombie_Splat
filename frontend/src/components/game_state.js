import React, { Component } from 'react';
import 'aframe';

class GameState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: "5%",
      score: 0,
      playerHealth: 10
    }
  }

  render() {
    return (
      <a-entity>
        <a-text 
          value={`Score: ${this.state.score}`}
          position="-1 -.7 -1"
          width="2%"
          font="mozillavr"
        >
        </a-text>
        <a-text 
          value={`Health: ${this.state.playerHealth}`}
          position=".5 -.7 -1"
          width="2%"
          font="mozillavr"
        >
        </a-text>
      </a-entity>
    );
  }
}

export default GameState;