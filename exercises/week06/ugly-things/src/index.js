import React from 'react';
import ReactDOM from 'react-dom';
import UglyThingsProvider from './UglyThingsProvider';

import App from './App';

ReactDOM.render(
  <UglyThingsProvider>
    <App />
  </UglyThingsProvider>
  , document.getElementById('root'))