import React, {Component} from 'react';

class Button extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className="Button" onClick={this.props.onClick}>
        {this.props.text}
      </div>
    )
  }
}

export default Button;