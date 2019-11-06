import React from 'react';
import {withProvider} from './UglyThingsProvider';
import Form from './Form';
import ThingsList from './ThingsList'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
  };
  render() {
    return (
      <div className="App">
        I'm an App!
        <Form />
        <ThingsList />
      </div>
    )
  }
}

export default withProvider(App);