
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
    this.state = {
      health: this.props.health,
      position: `${props.pX} ${props.pY} ${props.pZ}`,
      hit: false
    }
    this.removeZombie = this.removeZombie.bind(this);
  }

  componentDidMount() {

    document.querySelector(`#zombie-hitbox${this.props.hitBoxId}`).addEventListener("collide", (e) => {
         
      if (e.detail.body.el.getAttribute('id') === "bullets") {
          
        this.setState({ health: this.state.health - 1 });
      }
      if (this.state.health <= 0) {
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
      // console.log(this.props);
      if(this.state.health > 0) {
       
        this.props.setHealth(this.props.health - 1);
        this.setState({health: this.state.health - 1})
   
      }
    })
  }

  removeZombie() {
    this.props.removeZombie();
  }

  render() {
    let monsterPosition = `${this.props.pX} ${this.props.pY} ${this.props.pZ}`;
    let showMonster = this.props.hitBoxId > 3 ? true: false;
   
    // dynamic-body="mass: 999999; linearDamping: .9999;"
    return (
      <Entity
        geometry={`primitive: box; height: 1.6; depth: ${showMonster ? 2: ""}` }
        material="side: double; transparent: true; opacity: 0.1;"
        id={`zombie-hitbox${this.props.hitBoxId}`}
        className="hitbox"
        // animation = {showMonster ? "property: position; dur: 1000; loop: 0; to: 0 0.5 -2" : "" }
        linearDamping="50"
        dynamic-body="mass: 999999; linearDamping: .9999;"
        position={showMonster ? monsterPosition : this.state.position}>
        <Entity gltf-model={showMonster ? monster : zombie}
          rotation={showMonster ? "180 90 180" : ""}
          scale={showMonster ? "0.05 0.05 0.05" : ""}
          static-body
          position={showMonster ? '0 -1 -1.5' : '0 -1 0' }
          id="zombie" animation-mixer>
          </Entity>
      </Entity>
    )
  }
}

const mapStateToProps = state => ({
  zombies: state.gameState.zombie,
  health: state.gameState.player.health
})

const mapDispatchToProps = dispatch => ({
  removeZombie: () => dispatch(removeZombie()),
  setHealth: (health) => dispatch(setHealth(health))
});

export default connect(mapStateToProps, mapDispatchToProps)(Zombie);