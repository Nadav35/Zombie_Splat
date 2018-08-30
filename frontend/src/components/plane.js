import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';

class Plane extends Component {
  render() {
    return (
      <a-plane
        id="plane"
        rotation="-90 0 0"
        width="150"
        height="150"
        opacity="0"
        static-body
      >
      </a-plane>
    );
  }
}

export default Plane;