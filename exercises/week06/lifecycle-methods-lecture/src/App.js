import React, {Component} from 'react';
import Axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };

  };

  componentDidMount() {  // This code will NOT run until the constructor() has mounted fully. Axios requests always go heret
    Axios.get('https://api.vschool.io/RobDeGeorge/todo').then(response => {
      console.log(response);
      this.setState({todos: response.data})
    })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
      
      </div>
    );
  };
}

export default App;
