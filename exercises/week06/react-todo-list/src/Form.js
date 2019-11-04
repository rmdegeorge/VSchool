import React, {Component} from 'react';
import Axios from 'axios';


export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      _id: '',
      title: '',
      description: '',
      imgUrl: '',
      completed: ''
    };
  };
  handleSubmit = (e) => {
    e.preventDefault();

  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <form action="submit" className="Form">
        <input type="text" name="title" id="title" className="titleInput" placeholder="Title" onChange={this.handleChange} value={this.state.title} onSubmit={this.handleSubmit(this.state)} />
        <textarea name="description" id="description" className="descInput" placeholder="Description" onChange={this.handleChange} value={this.state.description} />
        <input type="text" name="imgUrl" id="imgUrl" className="urlInput" placeholder="Image URL" onChange={this.handleChange} value={this.state.imgUrl} />
        <button type="submit" className="submitButton">Add To Do</button>
      </form>
    );
  };
};