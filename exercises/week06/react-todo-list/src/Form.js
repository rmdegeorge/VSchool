import React, {Component} from 'react';
import Axios from 'axios';


export default class Form extends Component {
  constructor() {
    super();

  };

  render() {
    return (
      <form action="submit" className="Form">
        <input type="text" name="title" id="title" className="titleInput" placeholder="Title" />
        <textarea name="description" id="description" className="descInput" placeholder="Description" />
        <input type="text" name="imgUrl" id="imgUrl" className="urlInput" placeholder="Image URL" />
        <label className="checkboxInput">Completed: <input type="checkbox" name="completed" id="completed"/></label>
        <button type="submit" className="submitButton">Add To Do</button>
      </form>
    );
  };
};