import React from 'react';
import ReactDOM from 'react-dom';

import OurProvider from './OurProvider'
import App from './App';
export const {Consumer,Provider} = React.createContext();

ReactDOM.render(
  <OurProvider>
    <App age={31} />
  </OurProvider>, 
  document.getElementById('root')
);

