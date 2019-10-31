import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';


export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
