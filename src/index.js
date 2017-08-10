import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://ucarecdn.com/0e2acdd8-a760-4801-97ca-7eeb88c6dd62/"/>
          <img id="skyTexture" src="https://ucarecdn.com/e21a6bc9-cc22-4202-8d0e-f91a4e8e326c/"/>
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2348" radius="30" src="#skyTexture" theta-length="90" width="2348"/>
        <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
        <Entity text={{value: 'Hello! This is A-Frame ReactVR!!!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
        <Entity text={{value: 'Random Text Random Text', align: 'center'}} position={{x: 0, y: 2, z: -3}}/>

        <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.6}}
          animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          position={{x: 0, y: 1, z: -3}}
          events={{click: this.changeColor.bind(this)}}>
          <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 500, loop: true, to: '2 2 2'}}
                  geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                  material={{color: '#24CAFF'}}/>
        </Entity>

        <Entity id="sphere"
          geometry={{primitive: 'sphere'}}
          material={{color: this.state.color, opacity: 0.6}}
          animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          position={{x: 0, y: 1, z: -7}}
          events={{click: this.changeColor.bind(this)}}>
          <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 600, loop: true, to: '2 2 2'}}
                  geometry={{primitive: 'sphere', depth: 0.2, height: 0.2, width: 0.2}}
                  material={{color: '#24CAFF'}}/>
        </Entity>

        <Entity id="sphere"
          geometry={{primitive: 'sphere'}}
          material={{color: this.state.color, opacity: 0.6}}
          animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          position={{x: 0, y: 9, z: -4}}
          events={{click: this.changeColor.bind(this)}}>
          <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 10000, loop: true, to: '2 2 2'}}
                  geometry={{primitive: 'sphere', depth: 0.2, height: 0.2, width: 0.2}}
                  material={{color: 'yellow'}}/>
        </Entity>

        <Entity id="cylinder"
          geometry={{primitive: 'cylinder'}}
          material={{color: this.state.color, opacity: 0.6}}
          animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          position={{x: 4, y: 1, z: -5}}
          events={{click: this.changeColor.bind(this)}}>
          <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                  geometry={{primitive: 'cylinder', depth: 0.2, height: 0.2, width: 0.2}}
                  material={{color: '#e20505'}}/>
        </Entity>

        <a-ocean position="0 0 0"
        geometry="primitive: plane; width: 100; height: 200;" rotation="-90 0 0"
        material="src: #grid; repeat: 5 10; ;metalness:0.6; transparent: true; opacity: 0.7; sphericalEnvMap: #sky;">
    </a-ocean>
        <a-entity geometry="primitive: plane; height: 1.00; width: 2.10" scale="10 15 10" position="7.35 7.41 1.45" rotation="0 -80 0"  material="shader: flat; transparent: true;
        src: url(https://ucarecdn.com/075ac85d-290a-42a2-814f-1738a69be028/)"></a-entity>

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>

      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
