import React, {Component} from 'react';

class Spot extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="Spot" style={{top: this.props.positionX, left: this.props.positionX}}>
      </div>
    );
  }
}

export default Spot;
