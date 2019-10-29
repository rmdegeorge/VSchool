import React, {Component} from 'react';
import Spot from './Spot'

class Die extends Component {
  constructor() {
    super();
    this.state = {
      dieNum: [1,2,3,4,5,6],
      positionX: 20,
      positionY: 20
    }
  }
  showOneSpot = () => {

  }
  showTwoSpots = () => {

  }
  showThreeSpots = () => {

  }
  showFourSpots = () => {
    
  }
  showFiveSpots = () => {
    
  }
  showSixSpots = () => {
    
  }

  render(){
    return (
      <div className="Die">
        <Spot positionX={this.state.positionX} positionY={this.state.positionY}/>
      </div>
    );
  }
}

export default Die;
