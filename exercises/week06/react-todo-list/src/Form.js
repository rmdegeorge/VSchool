import React, {Component} from 'react';
import axios from 'axios';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      imgUrl: '',
    };
  };
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      title: '',
      description: '',
      imgUrl: ''
    });
  };
  render() {
    console.log('FORM STATE:')
    console.log(this.state)
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <input type="text" name="title" id="title" className="titleInput" placeholder="Title" onChange={this.handleChange} value={this.state.title} />
        <textarea name="description" id="description" className="descInput" placeholder="Description" onChange={this.handleChange} value={this.state.description} />
        <input type="text" name="imgUrl" id="imgUrl" className="urlInput" placeholder="Image URL" onChange={this.handleChange} value={this.state.imgUrl} />
        <button type="submit" className="submitButton">Add To Do</button>
      </form>
    );
  };
};