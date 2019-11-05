import React from 'react';
import Todo from './Todo';


function TodoList(props) {
  const mappedTodos = props.todoList.map(todoItem => <Todo key={todoItem._id} _id={todoItem._id} todoItem={todoItem} handleSave={props.handleSave} handleDelete={props.handleDelete} />)
  return (
    <div className="TodoList">
    <div className="Todo">
      <div></div>
      <div className="todoTitle"><h3>Title</h3></div>
      <div className="todoDesc"><h3>Description</h3></div>
      <div className="todoImg"><h3>Image</h3></div>
      <div className="todoEdit"><h3>Edit</h3></div>
      <div className="todoDelete"><h3>Delete</h3></div>
    </div>
      {mappedTodos}
    </div>
  );
}

export default TodoList;