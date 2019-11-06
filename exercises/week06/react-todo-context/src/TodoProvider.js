import React, { Component } from 'react';
import axios from 'axios';

const {Provider,Consumer} = React.createContext();

class TodoProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
    }
  }
  
  addNewTodo = newTodo => {
    axios.post('https://api.vschool.io/RobDeGeorge/todo/', newTodo).then(response => {
      console.log(response.data);
      this.setState(prevState =>{
        return {todos: [...prevState.todos, response.data]}
      })
    }).catch(error => {
      console.log(error)
    })
  }
  getAllTodos = () => {
    axios.get('https://api.vschool.io/RobDeGeorge/todo/').then(response => {
      console.log(response.data)
      this.setState({todos: response.data})
    }).catch(error => {
      console.log(error)
    })
  }
  deleteTodo = (id) => {
    axios.delete('https://api.vschool.io/RobDeGeorge/todo/' + id).then(response => {
      console.log(response.data);
      this.setState(prevState => {
        return {
          todos: prevState.todos.filter(todo => todo._id !== id)
        }
      })
    }).catch(error => {
      console.log(error)
    })
  };
  editTodo = (id,updatedTodo) => {
    axios.put('https://api.vschool.io/RobDeGeorge/todo/' + id, updatedTodo).then(response => {
      console.log(response.data);
      this.setState(prevState => {
        return {
          todos: prevState.todos.map(todo => todo._id === id ? response.data : todo)
        }
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        addNewTodo: this.addNewTodo,
        getAllTodos: this.getAllTodos,
        deleteTodo: this.deleteTodo,
        editTodo: this.editTodo,
        toggle: this.toggle
      }}>
        {this.props.children}
      </Provider>

    );
  }
}

export default TodoProvider;

export function withTodos(Comp) {
  return props => <Consumer>
                    {value => <Comp {...value}{...props} />}
                  </Consumer>
}