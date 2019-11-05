import React from 'react';

import Menu from './Menu';
import Card from './Card';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        I'm an App!
        <Menu />
        <Card />
      </div>
    );
  };
}
