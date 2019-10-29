import React, {Component} from 'react';

class Count extends Component {
  constructor() {
    super()
  }
  render() {
    return (
    <div className="count">
      <h1 style={{textAlign: 'center'}}>
        {this.props.number}
      </h1>
    </div>
    )
  }
}
export default Count;