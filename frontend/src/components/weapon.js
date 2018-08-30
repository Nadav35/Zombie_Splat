import React, { Component } from 'react';
import AFRAME from 'aframe';
import 'aframe-physics-system';
import 'aframe-extras';
import Bullets from './bullets';
class Weapon extends Component {
  componentDidMount() {
    document.querySelector('#bullets').addEventListener('collide', function (evt) {
    });
  }
  render () {
    
            // <a-box 
            //   id="cube"
            //   color='blue' 
            //   opacity='0'
            //   width='0'
            //   height='0' 
            //   depth='0'
              
            // ></a-box>
            // <Bullets />
    return (
      <a-entity
        id="weapon"
        position="0 0 -3"
        >
      
   
      </a-entity>
    )
  }
}

export default Weapon;