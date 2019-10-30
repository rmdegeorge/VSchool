import React, {Component} from 'react';
import Form from './Form';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <h1>Name Form</h1>
        <Form />
      </div>
    )
  }
}