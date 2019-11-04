import React, {Component} from 'react';

import Header from './Header';
import HitListContainer from './HitListContainer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div className="App">
        <Header />
        <HitListContainer />
      </div>
    );
  }
}

export default App;
