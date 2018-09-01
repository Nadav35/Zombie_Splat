import React, { Component } from 'react';
import 'aframe';
import Weapon from './weapon';
import GameState from './game_state';
import 'aframe-physics-system';
import Controller from './controller';
class Camera extends Component {
  render() {
    return (
      <a-entity id="camera" camera look-controls  position="0 1.5 0">
        <a-cursor 
        id="cursor"
        ></a-cursor>
        <GameState />
        <Weapon />
      </a-entity>
    );
  }
}

export default Camera