import React, {Component} from 'react';
import Axios from 'axios';

import Form from './Form';
import Header from './Header';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      _id: '',
      title: '',
      description: '',
      imgUrl: '',
      completed: '',
      todoList: []
    };

  };
  handleSubmit = () => {

  }
  componentDidMount() {
    Axios.get('https://api.vschool.io/RobDeGeorge/todo').then(response => {
      console.log(response);
      this.setState({
        todoList: response.data
      })
    }).catch(error => {
      console.log(error);
    });;
  };
  render() {
    console.log('STATE:')
    console.log(this.state.todoList)
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
};