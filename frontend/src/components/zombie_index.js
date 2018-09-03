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
      zomsEmpty: true,
      currentLevel: this.props.currentLevel
    }
    
    this.positions = [{ pX: "5", pY: "1", pZ: "-6" }, { pX: "4", pY: "1", pZ: "-9" }, { pX: "3", pY: "1", pZ: "-2" },
                     { pX: "-9", pY: "1", pZ: "-4" }, { pX: "-5", pY: "1", pZ: "-12" }, { pX: "-10", pY: "1", pZ: "-16" }];
    this.positions2 = [{ pX: "-5", pY: "1", pZ: "-6" }, { pX: "4", pY: "1", pZ: "-9" }, { pX: "3", pY: "1", pZ: "-2" }, { pX: "1", pY: "1", pZ: "-10" },
                     { pX: "7", pY: "1", pZ: "-15" }, { pX: "10", pY: "1", pZ: "-14" }, { pX: "4", pY: "1", pZ: "-11" }, { pX: "-5", pY: "1", pZ: "-17" },
                     { pX: "-8", pY: "1", pZ: "-16" }, { pX: "5  ", pY: "1", pZ: "-14" }];
    this.positions3 = [{ pX: "-10", pY: "1", pZ: "-8" }, { pX: "-7", pY: "1", pZ: "-9" }, { pX: "-5", pY: "1", pZ: "-10" }];
    this.map = [[],this.positions, this.positions2.concat(this.positions).concat(this.positions3)];
  }

  componentDidMount() {
    this.props.setZombieCount(this.map[this.props.currentLevel].length);
  }
  componentWillReceiveProps(newProps) {
    if(newProps.currentLevel !== this.state.currentLevel) {
      
      this.props.setZombieCount(this.map[newProps.currentLevel].length - 6);
      
      this.setState({currentLevel: newProps.currentLevel})
    }
  }
  

  
  render () {
    const level = this.map[this.props.currentLevel];

    return (
      level.map((position, idx) => {
        return (<Zombie key={idx} idx={idx} hitBoxId={`${idx}${this.props.currentLevel}`} level={this.props.currentLevel} pX={position.pX} pY={position.pY} pZ={position.pZ}/>)
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