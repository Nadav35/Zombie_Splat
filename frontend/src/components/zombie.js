import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-extras';
import zombie from '../models/zombie/zombie.gltf'
import {Entity} from 'aframe-react';
class Zombie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hit: false,
      health: 10,

      position: `${props.pX} ${props.pY} ${props.pZ}`,
      hit: false
    }
    this.decremHealth = this.decremHealth.bind(this);
    this.move = this.move.bind(this);
 
  }

  
  componentDidMount () {
    document.querySelector("#zombie-hitbox").addEventListener("collide", (e) => {
      console.log(e.detail.body.el.getAttribute('id'));
      if(e.detail.body.el.getAttribute('id') === "bullets") {
        this.setState({health: this.state.health - 1});
      }
      if(this.state.health <= 0) {
        setTimeout(function () {
          if(e.detail.target.el) {
            e.detail.target.el.parentNode.removeChild(e.detail.target.el);
          }
          if(e.detail.body.el) {
            e.detail.body.el.parentNode.removeChild(e.detail.body.el);
          }
        }, 0);
      }
    })
    
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

  collide (e) {
   
    if (e.detail.body.id === this.body.id && !this.state.hit) {
        this.setState({hit: true});
        this.decremHealth();
      }
  }

  render() {

    return (

      <a-entity
          geometry="primitive: box;"
          material= "side: double; transparent: true; opacity: 0; "
          id="zombie-hitbox"

          dynamic-body="mass: 50"
          // scale="0.5 0.5 0.5"
          position={this.state.position}
          >
        <Entity gltf-model={zombie} 
        body="type: dynamic; mass: 5;"
        id="zombie" animation-mixer></Entity>
      </a-entity>

    )
  }
}

export default Zombie;