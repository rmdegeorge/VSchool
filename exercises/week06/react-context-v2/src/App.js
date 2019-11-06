import React from 'react';
import {withProvider} from './OurProvider'
import './App.css';
function App(props) {
  console.log(props)
  return (
    <div className={props.on ? 'light' : 'dark'}>
      <h1>Hello there</h1>
      <button onClick={props.toggle}>Change Theme</button>
    </div>
  );
}
export default withProvider(App);