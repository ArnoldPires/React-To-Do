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

  render () {
    return (
      <Scene>
        <a-assets>
        <a-asset-item id="crate-obj" src="https://cdn.rawgit.com/flowerio/hello-vr/master/couch.obj"></a-asset-item>
        <a-asset-item id="crate-mtl" src="https://cdn.rawgit.com/flowerio/hello-vr/master/couch.mtl"></a-asset-item>
        </a-assets>

    <a-entity geometry="primitive: plane; height: 14; width: 22" position="-21 2.75 2.21" rotation="0 90 0"  material="shader: flat; src: url(http://www.shapeup.com/wp-content/uploads/2015/03/boston-photo1.jpg)"></a-entity>
    <a-entity geometry="primitive: plane; height: 9; width: 22" position="18.02 1.92 -1.67" rotation="0 -90 0"  material="shader: flat; src: url(https://ucarecdn.com/426abc54-c2ee-463e-8c75-0642af3382d7/)"></a-entity>

    <a-entity geometry="primitive: box; depth: 1.6; height: 0.1; width: 6" position="0 0.55 1.1" material="shader: flat; src: url(https://ucarecdn.com/42d3ab80-f1c9-4d51-a7d7-c6424c0a50f0/)">
    <a-entity geometry="primitive: box; depth: 1.6; height: 1; width: 0.2" position="2.9 -0.55 -0" material="shader: flat; src: url(https://ucarecdn.com/42d3ab80-f1c9-4d51-a7d7-c6424c0a50f0/)"></a-entity>
    <a-entity geometry="primitive: box; depth: 1.6; height: 1; width: 0.2" position="-2.9 -0.55 -0" material="shader: flat; src: url(https://ucarecdn.com/42d3ab80-f1c9-4d51-a7d7-c6424c0a50f0/)"></a-entity>

    <a-entity geometry="primitive: plane; height: 0.8; width: 0.6" position="0.8 0.1 0" rotation="-90 10 0"  material="shader: flat; side: double; src: url(https://ucarecdn.com/0728b893-0ca4-4c33-8116-2d6861239fca/)"></a-entity>
    <a-entity geometry="primitive: plane; height: 0.5; width: 0.4" position="1.6 0.08 0.2" rotation="-90 -20 0"  material="shader: flat; side: double; src: url(https://ucarecdn.com/34d4413b-3442-4e91-9541-9242b0fca00f/)"></a-entity>
    <a-entity geometry="primitive: box; depth: 0.05; height: 0.5; width: 0.01" position="1.417 0.06 0.13" rotation="90 -20 180"  material="shader: flat; side: double; src: url(images.jpg)"></a-entity>
    <a-entity geometry="primitive: box; depth: 0.5; height: 0.03; width: 0.4" position="1.6 0.06 0.2" rotation="0 -20 0"  material="shader: flat; side: double; color:#fff"></a-entity>
  </a-entity>

  <a-entity geometry="primitive: box; depth: 18; height: 0.5; width: 30" position="0 -0.5 2" material="shader: flat; src: url(https://ucarecdn.com/aae65dbf-a280-403b-ae73-9f92b8b4578e/); repeat: 5 5"></a-entity>
  <a-entity geometry="primitive: box; depth: 18; height: 0.5; width: 30" position="0 -0.5 20" material="shader: flat; src: url(https://ucarecdn.com/aae65dbf-a280-403b-ae73-9f92b8b4578e/); repeat: 5 5"></a-entity>
  <a-entity geometry="primitive: box; depth: 18; height: 0.5; width: 30" position="0 7.5 2" material="shader: flat;  metalness: 0.8; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 5 5"></a-entity>
  <a-entity geometry="primitive: box; depth: 18; height: 0.5; width: 30" position="0 7.5 20" material="shader: flat;  metalness: 0.8; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 5 5"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.2; height: 7.5; width: 30" position="0 3.5 -6.5" material="shader: standard; side: double; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 10 10"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.2; height: 7.5; width: 14" position="0 3.5 11.1" material="shader: standard; side: double; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 10 10"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.2; height: 7.5; width: 18" position="15 3.5 20" rotation="0 90 0" material="shader: standard; side: double; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 10 10"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.2; height: 2.7; width: 17.4" position="-15 6.1 2.1" rotation="0 90 0" material="shader: standard; side: double; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 10 10"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.2; height: 5; width: 1.8" position="-15 2.3 -5.5" rotation="0 90 0" material="shader: standard; side: double; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 10 10"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.2; height: 5; width: 1.8" position="-15 2.3 10.0" rotation="0 90 0" material="shader: standard; side: double; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 10 10"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.2; height: 7.5; width: 18" position="-15 3.5 20" rotation="0 90 0" material="shader: standard; side: double; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 10 10"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.2; height: 2.7; width: 17.4" position="15 6.1 2.1" rotation="0 90 0" material="shader: standard; side: double; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 10 10"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.2; height: 5; width: 1.8" position="15 2.3 -5.5" rotation="0 90 0" material="shader: standard; side: double; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 10 10"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.2; height: 5; width: 1.8" position="15 2.3 10.0" rotation="0 90 0" material="shader: standard; side: double; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 10 10"></a-entity>

  <a-entity geometry="primitive: plane; height: 5; width: 14" position="-14.89 2.3 2.3" rotation="0 90 0"  material="shader: flat; side: double; transparent: true; src: url(https://ucarecdn.com/0af91a72-fe71-455b-8100-d3dd523f4aef/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 5; width: 14" position="14.89 2.3 2.3" rotation="0 90 0"  material="shader: flat; side: double; transparent: true; src: url(https://ucarecdn.com/0af91a72-fe71-455b-8100-d3dd523f4aef/)"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.3; height: 0.4; width: 30" position="0 7.3 -6.3" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.3; height: 0.4; width: 5" position="12.2 3.3 -6.3" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.3; height: 0.4; width: 5" position="-12.2 3.3 -6.3" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.3; height: 0.4; width: 30" position="0 -0.35 -6.3" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.3; height: 0.4; width: 14" position="0 -0.35 10.9" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.3; height: 0.4; width: 18" position="14.8 -0.3 2.1" rotation="0 90 0" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.3; height: 0.4; width: 18" position="14.8 -0.3 20.1" rotation="0 90 0" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.3; height: 0.4; width: 18" position="-14.8 -0.3 2.1" rotation="0 90 0" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.3; height: 0.4; width: 14.4" position="-14.8 4.8 2.35" rotation="0 90 0" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.3; height: 0.4; width: 18" position="14.8 -0.3 2.1" rotation="0 90 0" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.3; height: 0.4; width: 14.4" position="14.8 4.8 2.35" rotation="0 90 0" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.5; height: 7.5; width: 0.5" position="-14.7 3.5 -6.3" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.5; height: 7.5; width: 0.5" position="14.7 3.5 -6.3" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.5; height: 7.5; width: 0.5" position="-14.7 3.5 10.9" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.5; height: 7.5; width: 0.5" position="14.7 3.5 10.9" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.5; height: 7.5; width: 0.5" position="6.9 3.5 10.9" material="shader: flat; src: url(https://ucarecdn.com/d883bb4b-2e8c-4f7d-af46-55b419acd8b9/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.5; height: 7.5; width: 0.5" position="-6.9 3.5 10.9" material="shader: flat; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 2 1"></a-entity>


  <a-entity geometry="primitive: box; depth: 0.15; height: 5.3; width: 9.3" position="0 2.8 -5.6" rotation="0 0 0"  material="shader: flat; metalness: 1.5; color: #0b0806;"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.1; height: 0.7; width: 12" position="0 6.1 -5.7" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 1; height: 0.2; width: 12.2" position="0 6.3 -6" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 7 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 1; height: 0.2; width: 12.2" position="0 5.6 -6" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 7 1"></a-entity>

  <a-entity geometry="primitive: box; depth: 1; height: 6; width: 1.1" position="5.2 2.5 -6"  rotation="0 0 0"  material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 1 2;"></a-entity>
  <a-entity geometry="primitive: box; depth: 1; height: 6; width: 1.1" position="-5.2 2.5 -6"  rotation="0 0 0"  material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 1 2;"></a-entity>

  <a-entity geometry="primitive: box; depth: 1; height: 0.8; width: 12" position="0 -0.3 -5.9" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>

  <a-entity geometry="primitive: box; depth: 1; height: 0.2; width: 4.2" position="-7.7 5.6 -6" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 1; height: 0.2; width: 4" position="-7.7 3.7 -6" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 1; height: 0.2; width: 4" position="-7.7 1.8 -6" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.1; height: 6; width: 4" position="-7.7 2.7 -6.35" material="shader: flat; color: #080302"></a-entity>
  <a-entity geometry="primitive: box; depth: 1; height: 0.2; width: 4.2" position="-7.7 -0.2 -6" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.1; height: 6; width: 1" position="-9.7 2.7 -6" rotation="0 90 0 " material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>

  <a-entity geometry="primitive: box; depth: 1; height: 0.2; width: 4.2" position="7.7 5.6 -6" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 1; height: 0.2; width: 4" position="7.7 3.7 -6" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 1; height: 0.2; width: 4" position="7.7 1.8 -6" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.1; height: 6; width: 4" position="7.7 2.7 -6.35" material="shader: flat; color: #080302"></a-entity>
  <a-entity geometry="primitive: box; depth: 1; height: 0.2; width: 4.2" position="7.7 -0.2 -6" material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.1; height: 6; width: 1" position="9.7 2.7 -6" rotation="0 90 0 " material="shader: flat; src: url(https://ucarecdn.com/0b2d713f-56f2-47ae-b0d6-69da23de3131/); repeat: 2 1"></a-entity>


  <a-entity src="https://ucarecdn.com/6b3e0482-ac5a-43d0-9a46-1b8b845190f7/" autoplay="true" width="6.80" height="5" position="4.26 6.76 1.43" rotation="80 0 0"></a-entity>
  <a-video src="#rc-video" width="9" height="5" position="0 2.8 -5.51"></a-video>
  <a-entity id="target" obj-model="obj: #crate-obj; mtl: #crate-mtl" position="0 -1.417 3.670" rotation="0 180 0" scale="0.2 0.2 0.2"></a-entity>


  <a-entity geometry="primitive: plane; height: 0.9; width: 3" position="7.5 0.42 -5.99" rotation="0 0 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/a919671a-aae2-4e09-9c6b-4d3a23b86429/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 0.90; width: 1.30" position="8.37 2.38 -5.99" rotation="0 0 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/fd4be0c3-81b9-4c4b-99aa-68f74be2c7b7/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 1.90; width: 1.70" position="6.80 2.41 -5.93" rotation="-30 0 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/9acf2270-0100-4559-8969-fa1624dbdc92/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 1.3; width: 1.3" position="-7.6 4.5 -5.99" rotation="0 0 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/9b0d67ad-bed5-48d5-8856-659cf27cb5b1/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 0.7; width: 0.9" position="-8.4 2.25 -5.99" rotation="0 0 0"  material="shader: flat; transparent: true; src: url(images/psvr.png)"></a-entity>
  <a-entity geometry="primitive: plane; height: 1.24; width: 1" position="-6.8 2.50 -5.99" rotation="0 0 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/0d4c9ba8-a2e7-4b1e-973a-f2702a3113ec/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 1.50; width: 2" position="-7.70 0.18 -5.99" rotation="0 0 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/08d8a8ac-8150-44fb-beea-87cb00178ba3/)"></a-entity>



  <a-entity geometry="primitive: box; depth: 0.1; height: 4; width: 5" position="-12.2 1.5 -6.4" rotation="0 0 0 " material="shader: flat; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 4 2"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.1; height: 4; width: 5" position="12.2 1.5 -6.4" rotation="0 0 0 " material="shader: flat; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 4 2"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.1; height: 4; width: 1.4" position="-14.9 1.5 -5.4" rotation="0 90 0 " material="shader: flat; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 5 5"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.1; height: 4; width: 1.4" position="-14.9 1.5 9.95" rotation="0 90 0 " material="shader: flat; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 5 5"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.1; height: 4; width: 1.4" position="14.9 1.5 -5.4" rotation="0 90 0 " material="shader: flat; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 5 5"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.1; height: 4; width: 1.4" position="14.9 1.5 9.95" rotation="0 90 0 " material="shader: flat; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 5 5"></a-entity>

  <a-entity geometry="primitive: box; depth: 0.1; height: 4; width: 18" position="14.9 1.5 20" rotation="0 90 0 " material="shader: flat; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 5 5"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.1; height: 4; width: 18" position="-14.9 1.5 20" rotation="0 90 0 " material="shader: flat; src: url(https://ucarecdn.com/91e099db-fc0d-48be-9060-8bf7312e18e2/); repeat: 5 5"></a-entity>


  <a-entity geometry="primitive: plane; height: 6; width: 12" position="0 -0.2 2" rotation="-90 0 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/eaa3ab1d-2b5a-4a6d-bcdb-75b539f076b5/)"></a-entity>


  <a-entity geometry="primitive: box; depth: 1.3; height: 1.3; width: 6" position="0 0.96 10.1" rotation="0 0 0 " material="shader: flat; src: url(https://ucarecdn.com/42d3ab80-f1c9-4d51-a7d7-c6424c0a50f0/); repeat: 1 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 1.6; height: 0.1; width: 6.3" position="0 1.6 10.1" rotation="0 0 0 " material="shader: flat; src: url(https://ucarecdn.com/42d3ab80-f1c9-4d51-a7d7-c6424c0a50f0/); repeat: 1 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.2; height: 2; width: 0.2" position="2.95 0.6 9.5" rotation="0 0 0 " material="shader: flat; src: url(https://ucarecdn.com/42d3ab80-f1c9-4d51-a7d7-c6424c0a50f0/); repeat: 1 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.2; height: 2; width: 0.2" position="2.95 0.6 10.7" rotation="0 0 0 " material="shader: flat; src: url(https://ucarecdn.com/42d3ab80-f1c9-4d51-a7d7-c6424c0a50f0/); repeat: 1 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.2; height: 2; width: 0.2" position="-2.95 0.6 9.5" rotation="0 0 0 " material="shader: flat; src: url(https://ucarecdn.com/42d3ab80-f1c9-4d51-a7d7-c6424c0a50f0/); repeat: 1 1"></a-entity>
  <a-entity geometry="primitive: box; depth: 0.2; height: 2; width: 0.2" position="-2.95 0.6 10.7" rotation="0 0 0 " material="shader: flat; src: url(https://ucarecdn.com/42d3ab80-f1c9-4d51-a7d7-c6424c0a50f0/); repeat: 1 1"></a-entity>


  <a-entity geometry="primitive: plane; height: 1.50; width: 2.90" position="-4.719 0.523 1.537" rotation="0 60 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/44ed0614-3795-4db6-9fb5-dabd5b779256/)"></a-entity>


  <a-entity geometry="primitive: plane; height: 1.00; width: 2.10" position="-1.33 0.81 1.45" rotation="-60 0 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/f9213d3e-cbd7-4fa5-9954-0fc61d2e1b07/)"></a-entity>


  <a-entity geometry="primitive: plane; height: 4; width: 6" position="0.02 4.50 10.99" rotation="0 180 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/b790e23b-03e2-472e-8aac-67cb97940fa3/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 4.50; width: 7.80" position="14.53 4.57 15" rotation="0 -90 0"  material="shader: flat; src: url(https://ucarecdn.com/b70058f0-d735-4dee-a778-b87ab7caaa94/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 5; width: 7.80" position="-3.44 6.71 1.45" rotation="80 0 0"  material="shader: flat; src: url(https://ucarecdn.com/33c5eedc-c76d-4fe7-9dfd-8915c697dfdd/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 4; width: 3.20" position="4.82 4.49 10.98" rotation="0 180 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/f02c066c-57f5-4dca-a8d7-6eefb8ab3abe/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 1.90; width: 0.90" position="4.61 0.30 10.15" rotation="0 180 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/65c303c6-6db3-4c37-a00e-1f76ae8f9add/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 5.90; width: 10.90" position="11.37 1.97 4.72" rotation="0 260 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/3458f2a8-2f32-4136-b0e3-0621fcc4de76/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 4; width: 3.20" position="-4.80 4.50 10.96" rotation="0 180 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/a6bae81a-ecb7-439b-9263-cfeda432d2d5/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 4; width: 4.20" position="-12.40 5.11 -6.38" rotation="0 0 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/bee01e26-dd04-4b10-b9bc-c56505e06a0e/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 1.15; width: 1.40" position="-0.72 2.17 9.93" rotation="0 180 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/d5ca1e29-7bd3-4fda-a3bc-8f4f47565d6d/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 1.15; width: 1.40" position="1.42 2.18 9.90" rotation="0 180 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/8f54c266-7968-4cc0-ad07-f08f334d3f4b/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 3.50; width: 3.90" position="12.52 5.24 -6.39" rotation="0 0 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/8b579646-47f5-4be8-8826-902d62cabd51/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 6.40; width: 5.00" position="-14.82 3.75 13.66" rotation="0 -270 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/d1aa928b-dc56-48d8-ab07-93ce41eac829/)"></a-entity>


  <a-entity geometry="primitive: plane; height: 2; width: 2" position="-8 6.33 2.46" rotation="0 100 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/aa4a34da-ed88-4f35-9960-8d79511ce9cb/)"></a-entity>
  <a-entity geometry="primitive: plane; height: 2; width: 2" position="8.01 6.33 2.46" rotation="0 250 0"  material="shader: flat; transparent: true; src: url(https://ucarecdn.com/aa4a34da-ed88-4f35-9960-8d79511ce9cb/)"></a-entity>


  <a-entity camera gamepad-controls look-controls position="-0.906 2.805 4.748" cursor-visible="enabled: true" wasd-controls="enabled: false">
    <a-entity cursor="maxDistance: 30"
                        position="0 0 -1"
                        geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03;"
                        material="color: #CCC; shader: flat;"></a-entity


      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
