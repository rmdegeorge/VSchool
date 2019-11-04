import React from 'react';

function Todo(props) {
  return (
    <div className="Todo">
      <label className="todoCompleted">Complete: <input type="checkbox" name="completed" id="completed"/></label>
      <h3 className="todoTitle">Title: {props.todo.title}</h3>
      <p className="todoDesc">Description: {props.todo.description}</p>
      <img className="todoImg" src={props.todo.imgUrl} alt={`Image URL for ${props.todo.title}`}/>
      <button className="todoEdit">Edit</button>
      <button className="todoDelet">X</button>
    </div>
  );
}

export default Todo;