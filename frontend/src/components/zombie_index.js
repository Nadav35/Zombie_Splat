import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-extras';
import { Entity } from 'aframe-react';
import Zombie from './zombie';

class ZombieIndex extends Component {
  render () {
    let positions = [{ pX: "8", pY: "1", pZ: "-6" }, { pX: "4", pY: "1", pZ: "-9" }, { pX: "3", pY: "1", pZ: "-2" },
    { pX: "-9", pY: "1", pZ: "-4" }, { pX: "5", pY: "1", pZ: "-4" }, { pX: "0", pY: "1", pZ: "-10" }];

    return (
      positions.map(position => {
        return (<Zombie pX={position.pX} pY={position.pY} pZ={position.pZ}/>)
      })
    )
  }
}

export default ZombieIndex;