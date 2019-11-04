import React from 'react';
import Todo from './Todo';


function TodoList(props) {
  const mappedTodos = props.todolist.map(todo => <Todo todo={todo} />)
  return (
    <div className="TodoList">
      {mappedTodos}
    </div>
  );
}

export default TodoList;