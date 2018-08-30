import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';
import {Entity} from 'aframe-react';
class Bullets extends Component {
    componentDidMount() {
     
        document.querySelector('body').addEventListener('keydown', function (evt) {
            if (evt.keyCode === 32) {
                setTimeout(() => {
                    let camera = document.querySelector("#camera");
                    let cursor = document.querySelector("#cursor");
                    let position = cursor.object3D.getWorldPosition();
                    let rotation = camera.getAttribute('rotation');
                    let newBullets = document.createElement('a-entity');
                    newBullets.setAttribute('mixin', 'bullets');
                    newBullets.setAttribute('radius', '0.2');
                    newBullets.setAttribute('id','bullets');
                    let parent = document.querySelector("#scene");
                    parent.appendChild(newBullets);
                    let animation = document.createElement('a-animation');
                    let radian = -(rotation.y * (Math.PI / 180));
                    let new_z = (20 * Math.cos(radian));
                    let new_x = (20 * Math.sin(radian));
                    animation.setAttribute('attribute', 'position');
                    animation.setAttribute('from', `${position.x} ${position.y} ${position.z}`);
                    animation.setAttribute('to', `${new_x} ${rotation.x} ${-new_z}`);
                    if (rotation.x > 4 && rotation.x < 9) {
                        animation.setAttribute('to', `${new_x} ${rotation.x - .9} ${-new_z}`)
                        console.log('reduced traject', rotation.x - .8)
                    } else if (rotation.x > 9 && rotation.x < 20) {
                        animation.setAttribute('to', `${new_x} ${rotation.x - 6} ${-new_z}`)
                    } else if (rotation.x > 20) {
                        animation.setAttribute('to', `${new_x} ${rotation.x - 10} ${-new_z}`)
                    } else if (rotation.x < 0) {
                        animation.setAttribute('to', `${new_x} ${rotation.x + 5} ${-new_z}`)
                    }
                    animation.setAttribute('dur', '750');
                    animation.setAttribute('repeat', '0');
                    newBullets.appendChild(animation);
                }, 0);
            }
        });
     
    }
    render() {
        return (
            <a-entity id="bullets" mixin="bullets">
            </a-entity>
        )
    }
};

export default Bullets;