import React from 'react';

function Todo(props) {
  const {title,description,imgUrl} = props.todoItem
  return (
    <div className="Todo">
      <label className="todoCompleted">Complete: <input type="checkbox" name="completed" id="completed"/></label>
      <div classNapxme="todoTitle">{title}</div>
      <div className="todoDesc">{description}</div>
      <img className="todoImg" src={imgUrl} alt={`Image URL for ${title}`}/>
      <button className="todoEdit">Edit</button>
      <button className="todoDelete">Delete</button>
    </div>
  );
}

export default Todo;