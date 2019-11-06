import React from 'react';
import {withTodos} from './TodoProvider';
import Form from './Form';

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      toggled: true
    }
  }
  toggle = () => {
    console.log('YOU TOGGLED EDIT')
    this.setState(prevState => {
      return {
        toggled: !prevState.toggled
      }
    })
  }
  render() {
    const {title,description,_id} = this.props.info
    return (
      <div>
        {this.state.toggled ?
          <div className="todo">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={this.toggle}>Edit</button>
            <button onClick={() => this.props.deleteTodo(_id)}>Delete</button>
          </div>
          :
          <Form button="Save" type="update" todo={this.props.info} toggle={this.toggle}/>
          }
      </div>


    );
  }
  
}

export default withTodos(Todo);