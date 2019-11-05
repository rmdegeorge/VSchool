import React, {Component} from 'react';
import axios from 'axios';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.todoItem.title,
      description: this.props.todoItem.description,
      imgUrl: this.props.todoItem.imgUrl,
      completed: this.props.todoItem.completed,
      isBeingEdited: false
    };
  };
  handleDelete = () => {
    this.props.handleDelete(this.props._id);
    
  }
  handleEdit = () => {
    this.setState(prevState => {
      return {isBeingEdited: !prevState.isBeingEdited}
    })
  }
  handleSave = () => {
    this.handleEdit()
    this.props.handleSave(this.state, this.props._id);
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleCheckboxChange = (e) => {
    // handles the checkbox toggle functionality.
    // run a axios put to update the "completed" field
    this.state.completed = e.target.checked ? true : false;
    axios.put('https://api.vschool.io/RobDeGeorge/todo/' + this.props._id, this.state).then(response => {
      console.log(response.data);
      this.forceUpdate();
    }).catch(error => {
      console.log(error);
    });
    
  }
  render() {
    console.log('TODO STATE');
    console.log(this.state);
    console.log(this.props._id);
    
    const {title,description,imgUrl} = this.props.todoItem;
    const display = (
      <div className="Todo">
        <label className="todoCompleted">Complete: <input type="checkbox" name="completed" id="completed" onChange={this.handleCheckboxChange} checked={this.state.completed}/></label>
        <div className="todoTitle" style = {this.state.completed ? {textDecorationLine: 'line-through'} : null  } >{title}</div>
        <div className="todoDesc">{description}</div>
        <img className="todoImg" src={imgUrl} alt={`Image URL for ${title}`}/>
        <button className="todoEdit" onClick={this.handleEdit}>Edit</button>
        <button className="todoDelete" onClick={this.handleDelete}>Delete</button>
      </div>
    );
    const editForm = (
      <form className="Todo">
        <div></div>
        <input className="todoTitle" type="text" name="title" id="title" placeholder="Title" onChange={this.handleChange} value={this.state.title} />
        <input className="todoDesc" type="text" name="description" id="description" placeholder="Description" onChange={this.handleChange} value={this.state.description} />
        <input className="todoimg" type="text" name="imgUrl" id="imgUrl" placeholder="Image URL" onChange={this.handleChange} value={this.state.imgUrl} />
        <button className="todoSave" onClick={this.handleSave} >Save</button>
        <div></div>
      </form>
    )
    if (this.state.isBeingEdited) {
      return editForm;
    } else {
      return display;
    };
  };
}

export default Todo;


/*
checkbox.type = 'checkbox';
checkbox.addEventListener('change', e => {
    let id = todo._id
    let completed;
    if (e.target.checked) {
        completed = {completed: true};
        h2.style.textDecoration = "line-through";
    } else {
        completed = {completed: false};
        h2.style.textDecoration = "initial"
    };
    axios.put('https://api.vschool.io/RobDeGeorge/todo/'+id, completed).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });
})
checkbox.checked = todo.completed;
if (todo.completed) {
    h2.style.textDecoration = "line-through";
} else {
    h2.style.textDecoration = "initial";
};
*/