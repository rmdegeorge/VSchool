import React, {Component} from 'react';
import Die from './Die';
import RollButton from './RollButton';

class DiceBox extends Component {
  constructor() {
    super();
    this.state = {
      dieCurrentNums: [1, 1, 1, 1, 1]
    }
  }
  randNum = () => {
    return (1+ Math.floor(Math.random()*6));
  }
  roll = () => {
    this.setState((prevState) => {
      const dieNewNums = []
      for (let i = 0; i < 5; i++) {
        dieNewNums.push(this.randNum())
      }
      return {dieCurrentNums: dieNewNums};
    })
  }
  render(){
    const displayDice = [];
    for (let i = 0; i < 5; i++) {
      displayDice.push(<Die spots={this.state.dieCurrentNums[i]} key={i}/>)
    } 
    return (
      <div className="DiceBox">
        {displayDice}
        <RollButton onClick={this.roll}/>
      </div>
    );
  }
}

export default DiceBox;
