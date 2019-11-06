import React, { Component } from 'react';
import {withTodos} from './TodoProvider';

class Form extends Component {
  constructor() {
    super() 
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault()
    
    if (this.props.type === "add") {
      this.props.addNewTodo(this.state)
    } else  {
      this.props.editTodo(this.props.todo._id, this.state) 
      this.props.toggle()
    }
  
  }
  componentDidMount() {
    if (this.props.type === 'update') {
      let {title, description} = this.props.todo
      this.setState({title, description})
    }
  }
  render() {
    return (
      <form className={this.props.type === 'add' ? 'todo-submit' : 'todo-edit'}
            onSubmit={this.handleSubmit}>
        {this.props.type === 'add' ? <h1>Add New Todo:</h1> : null}
        {this.props.type === 'add' ? null : 'Title:'}
        <input  type="text"
                name="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleChange}
        />
        {this.props.type === 'add' ? null : 'Description:'}
        <input  type="text"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleChange}
        />
        <button>{this.props.button}</button>
      </form>
    );
  }
}

export default withTodos(Form);