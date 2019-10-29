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
