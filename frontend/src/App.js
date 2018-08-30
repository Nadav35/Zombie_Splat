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
    super(props);
  }
  componentDidMount() {
    document.querySelector('#weapon').addEventListener('collide', function (evt) {
      console.log('helloAWEFAWJIFEAEFJWAEJ1');
    });
  }
  render() {
    return (

      <a-scene physics="debug:true;" id="scene">
        <a-assets>
            <a-mixin
            id="bullets"
            physics-collider
            geometry="primitive: sphere;  radius: .2;"
            color="green"
            static-body>
          </a-mixin>
        </a-assets>
        <a-entity environment="preset: arches;"></a-entity>
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
