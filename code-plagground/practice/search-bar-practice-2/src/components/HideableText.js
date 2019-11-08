import React, { Component } from 'react';

class HideableText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    }
  }
  toggleIsHidden = () => {
    this.setState((prevState) => ({
      isHidden: !prevState.isHidden,
    }))
  }
  render() {
    return (
      <div>
        <button onClick={() => this.toggleIsHidden()}>Toggle</button>
        {!this.state.isHidden && this.props.text}
      </div>
    );
  }
}

export default HideableText;