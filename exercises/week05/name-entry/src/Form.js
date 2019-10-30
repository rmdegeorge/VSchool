import React, {Component} from 'react';
import NamesContainer from './NamesContainer';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '', // state here should always have the same name as the name attribut of the corresponding form input
      names: [] 
    }
  }
  handleChange = (e) => {
    let {name,value} = e.target
    this.setState({[name]: value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let {fullName} = this.state;
    this.setState(prev => {
      return {
        names: [...prev.names, fullName]
      }
    })
  }
  render() {
    let {names, fullName} = this.state;
    const displayNames = names.map((name,i) => 
      <li key={i+name}>{name}</li>) //map through names here to update <li> 
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <input  type="name" 
                  placeholder="Full Name" 
                  name="fullName"
                  value={fullName} 
                  onChange={this.handleChange} />
          <button type="submit">Update</button>
          <h3>{fullName}</h3>
        </form>
        <NamesContainer names={names} />
      </div>
    )
  }
}