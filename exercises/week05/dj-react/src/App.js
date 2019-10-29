import React, {Component} from 'react';
import BoxContainer from './BoxContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className="App">
        App
        <BoxContainer />
      </div>
    );
  }
}
export default App;