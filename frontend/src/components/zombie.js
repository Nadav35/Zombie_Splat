
import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-extras';
import zombie from '../models/zombie/zombie.gltf'
import { Entity } from 'aframe-react';

class Zombie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 2,
      position: `${props.pX} ${props.pY} ${props.pZ}`,
      hit: false
    }
    this.decremHealth = this.decremHealth.bind(this);
  }

  componentDidMount() {
    document.querySelector(`#zombie-hitbox${this.props.hitBoxId}`).addEventListener("collide", (e) => {
      if (e.detail.body.el.getAttribute('id') === "bullets") {
        this.setState({ health: this.state.health - 1 });
      }
      if (this.state.health <= 0) {
        setTimeout(function () {
          if (e.detail.target.el) {
            e.detail.target.el.parentNode.removeChild(e.detail.target.el);
          }
          if (e.detail.body.el) {
            e.detail.body.el.parentNode.removeChild(e.detail.body.el);
          }
        }, 0);
      }
    })

  }


  decremHealth() {
    this.setState({ health: this.state.health - 1 })
  }

  render() {
    
    return (
      <a-entity
        geometry="primitive: box; height: 1.6"
        material="side: double; transparent: true; opacity: 0; "
        id={`zombie-hitbox${this.props.hitBoxId}`}
        dynamic-body="mass: 100; shape: cylinder"
      
        linearDamping="50"
        position={this.state.position}>
        
        <Entity gltf-model={zombie}
          body="type: dynamic;"
          position="0 -1 0"
          id="zombie" animation-mixer></Entity>
      </a-entity>
    )
  }
}

export default Zombie;