import React, {Component} from 'react';
import Count from './Count';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    // this.handleClick = this.handleClick.bind(this);    ====>  this line is not needed if handleClick is difined with an arrow function
  }
  handleIncrement = () => {
    this.setState((prevState) => {  // setState takes an object or a function --> object when we don't care about what the previous state was
      return {count: prevState.count + 1}  // don't use prevState++ because we don't want to change prevState.  we want to add to prevState and return the new value.
    }); 
  }
  handleDecrement = () => {
    this.setState((prevState) => {
      return {count: prevState.count - 1}
    });
  }

  render() {
    return (
      <div className="App">
        <Count number={this.state.count} />
        <button onClick={this.handleIncrement} style={{width: "50%", fontSize: "30px"}}>Increment</button>
        <button onClick={this.handleDecrement} style={{width: "50%", fontSize: "30px"}}>Decrement</button>

      </div>
    )
  }
}

export default App;