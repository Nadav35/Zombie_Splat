import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';

class Bullets extends Component {
    componentDidMount() {
        document.querySelector('#cursor').addEventListener('click', function (evt) {
            setTimeout(() => {
            let camera = document.querySelector("#camera");
            let position = evt.detail.intersection.point;
            let rotation = camera.getAttribute('rotation');
            let newBullets = document.createElement('a-entity');
            newBullets.setAttribute('mixin', 'bullets');
            newBullets.object3D.position.set(position.x, position.y, position.z);
            newBullets.setAttribute('static-body');
            let parent = document.querySelector("#scene");
            parent.appendChild(newBullets);
            let animation = document.createElement('a-animation');
            let radian = -(rotation.y * (Math.PI / 180));
            let new_z = (20 * Math.cos(radian));
            let new_x = (20 * Math.sin(radian));

            animation.setAttribute('attribute', 'position');
            animation.setAttribute('from', `${position.x} ${position.y} ${position.z}`);
            animation.setAttribute('to', `${new_x} ${rotation.x} ${-new_z}`)
            animation.setAttribute('dur', '750');
            animation.setAttribute('repeat', '0');
            newBullets.appendChild(animation);
        }, 75);
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