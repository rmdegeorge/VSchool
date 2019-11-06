import React, { Component } from 'react';
import {withTodos} from './TodoProvider';
import Todo from './Todo';

class TodoContainer extends Component {
  componentDidMount() {
    this.props.getAllTodos()
  }
  render() {
    const mappedTodos = this.props.todos.map(todo => <Todo key={todo._id} info={todo} />)
    return (
      <div className="todo-container">
        {mappedTodos}
      </div>
    );
  }
}

export default withTodos(TodoContainer);