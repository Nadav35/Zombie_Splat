import React, { Component } from 'react';
import AFRAME from 'aframe';
import 'aframe-physics-system';
import {Entity} from 'aframe-react';
import 'aframe-extras';
import Bullets from './bullets';

class Weapon extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Entity
        position="0 0 -3"
        id="weapon">
        <a-mixin
          id="bullets"
          class="bullet"
          geometry="primitive: sphere; radius: .1;"
          static-body
        >
        </a-mixin>
        <Entity
          dynamic-body
          geometry={{ primitive: 'box' }}
          material={{ color: 'red' }}
          position={{ x: 1, y: 1, z: -5 }}
          events={{collide: (e) => {console.log(e)}
          }}
        />
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
      </Entity>
    )
  }
}

export default Weapon;