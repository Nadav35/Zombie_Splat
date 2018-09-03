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
      playerHealth: this.props.health,
      gameOver: false,
      seconds: 15,
      currentLevel: 1
    }
  }
  
  decremHealth () {
    if (this.props.gameOver === false) {
      this.setState({ playerHealth: this.state.playerHealth - 1 })
      if (this.state.playerHealth === 0) {
        this.setState({ gameOver: true })
      }
    }
  }
  componentDidMount() {
    this.setState({currentLevel: this.props.currentLevel})
  }
  componentWillReceiveProps(newProps) {
    if(this.state.currentLevel !== newProps.currentLevel) {
      this.setState({seconds: 15});
    }
  } 
  render() {
    const health = this.props.health < 0 ? 0 : this.props.health;
    return (
      <a-entity>
        <Timer position={"-.15 -.7 -1"} seconds={this.state.seconds} currentLevel={this.props.currentLevel}/>
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
  health: state.gameState.player.health,
  gameOver: state.gameState.gameOver,
  currentLevel: state.gameState.currentLevel
})

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, null)(GameState);
