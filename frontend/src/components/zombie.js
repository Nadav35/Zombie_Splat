import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-extras';
import zombie from '../models/zombie/zombie.gltf'

class Zombie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hit: false,
      health: 10,
      position: `${props.pX} ${props.pY} ${props.pZ}`
    }
    this.decremHealth = this.decremHealth.bind(this);
    this.collide = this.collide.bind(this);
  }

  decremHealth () {
    this.setState({health: this.state.health - 1})
  }

  collide (e) {
    debugger;
    if (e.detail.body.id === this.body.id && !this.state.hit) {
        this.setState({hit: true});
        this.decremHealth();
      }
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
        // dynamic-body
      >
      <a-animation attribute="position" from="1 1 -6" dur="4000" to="1 1 -2.5" repeat="0"/>
      </a-gltf-model>
    )
  }
}

export default Zombie;