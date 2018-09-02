import React, { Component } from 'react';
import 'aframe';

class Controller extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
       document.querySelector('#cube').addEventListener('click', function () {
           this.setAttribute('material', 'color', 'red');
           console.log('I was clicked!');
       });
    }
 
    render() {
        return(
            <a-entity id="cube" geometry="primitive: box" material="color: blue"> </a-entity>
        )
    }
};

export default Controller;