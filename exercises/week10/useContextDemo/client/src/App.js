import React, {useContext} from 'react';
import {CountContext} from './CountProvider.js';

function App(props) {
  
  const {count, increment} = useContext(CountContext);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
