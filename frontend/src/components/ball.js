import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';

class Ball extends Component {
  constructor (props) {
    super(props);

    this.state = {
      position: "0 1 -4",
      health: "10",
      resetId: 0,
      hit: false
    }
    this.decreaseHealth = this.decreaseHealth.bind(this);
    this.resetBall = this.resetBall.bind(this);
  }

  decreaseHealth() {
    this.setState({health: this.state.health - 1})
  }

  resetBall () {
    clearTimeout(this.state.resetId)
    this.props.$("#ball").body.position.set(0, 0.6, -4);
    this.props.$("#ball").body.velocity.set(0, 5, 0);
    this.props.$("#ball").body.angularVelocity.set(0, 0, 0);
    this.setState({hit: false});
    setTimeout(this.resetBall, 6000)
  }

  render() {
    return (
      <a-entity
       id="ball"
       position={this.state.position}
       material="color:green;"
       geometry="primitive:sphere; radius:0.5;"
       dynamic-body
      >
      </a-entity>
    );
  }
}

export default Ball;