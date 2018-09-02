
import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';
import 'aframe-extras';
import 'aframe-animation-component';
import zombie from '../models/zombie/zombie.gltf';
import monster from '../models/monster/monster.gltf';
import GameState from './game_state';
import { connect } from 'react-redux';
import { Entity } from 'aframe-react';
import { removeZombie } from '../actions/zombie_actions';
import { setHealth } from '../actions/player_actions';

class Zombie extends Component {
  constructor(props) {
    super(props);
    console.log("HEALTHTHHWERWE",this.props.health);
    this.state = {
      health: this.props.health,
      zombieHealth: 2,
      position: `${props.pX} ${props.pY} ${props.pZ}`,
      hit: false
    }
    this.removeZombie = this.removeZombie.bind(this);
  }

  componentDidMount() {
    document.querySelector(`#zombie-hitbox${this.props.hitBoxId}`).addEventListener("collide", (e) => {
      if (e.detail.body.el.getAttribute('id') === "bullets") {

        this.setState({ zombieHealth: this.state.zombieHealth - 1 });
      }
      if (this.state.zombieHealth <= 0) {
        this.removeZombie();
        setTimeout(() => {
          if (e.detail.target.el) {
            e.detail.target.el.parentNode.removeChild(e.detail.target.el);
          }
          if (e.detail.body.el) {
            e.detail.body.el.parentNode.removeChild(e.detail.body.el);
          }
        }, 0);
      }
    })

    document.querySelector(`#zombie-hitbox${this.props.hitBoxId}`).addEventListener("animationcomplete", (e) => {
      this.setState({position: e.target.body.position});
      let intervalId = 0;
      if(this.state.health > 0) {
        e.target.body.mass = 9999;
        
        setTimeout(() => {
          this.setState({health: this.props.health - 1});
          this.props.setHealth(this.state.health);
        }, 0);
        intervalId = setInterval(() => {
          if (this.state.health > 0) {
            
            this.setState({health: this.props.health - 1});
            this.props.setHealth(this.state.health);
          }
        }, 5000);
      }
      if(this.state.health <= 0) {
        clearInterval(intervalId);
      }
    })
  }

  removeZombie() {
    this.props.removeZombie();
  }

  render() {
    let showMonster = this.props.hitBoxId > 3 ? true: false;
    let dur = 5000;
    if(Math.abs(this.props.pZ) > 10) {
      let offset = Math.abs(this.props.pZ) - 10;
      dur += (offset * 1000);
    }
    return (
      <Entity
        geometry={`primitive: box; height: 1.6; depth: ${showMonster ? 2: ""}` }
        material="side: double; transparent: true; opacity: 0.1;"
        id={`zombie-hitbox${this.props.hitBoxId}`}
        className="hitbox"
        linearDamping="50"
        body="type: dynamic; mass: 0;"
        animation = {showMonster ? `property: position;  dur: ${dur}; loop: 0; to: 0 0.5 -2` : "" }
        position={this.state.position}>
        <Entity gltf-model={showMonster ? monster : zombie}
          rotation={showMonster ? "180 90 180" : ""}
          scale={showMonster ? "0.05 0.05 0.05" : ""}
          position={showMonster ? '0 -1 -1.5' : '0 -1 0' }
          id="zombie" animation-mixer>
          </Entity>

      </Entity>
    )
  }
}

const mapStateToProps = state => ({
  zombies: state.gameState.zombie,
  health: state.gameState.player.health,
  gameOver: state.gameState.gameOver
})

const mapDispatchToProps = dispatch => ({
  removeZombie: () => dispatch(removeZombie()),
  setHealth: (health) => dispatch(setHealth(health))
});

export default connect(mapStateToProps, mapDispatchToProps)(Zombie);