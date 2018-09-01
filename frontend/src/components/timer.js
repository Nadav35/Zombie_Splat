import React, { Component } from 'react';
import 'aframe';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
      seconds: this.props.seconds
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

export default Timer;