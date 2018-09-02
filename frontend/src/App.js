import React, { Component } from 'react';
import 'aframe';
import './App.css';
import 'aframe-environment-component';

import Camera from './components/camera';
import Ball from './components/ball';
import Plane from './components/plane';
import Bullets from './components/bullets';
import Sky from './components/sky';
import Zombie from './components/zombie';
import ZombieIndex from './components/zombie_index';


class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    document.querySelector('#weapon').addEventListener('collide', function (evt) {
      console.log('helloAWEFAWJIFEAEFJWAEJ1');
    });
  }

  render() {
    return (
      <a-scene phsyics="debug: true;" id="scene">
        <a-assets>
            <a-mixin
            id="bullets"
            physics-collider
            geometry="primitive: sphere;  radius: .2;"
            color="green"
            static-body>
          </a-mixin>
        </a-assets>
        <a-entity environment="preset: arches; playArea:4;"></a-entity>
        <Sky />
        <Camera />
        <Bullets/>
        {/* <Ball/> */}
        <ZombieIndex />
        <Plane />
      </a-scene>
    );
  }
}

export default App;
