import React from 'react';
import {withProvider} from './UglyThingsProvider';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      imgURL: ''
    }
  };
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  handleSubmit = (e) => {
    this.props.handleSubmit(e,this.state)
  }
  render() {
    return (
      <form action="submit" className="form" onSubmit={this.handleSubmit}>
        <input type="text" name="title" id="title" className="form-title" value={this.state.title} onChange={this.handleChange} />
        <input type="text" name="description" id="description" className="form-description" value={this.state.description} onChange={this.handleChange} />
        <input type="text" name="imgURL" id="imgURL" className="form-imgURL" value={this.state.imgURL} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default withProvider(Form);