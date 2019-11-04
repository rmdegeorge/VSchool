import React from 'react';

function Todo(props) {
  const {title,description,imgUrl} = props.todoItem
  return (
    <div className="Todo">
      <label className="todoCompleted">Complete: <input type="checkbox" name="completed" id="completed"/></label>
      <h3 className="todoTitle">Title: {title}</h3>
      <p className="todoDesc">Description: {description}</p>
      <img className="todoImg" src={imgUrl} alt={`Image URL for ${title}`}/>
      <button className="todoEdit">Edit</button>
      <button className="todoDelet">Delete</button>
    </div>
  );
}

export default Todo;