import React from 'react';
import ReactDOM from 'react-dom';
// import with curly braces means you are exporting named exports
import { HotButton } from './hot-button';

const element = (
  <div>
    <HotButton />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
