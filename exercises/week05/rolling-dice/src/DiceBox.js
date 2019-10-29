import React, {Component} from 'react';
import Die from './Die';
import RollButton from './RollButton';

class DiceBox extends Component {
  constructor() {
    super();
  }
  roll = () => {
    let randNum = 1+ Math.floor(Math.random()*6)
    if (randNum === 1) {
      // render 1 spot

    } else if (randNum === 2) {
      // render 2 spots

    } else if (randNum === 3) {
      // render 3 spots

    } else if (randNum === 4) {
      // render 4 spots

    } else if (randNum === 5) {
      // render 5 spots

    } else {
      // render 6 spots
      
    }
  }
  render(){
    return (
      <div className="DiceBox">
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <RollButton onClick={this.roll}/>
      </div>
    );
  }
}

export default DiceBox;
