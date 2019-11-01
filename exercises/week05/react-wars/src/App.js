import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import characters from './characters.json';

import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';



export default class App extends Component{
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Switch>
          
        </Switch>
        <Footer />
      </div>
    );
  }
}

