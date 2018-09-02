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
    this.positions = [{ pX: "8", pY: "1", pZ: "-6" }, { pX: "4", pY: "1", pZ: "-9" }, { pX: "3", pY: "1", pZ: "-2" },
                     { pX: "-9", pY: "1", pZ: "-4" }, { pX: "-5", pY: "1", pZ: "-6" }, { pX: "-7", pY: "1", pZ: "-6" },
                     { pX: "0", pY: "1", pZ: "-10" }, { pX: "7", pY: "1", pZ: "-5" }, { pX: "5", pY: "1", pZ: "-8" }];
    this.resetZoms = this.resetZoms.bind(this);
  }

  componentDidMount() {
    this.props.setZombieCount(this.positions.length);
  }

  componentWillUpdate () {
    if (this.props.zombies === 0) {
      this.resetZoms();
    }
  }

  resetZoms () {
    if (this.numZoms === 0) {
      this.positions = [{ pX: "8", pY: "1", pZ: "-6" }, { pX: "4", pY: "1", pZ: "-9" }, { pX: "3", pY: "1", pZ: "-2" },
      { pX: "-9", pY: "1", pZ: "-4" }, { pX: "-5", pY: "1", pZ: "-6" }, { pX: "-7", pY: "1", pZ: "-6" },
      { pX: "0", pY: "1", pZ: "-10" }, { pX: "7", pY: "1", pZ: "-5" }, { pX: "5", pY: "1", pZ: "-8" }];
    }
  }
  
  render () {
    return (
      this.positions.map((position, idx) => {
        return (<Zombie key={idx} hitBoxId={idx} pX={position.pX} pY={position.pY} pZ={position.pZ}/>)
      })
    )
  }
}

const mapStateToProps = state => ({
  zombies: state.gameState.zombies
})

const mapDispatchToProps = dispatch => ({
  removeZombie: () => dispatch(removeZombie()),
  resetZombies: () => dispatch(resetZombies()),
  setZombieCount: (count) => dispatch(setZombieCount(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(ZombieIndex);