import React, { Component } from 'react';
import AFRAME from 'aframe';
import 'aframe-physics-system';
import 'aframe-extras';
import Bullets from './bullets';
class Weapon extends Component {

  render () {
    return (
      <a-entity
        position="0 0 -3"
        id="weapon">
        <a-mixin
          id="bullets" geometry="primitive: sphere;"
          scale=".2 .2 .2" color="green"
          static-body
        >
        </a-mixin>

        <a-box 
          id="cube"
          color='blue' 
          opacity='0'
          width='0'
          height='0' 
          depth='0'
          static-body
        ></a-box>
        <Bullets />
      </a-entity>
    )
  }
}

export default Weapon;