import React, {Component} from 'react';

import {withProvider} from './OurProvider';
import Person from './Person';

import './App.css';

function App(props) {
  return (
    <div className={props.on ? 'light' : 'dark'}>
      <h1>Hello There</h1>
      <button onClick={props.toggle}></button>
      <Person />
    </div>
  )
}

export default withProvider(App);