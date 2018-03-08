import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Aframe} from '../node_modules/aframe';


const App = () => {
  return (
      <a-scene>
        <a-sphere src="../img/campagne-banner-4g.jpg" rotation="0 90 0" position="3 2.25 -5" radius="1.20">
          <a-animation attribute="rotation" fill="forwards" easing="linear" dur="5000" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
        </a-sphere>

        <a-assets>
          <a-asset-item id='snowman-obj' src='snowman.obj'></a-asset-item>
        <a-asset-item id='snowman-mtl' src='snowman.mtl'></a-asset-item>
</a-assets>

  <a-entity  obj-model='obj: #snowman-obj; mtl: #snowman-mtl' position='-4 -1 -10' rotation='0 270 -5'>
    <a-animation attribute="rotation" fill="forwards" easing="linear" dur="20000" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
</a-entity>

       <a-sky color='#ECECEC'></a-sky>
     </a-scene>
  )
}

ReactDom.render(<App />, document.querySelector('.a-frame-container'));