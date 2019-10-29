import React, {Component} from 'react';
import Button from './Button';

class ButtonContainer extends Component {
  constructor() {
    super();
    this.state ={
      buttons: ['Black/White', 'Top Half Purple', 'Bottom Left Blue', 'Bottom Right Blue', 'Top Left', 'Top Right', 'Bottom Left', 'Bottom Right']
    }
  }
  handleBlackWhite = () => {
    
  }
  render() {
    const displayButtons = this.state.buttons.map((button, i) => 
      <Button text={button} />
    )
    return (
      <div className="ButtonContainer">
      {displayButtons}
      </div>
    )
  }
}

export default ButtonContainer;