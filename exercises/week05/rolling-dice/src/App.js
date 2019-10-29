import React, {Component} from 'react';
import './App.css';
import DiceBox from './DiceBox';

class App extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="App">
        <h1>Dice Box</h1>
        <DiceBox />
      </div>
    );
  }
}

export default App;


/**
 * Still has errors displaying spots.
 * 
 * for some reason when the spots render, they don't take the proper positions...
 * for numbers 1, 2, & 3 it works correctly.  Numbers 4, 5, & 6 just repeat 2 and 3...
 */