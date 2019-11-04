import React, {Component} from 'react';
import Axios from 'axios';

import Form from './Form';
import Header from './Header';
import TodoList from './TodoList';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: []
    };

  };
  
  handleSubmit = (todo) => {
    Axios.post('https://api.vschool.io/RobDeGeorge/todo', todo).then(response => {
      this.setState(prevState => {
        return {todos: [...prevState.todos, response.data]}
      });
    }).catch(error => {
      console.log(error);
    });
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
        <Form handleSubmit={this.handleSubmit}/>
        <TodoList todolist={this.state.todoList} />
      </div>
    );
  }
};