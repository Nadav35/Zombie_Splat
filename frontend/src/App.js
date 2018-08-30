import React, { Component } from 'react';
import 'aframe';
import './App.css';
import 'aframe-environment-component';
import {Entity, Scene} from 'aframe-react';

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
      <a-scene physics="debug: true" id="scene">
        <a-entity environment="preset: arches; ground: spikes;"></a-entity>
        {/* <Sky /> */}
        <Camera />
        <Entity
          dynamic-body
          geometry={{ primitive: 'box' }} 
          material={{ color: 'red' }} 
          position={{ x: 1, y: 1, z: -5}}
          events={{collide: (e) => console.log(e)}}
        />
        <Bullets/>
        <Ball/>
        <Zombie pX={"1"} pY={"1"} pZ={"-3"} inc={.1}/>
        <Plane />
      </a-scene>
    );
  }
}

export default App;
