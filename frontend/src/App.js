import React, { Component } from 'react';
import 'aframe';
import './App.css';
import 'aframe-environment-component';

import Camera from './components/camera';
import Ball from './components/ball';
import Plane from './components/plane';
import Bullets from './components/bullets';
import Sky from './components/sky';
import Light from './components/moonlight';
import Zombie from './components/zombie';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a-scene physics-debugger="true" id="scene">
        <Sky />
        <Camera />
        <Bullets/>
        <Ball/>
        <Zombie pX={"1"} pY={"1"} pZ={"-3"} inc={.1}/>
        <Plane />
      </a-scene>
    );
  }
}

export default App;
