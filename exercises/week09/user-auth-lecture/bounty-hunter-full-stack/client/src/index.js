import React from 'react';
import ReactDOM from 'react-dom';

import DataProvider from './DataProvider';
import App from './App';

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>
  , document.getElementById('root')
);
