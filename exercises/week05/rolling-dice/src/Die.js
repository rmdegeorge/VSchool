import React, {Component} from 'react';
import Spot from './Spot'

class Die extends Component {
  constructor() {
    super();
  }
  
  render(){
    const displaySpots = [];
    if (this.props.spots === 1) {
      displaySpots.push(<Spot key={1} positionX="40px" positionY="40px" />);
    } else if (this.props.spots === 2) {
      displaySpots.push(<Spot key={2} positionX="20px" positionY="20px" />);
      displaySpots.push(<Spot key={3} positionX="60px" positionY="40px" />);
    } else if (this.props.spots === 3) {
      displaySpots.push(<Spot key={4} positionX="20px" positionY="20px" />);
      displaySpots.push(<Spot key={5} positionX="40px" positionY="40px" />);
      displaySpots.push(<Spot key={6} positionX="60px" positionY="60px" />);
    } else if (this.props.spots === 4) {
      displaySpots.push(<Spot key={7} positionX="20px" positionY="20px"/>);
      displaySpots.push(<Spot key={8} positionX="20px" positionY="60px"/>);
      displaySpots.push(<Spot key={9} positionX="60px" positionY="20px"/>);
      displaySpots.push(<Spot key={10} positionX="60px" positionY="60px"/>);
    } else if (this.props.spots === 5) {
      displaySpots.push(<Spot key={11} positionX="20px" positionY="20px"/>);
      displaySpots.push(<Spot key={12} positionX="20px" positionY="60px"/>);
      displaySpots.push(<Spot key={13} positionX="40px" positionY="40px"/>);
      displaySpots.push(<Spot key={14} positionX="60px" positionY="20px"/>);
      displaySpots.push(<Spot key={15} positionX="60px" positionY="60px"/>);
    } else if (this.props.spots === 6) {
      displaySpots.push(<Spot key={16} positionX="20px" positionY="20px"/>);
      displaySpots.push(<Spot key={17} positionX="20px" positionY="40px"/>);
      displaySpots.push(<Spot key={18} positionX="20px" positionY="60px"/>);
      displaySpots.push(<Spot key={19} positionX="60px" positionY="20px"/>);
      displaySpots.push(<Spot key={20} positionX="60px" positionY="40px"/>);
      displaySpots.push(<Spot key={21} positionX="60px" positionY="60px"/>);
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
