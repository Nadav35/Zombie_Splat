import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';

class Light extends Component {
  render() {
    return (
      <a-entity
        light="type: directional; color: #ffffff; intensity: 0.5;"
        position="31 80 -50"
      >
      </a-entity>
    );
  }
}

export default Light;