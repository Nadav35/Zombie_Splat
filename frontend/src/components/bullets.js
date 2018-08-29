import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';

class Bullets extends Component {
    componentDidMount() {
        document.querySelector('body').addEventListener('keydown', function (evt) {
            if (evt.keyCode === 32) {
                setTimeout(() => {
                    let camera = document.querySelector("#camera");
                    let position = {x:0, y:.5, z: -1}
                    let rotation = camera.getAttribute('rotation');
                    let newBullets = document.createElement('a-entity');
                    newBullets.setAttribute('mixin', 'bullets');
                    newBullets.setAttribute('dynamic-body');
                    let parent = document.querySelector("#scene");
                    parent.appendChild(newBullets);
                    let animation = document.createElement('a-animation');
                    let radian = -(rotation.y * (Math.PI / 180));
                    let new_z = (20 * Math.cos(radian));
                    let new_x = (20 * Math.sin(radian));

                    console.log('cam rotation', rotation)
                    animation.setAttribute('attribute', 'position');
                    animation.setAttribute('from', `${position.x} ${position.y} ${position.z}`);
                    animation.setAttribute('to', `${new_x} ${rotation.x} ${-new_z}`)
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
                }, 75);
            }
    })     
    }
    render() {
        return (
        <a-entity
            position="0 1 -3"
            id="weapon">
              <a-sphere color="green" visible="false" radius="0.1"></a-sphere>
        </a-entity>
        )
    }
};

export default Bullets;