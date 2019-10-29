import React, {Component} from 'react';
import Box from './Box';
import Button from './Button';

class BoxContainer extends Component {
  constructor() {
    super();
    this.state = {
      colors: ['white','white','white','white'],
      buttons: ['Black/White', 'Top Half Purple', 'Bottom Left Blue', 'Bottom Right Blue', 'Top Left', 'Top Right', 'Bottom Left', 'Bottom Right']
    }
  }
  handleBlackWhite = () => {
    this.setState((prevState) => {
      
    })
  }
  render() {
    const displayBoxes = this.state.colors.map((color,i) => 
      <Box color={color} />
    );
    const displayButtons = this.state.buttons.map((button, i) => 
      <Button text={button} />
    );

    return (
      <div className="BoxContainer">
        {displayBoxes}
        <div className="ButtonContainer">
          {displayButtons}
        </div>
      </div>
    )
  }
}

export default BoxContainer;