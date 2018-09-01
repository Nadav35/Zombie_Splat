import React, { Component } from 'react';
import 'aframe-physics-system';
import 'aframe-extras';


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