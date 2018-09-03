import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-extras';
import { connect } from 'react-redux';
import { Entity } from 'aframe-react';
import Zombie from './zombie';
import { removeZombie, resetZombies, setZombieCount } from '../actions/zombie_actions';


class ZombieIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zomsEmpty: true
    }
    
    this.positions = [{ pX: "5", pY: "1", pZ: "-6" }, { pX: "4", pY: "1", pZ: "-9" }, { pX: "3", pY: "1", pZ: "-2" },
                     { pX: "-9", pY: "1", pZ: "-4" }, { pX: "-5", pY: "1", pZ: "-12" }, { pX: "-10", pY: "1", pZ: "-16" },
                     { pX: "0", pY: "1", pZ: "-10" }];
    this.positions2 = [{ pX: "-5", pY: "1", pZ: "-6" }, { pX: "4", pY: "1", pZ: "-9" }, { pX: "3", pY: "1", pZ: "-2" }, { pX: "1", pY: "1", pZ: "-10" },
                     { pX: "7", pY: "1", pZ: "-15" }, { pX: "10", pY: "1", pZ: "-14" }, { pX: "4", pY: "1", pZ: "-11" }, { pX: "-5", pY: "1", pZ: "-17" },
                     { pX: "-8", pY: "1", pZ: "-16" }, { pX: "5  ", pY: "1", pZ: "-14" }];
    this.map = [[],this.positions, this.positions2];
    this.resetZoms = this.resetZoms.bind(this);
  }

  componentDidMount() {
    this.props.setZombieCount(this.map[this.props.currentLevel].length);
  }
  // componentWillReceiveProps(newProps) {
  //   this.props.setZombieCount(this.map[this.props.currentLevel].length);
  // }
  
  // componentWillUpdate () {
  //   setTimeout(() => {

  //     this.props.setZombieCount(this.map[this.props.currentLevel].length);
  //   }, 1000);

  // }

  resetZoms () {
    if (this.numZoms === 0) {
      this.positions = [{ pX: "8", pY: "1", pZ: "-6" }, { pX: "4", pY: "1", pZ: "-9" }, { pX: "3", pY: "1", pZ: "-2" },
      { pX: "-9", pY: "1", pZ: "-4" }, { pX: "-5", pY: "1", pZ: "-6" }, { pX: "-7", pY: "1", pZ: "-6" },
      { pX: "0", pY: "1", pZ: "-10" }, { pX: "7", pY: "1", pZ: "-5" }, { pX: "5", pY: "1", pZ: "-8" }];
    }
  }
  
  render () {
    const level = this.map[this.props.currentLevel];

    return (
      level.map((position, idx) => {
        console.log("WAEFIWEAFAWEPF  ", position);
        return (<Zombie key={idx} hitBoxId={idx} pX={position.pX} pY={position.pY} pZ={position.pZ}/>)
      })
    )
  }
}

const mapStateToProps = state => ({
  zombies: state.gameState.zombies,
  currentLevel: state.gameState.currentLevel
})

const mapDispatchToProps = dispatch => ({
  removeZombie: () => dispatch(removeZombie()),
  resetZombies: () => dispatch(resetZombies()),
  setZombieCount: (count) => dispatch(setZombieCount(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(ZombieIndex);