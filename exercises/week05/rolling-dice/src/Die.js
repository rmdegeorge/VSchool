import React, {Component} from 'react';
import Spot from './Spot'

class Die extends Component {
  constructor() {
    super();
  }
  
  render(){
    if (this.props.spots === 1) {
      const displaySpots = [];
      for (let i = 1; i<= this.props.spots; i++) {
        displaySpots.push(<Spot />); //give each spot a position
      }
    } else if (this.props.spots === 2) {

    } else if (this.props.spots === 3) {

    } else if (this.props.spots === 4) {

    } else if (this.props.spots === 5) {

    } else if (this.props.spots === 6) {

    }   
    return (
      <div className="Die">
        <h1>{this.props.spots}</h1>
        {displaySpots}
      </div>
    );
  }
}

export default Die;
