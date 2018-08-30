import React, { Component } from 'react';
import AFRAME from 'aframe';
import 'aframe-physics-system';
import {Entity} from 'aframe-react';
import 'aframe-extras';
import Bullets from './bullets';

class Weapon extends Component {

  render () {
    
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