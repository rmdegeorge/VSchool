import React from 'react';
import './App.css';
import Options from "./Options"
import Greeting from "./Greeting"
import AddGreeting from "./AddGreeting"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        color: "",
        // store options here
    }
  }

  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value })
  }

  render(){
    return (
      <div>
        <Options color={this.state.color} handleChange={this.handleChange} />
        <Greeting color={this.state.color}/>
        <AddGreeting />
      </div>
    );
  }
  
}

export default App;
