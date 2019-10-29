import React, {Component} from 'react';
import Spot from './Spot'

class Die extends Component {
  constructor() {
    super();
  }
  
  render(){
    // const displaySpots = 
    return (
      <div className="Die">
        <h1>{this.props.spots}</h1>
      </div>
    );
  }
}

export default Die;
