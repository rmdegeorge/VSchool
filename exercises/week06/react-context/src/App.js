import React, {Component} from 'react';

import Header from './Header';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}