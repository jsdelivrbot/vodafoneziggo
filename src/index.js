import React, {Component} from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
      <a-scene>
        <a-assets>
          <a-asset-item id='snowman-obj' src='snowman.obj'></a-asset-item>
        <a-asset-item id='snowman-mtl' src='snowman.mtl'></a-asset-item>
</a-assets>
  <a-entity  obj-model='obj: #snowman-obj; mtl: #snowman-mtl' position='0 0 -9' rotation='0 270 -5'>
</a-entity>
  <a-plane position='0 0 -4' rotation='-90 0 0' width='4' height='4' color='#7BC8A4'></a-plane>
       <a-sky color='#ECECEC'></a-sky>
     </a-scene>
  )
}

ReactDom.render(<App />, document.querySelector('.container'));