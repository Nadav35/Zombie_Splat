import React, { Component } from 'react';
import 'aframe';
import { connect } from 'react-redux';
import { setGameOver, resetGame } from '../actions/game_state_actions';
import { nextLevel, resetLevel } from '../actions/level_actions';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
      seconds: this.props.seconds,
      currentLevel: this.props.currentLevel
    }
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let minDivisor = (secs % (60 * 60));
    let secDivisor = minDivisor % 60;

    let minutes = Math.floor(minDivisor / 60);
    let seconds = Math.ceil(secDivisor);

    let time = {
      "m": minutes,
      "s": seconds
    }
    return time;
  }
  componentDidMount () {
    let timeLeft = this.secondsToTime(this.state.seconds);
    this.setState({time: timeLeft});
    this.startTimer();
  }
  componentWillReceiveProps(newProps) {
    console.log("CURRENT LEVL", newProps.currentLevel);
    if(this.state.currentLevel !== newProps.currentLevel) {
      this.setState({seconds: newProps.seconds});
    }
  }
  
  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown () {
    let seconds = this.state.seconds - 1;
    
    this.setState({
      time: this.secondsToTime(seconds),
      seconds
    })

    if (seconds === 0) {
      clearInterval(this.timer);
      this.props.setGameOver();
    }
  }

  render() {
    if (this.state.time.s >= 10) {
      return (
        <a-text
          value={`0${this.state.time.m}:${this.state.time.s}`}
          position={this.props.position}
          width="2%"
          font="mozillavr"
        >
        </a-text>
      );
    } else {
      return (
        <a-text
          value={`0${this.state.time.m}:0${this.state.time.s}`}
          position={this.props.position}
          width="2%"
          font="mozillavr"
        >
        </a-text>
      );
    }

  }
}

const mapStateToProps = state => ({
  zombies: state.gameState.zombies
})

const mapDispatchToProps = dispatch => ({
  setGameOver: () => dispatch(setGameOver()),
  resetGame: () => dispatch(resetGame()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);