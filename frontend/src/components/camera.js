import React, { Component } from 'react';
import 'aframe';
import Weapon from './weapon';
import GameState from './game_state';
import 'aframe-physics-system';
import Controller from './controller';
class Camera extends Component {
  render() {
    return (
<<<<<<< HEAD
      <a-entity id="camera" camera look-controls position="0 1.5 0">
=======
      <a-entity id="camera" camera look-controls  position="0 1.5 0">
>>>>>>> 580a5bc71c9a3c27a7034f3c1b1a9c7cef4dd517
        <a-cursor 
        id="cursor"
        ></a-cursor>
        <a-entity id="raycaster" raycaster="far: 1" position="1 1 -2" showLine="true"></a-entity>
        <GameState />
        <Weapon />
      </a-entity>
    );
  }
}

export default Camera