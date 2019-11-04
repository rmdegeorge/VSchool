import React from 'react';
import Todo from './Todo';


function TodoList(props) {
  const mappedTodos = props.todoList.map(todoItem => <Todo key={todoItem._id} todoItem={todoItem} />)
  return (
    <div className="TodoList">
      {mappedTodos}
    </div>
  );
}

export default TodoList;