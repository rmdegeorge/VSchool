import React from 'react';


export default class Toggler extends React.Component {
  constructor() {
    super()
    this.state = {
      on: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(({ on }) => ({ on: !on }))
  }
  render() {
    const { on } = this.state;
    const { component , ...props } = this.props;
    const C = component;
    return (
      <C on={on}toggle={this.toggle}{...props}/>
    )
  }
}

export const withToggler = C => <Toggler component={C}{...props} />