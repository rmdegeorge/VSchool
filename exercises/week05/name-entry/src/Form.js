import React, {Component} from 'react';

export default class Form extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className="Form">
        <form action="submit" name="myForm">
          <input type="name" /><button type="submit">Submit</button>
          <h2>Names Go Here</h2>
          <ol>
            <li>list1</li>
            <li>list2</li>
          </ol>



        </form>
      </div>
    )
  }
}