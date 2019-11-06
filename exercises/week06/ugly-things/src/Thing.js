import React from 'react';
import { withProvider } from './UglyThingsProvider';

class Thing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      imgURL: this.props.imgURL,
      isBeingEdited: false
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  toggleEdit = () => {
    this.setState(prevState => {
      return {isBeingEdited: !prevState.isBeingEdited}
    })
    console.log('You Clicked Edit')
    console.log(this.state)
  }
  handleSave = (e) => {
    e.preventDefault();
    this.toggleEdit();
    this.props.handleSave(this.state, this.props.index)
  }
  render() {
    console.log('THING STATE')
    console.log(this.state)
    const displayThing = (
      <div className="Thing">
          <h3 className="title">{this.props.title}</h3>
          <p className="description">{this.props.description}</p>
          <img src={this.props.imgURL} alt="image of the ugly thing"/>
          <button className="edit button" 
                  onClick={this.toggleEdit}>
            Edit
          </button>
          <button className="delete button" 
                  onClick={() => this.props.handleDelete(this.props.index)}>
            Delete
          </button>
        </div>
      );
      const displayEdit = (
        <form className="editForm" onSubmit={this.handleSave}>
          <input type="text" name="title" id="title" className="form-title" value={this.state.title} onChange={this.handleChange} />
          <input type="text" name="description" id="description" className="form-description" value={this.state.description} onChange={this.handleChange} />
          <input type="text" name="imgURL" id="imgURL" className="form-imgURL" value={this.state.imgURL} onChange={this.handleChange} />
          <button type="submit" >Save</button>
        </form>
      )
    return (
      this.state.isBeingEdited ? displayEdit : displayThing
    )
  }
}

export default withProvider(Thing);