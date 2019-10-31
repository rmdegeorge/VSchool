import React, {Component} from 'react';
import './App.css';
import Options from "./Options"
import Greeting from "./Greeting"
import AddGreeting from "./AddGreeting"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: ""
  }
  }
  handleChange = (e) => {
    console.dir(e.target.name)
    // this.setState({color: e.target.value})  // this can be rewritten as the next line so that it can be used for and element's onChange function
    this.setState({[e.target.name]: e.target.value})
}

  render() {
    return (
      <div>
      <Options color={this.state.color} handleChange={this.handleChange} />
      <Greeting color={this.state.color} />
      <AddGreeting />
    </div>
    )
  }
}

