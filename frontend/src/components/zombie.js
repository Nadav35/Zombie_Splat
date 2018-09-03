
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
import { addHundred, addFifty, resetScore } from '../actions/score_actions';

class Zombie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      health: this.props.health,
      zombieHealth: 2,
      position: `${this.props.pX} ${this.props.pY} ${this.props.pZ}`,
      hit: false,
      intervalId: 0
    }
    this.removeZombie = this.removeZombie.bind(this);
  }

  componentDidMount() {
    clearInterval(this.state.intervalId);
    const hitbox = document.querySelector(`#zombie-hitbox${this.props.hitBoxId}`);
    const scene = document.querySelector('#scene');
    if(hitbox) {

      hitbox.addEventListener("collide", (e) => {
        if (e.detail.body.el.getAttribute('id') === "bullets") {
          this.setState({ zombieHealth: this.state.zombieHealth - 1 });
        }
        if (this.state.zombieHealth <= 0) {
          
          setTimeout(() => {
            clearInterval(this.state.intervalId)
            if (parseInt(e.target.id.slice(-1)) > 3) {
              this.props.addHundred();
            } else {
              this.props.addFifty(); 
            }
            if (e.detail.target.el) {
              
              if(scene.contains(e.detail.target.el)) {
                this.removeZombie();

                e.detail.target.el.parentNode.removeChild(e.detail.target.el);
              }
            }
            if (e.detail.body.el) {
              if(scene.contains(e.detail.body.el)) {
                e.detail.body.el.parentNode.removeChild(e.detail.body.el);
              }
            }
          }, 0);
        }
      })

      hitbox.addEventListener("animationcomplete", (e) => {
        this.setState({position: e.target.body.position});
        let intervalId = 0;
        if(this.state.health > 0) {
          e.target.body.mass = 9999;
          
          setTimeout(() => {
            this.props.setHealth(this.props.health - 1);
          }, 0);
          intervalId = setInterval(() => {
            if (this.state.health > 0) {
              this.props.setHealth(this.props.health - 1);
            }
          }, 5000);
        }
        this.setState({ intervalId })
      })
    }

  }
  componentWillReceiveProps(newProps) {

    if (this.state.health <= 0) {
      clearInterval(this.state.intervalId);
    }
  }
  componentWillUnmount () {
    clearInterval(this.state.intervalId);
  }

  removeZombie() {
    this.props.removeZombie();
  }

  render() {
  
    let showMonster = this.props.idx > 3 ? true: false;
    let dur = 5000;
    if(Math.abs(this.props.pZ) > 10) {
      let offset = Math.abs(this.props.pZ) - 10;
      dur += (offset * 1000);
    }
    return (
      <Entity
        geometry={`primitive: box; height: 1.6; depth: ${showMonster ? 2: ""}` }
        material="side: double; transparent: true; opacity: 0;"
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
  setHealth: (health) => dispatch(setHealth(health)),
  addHundred: () => dispatch(addHundred()),
  addFifty: () => dispatch(addFifty())
});

export default connect(mapStateToProps, mapDispatchToProps)(Zombie);