import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';

const BACKGROUND = require("../../assets/images/Space.jpg")
const ASTEROID = require('../../assets/models/PsycheAsteroid.glb');

class Asteroid extends React.Component {
  constructor(){
    super();
    this.state={
      asteroidX: -1.2,
      asteroidY: 0.0,
      asteroidZ: -4.0,

    }
  }

  render () {
    return (
      <Scene>
        <a-entity gltf-model={ASTEROID} scale="1000 1000 1000" rotation="0 -8 0" position={`${this.state.asteroidX} ${this.state.asteroidY} ${this.state.asteroidZ}`} ></a-entity>
        <Entity primitive='a-sky' src={BACKGROUND} rotation="0 -100 0"/>
        <Entity light={{type: 'point'}} position="0 10 0" />
      </Scene>
    );
  }
}

export default Asteroid;