import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-extras';
import zombie from '../models/zombie/zombie.gltf'

class Zombie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 10,
      position: `${props.pX} ${props.pY} ${props.pZ}`,
    }
    this.decremHealth = this.decremHealth.bind(this);
    this.move = this.move.bind(this);
  }

  componentDidMount () {
    this.move();
  }


  move () {
    let times = 20;
    for (let i = 0; i < times; i++) {
      this.setState({ position: `${this.props.pX} ${this.props.pY} ${parseInt(this.props.pZ) + this.props.inc}` })
      console.log(this.state.position)
    }
  }

  decremHealth () {
    this.setState({health: this.state.health - 1})
  }

  render() {
    return (
      <a-gltf-model
        className="zombie"
        physics-collider
        scale="0.5 0.5 0.5"
        src={zombie}
        position={this.state.position}
        id="zombie"
        animation-mixer
        dynamic-body
      >
      <a-animation attribute="position" from="1 1 -6" dur="4000" to="1 1 -1" repeat="0"/>
      </a-gltf-model>
    )
  }
}

export default Zombie;