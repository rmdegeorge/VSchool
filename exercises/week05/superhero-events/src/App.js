import React, {Component} from 'react';
import heroes from './SuperHeroes.json';
import SuperHeroList from './SuperHeroList';
import './App.css';

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
    <div className="App">
      <SuperHeroList heroes={heroes} />
    </div>
    );
  }
}

export default App;
