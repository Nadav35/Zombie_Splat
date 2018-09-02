import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';

class Bullets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fire: false
    }
    this.keydownHandler = this.keydownHandler.bind(this);
  }
  keydownHandler(evt) {

    if (evt.keyCode === 32) {
      if (!this.state.fire) {
        this.setState({fire: true})

        setTimeout(() => {
          let camera = document.querySelector("#camera");
          let cursor = document.querySelector("#cursor");
          let position = cursor.object3D.getWorldPosition();
          let rotation = camera.getAttribute('rotation');
          let newBullets = document.createElement('a-entity')
          newBullets.setAttribute('mixin', 'bullets');
          newBullets.setAttribute('id', 'bullets');
          let parent = document.querySelector("#scene");
          parent.appendChild(newBullets);
          let animation = document.createElement('a-animation');
          let radian = -(rotation.y * (Math.PI / 180));
          let new_z = (20 * Math.cos(radian));
          let new_x = (20 * Math.sin(radian));

          animation.setAttribute('attribute', 'position');

          animation.setAttribute('from', `${position.x} ${position.y} ${position.z}`);
          animation.setAttribute('to', `${new_x} ${rotation.x} ${-new_z}`)
          if (rotation.x < -1) {
            animation.setAttribute('to', `${new_x} ${rotation.x + 2} ${-new_z}`)
          } else if (rotation.x > 4 && rotation.x < 9) {
            animation.setAttribute('to', `${new_x} ${rotation.x - .9} ${-new_z}`)
          } else if (rotation.x > 11 && rotation.x < 20) {
            animation.setAttribute('to', `${new_x} ${rotation.x - 10} ${-new_z}`)
          } else if (rotation.x > 20) {
            animation.setAttribute('to', `${new_x} ${rotation.x - 10} ${-new_z}`)
          }
          newBullets.setAttribute('data', `${-new_z}`)
          animation.setAttribute('dur', '750');
          animation.setAttribute('repeat', '0');
          newBullets.appendChild(animation);
          let bulletZ = newBullets.getAttribute("data");
          if (bulletZ == -new_z) {
            setTimeout(() => {
              if (newBullets.parentEl) {
                newBullets.parentEl.removeChild(newBullets)
              }
            }, 700);

          }
        }, 500);
      }
    }
  
  }
  componentDidMount() {
    let that = this;
    const body = document.querySelector('body');
    body.addEventListener('keydown', this.keydownHandler);
    body.addEventListener('keyup', function (evt) {
      if (evt.keyCode === 32) {
        that.setState({fire: !that.state.fire});
      }
    });
    
  }
  componentWillReceiveProps(newProps) {
    const body = document.querySelector('body');
    if (newProps.gameOver) {
      body.removeEventListener('keydown', this.keydownHandler);
    }
  }

  render() {
    return (
    <a-entity>
    </a-entity>
    )
  }
};

const mapStateToProps = state => ({
  zombies: state.gameState.zombie,
  health: state.gameState.player.health,
  gameOver: state.gameState.gameOver
})

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Bullets);