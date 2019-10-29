import React, {Component} from 'react';

class RollButton extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <button onClick={this.props.onClick} className="RollButon">
        Roll
      </button>
    )
  }
}

export default RollButton;