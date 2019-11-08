import React from 'react';

import AutoCompleteText from './components/AutoCompleteText';

import './App.css';
import countries from './countries';

function App() {
  return (
    <div className="App">
      <div className="container">
        <AutoCompleteText items={countries} />
      </div>
    </div>
  );
}

export default App;
