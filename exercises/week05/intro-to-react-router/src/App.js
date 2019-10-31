import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Navbar from './Navbar';
import Footer from './Footer';

import Home from './Home';
import About from './About';
import ProductList from './ProuductList';
import Product from './Product';


export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(Product)
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/:_id" component={Product} /> 
        </Switch>
        <Footer />
      </div>
    );
  }
}

