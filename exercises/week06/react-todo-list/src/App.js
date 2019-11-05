import React, {Component} from 'react';
import axios from 'axios';

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
    axios.post('https://api.vschool.io/RobDeGeorge/todo', todo).then(response => {
      this.setState(prevState => {
        return {todoList: [response.data, ...prevState.todoList]}
      });
    }).catch(error => {
      console.log(error);
    });
  };
  handleSave = (updates, _id) => {
    axios.put('https://api.vschool.io/RobDeGeorge/todo/'+_id, updates).then(response => {
      console.log(response.data);
      this.setState(prevState => {
        const todoListCopy = [...prevState.todoList];
        const index = todoListCopy.findIndex(todo => {
          return todo._id === _id
        });
        todoListCopy[index] = response.data;
        return {todoList: todoListCopy};
      });
    }).catch(error => {
      console.log(error);
    });
  }
  handleDelete = (_id) => {
    axios.delete('https://api.vschool.io/RobDeGeorge/todo/' + _id).then(response => {
      console.log(response.data);
      this.setState((prevState) => {
        const todoList = prevState.todoList.filter(todo => {
          return todo._id !== _id;
        })
        return{todoList: todoList};
      })
    }).catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    axios.get('https://api.vschool.io/RobDeGeorge/todo').then(response => {
      console.log(response);
      this.setState({
        todoList: response.data.reverse()
      })
    }).catch(error => {
      console.log(error);
    });;
  };
  render() {
    console.log('APP STATE:')
    console.log(this.state.todoList)

    
    return (
      <div className="App">
        <Header />
        <Form handleSubmit={this.handleSubmit}/>
        <TodoList todoList={this.state.todoList} handleSave={this.handleSave} handleDelete={this.handleDelete} />
      </div>
    );
  }
};