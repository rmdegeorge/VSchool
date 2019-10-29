import React, {Component} from 'react';
import Box from './Box';
import Button from './Button';

class BoxContainer extends Component {
  constructor() {
    super();
    this.state = {
      colors: ['white','white','white','white'],
      buttonTexts: ['Black/White', 'Top Half Purple', 'Bottom Left Blue', 'Bottom Right Blue', 'Top Left', 'Top Right', 'Bottom Left', 'Bottom Right']
    }
  }
  handleBlackWhite = () => {
    this.setState((prevState) => {
      let newColors;      
      if (prevState.colors[0] !== 'white') {
        newColors = {colors: ['white','white','white','white']}
      } else {
        newColors = {colors: ['black','black','black','black']}
      }
      return newColors;
    })
  }
  handleTopHalfPurple = () => {
    this.setState((prevState) => {
      let newColors = prevState.colors
      newColors[0] = 'purple';
      newColors[1] = 'purple';
      return newColors;
    })
  }
  handleBottomLeftBlue = () => {
    this.setState((prevState) => {
      let newColors = prevState.colors
      newColors[2] = 'blue';
      return newColors;
    })
  }
  handleBottomRightBlue = () => {
    this.setState((prevState) => {
      let newColors = prevState.colors
      newColors[3] = 'blue';
      return newColors;
    })
  }
  handleTopLeft = () => {
    this.setState((prevState) => {
      let newColors = prevState.colors
      newColors[0] = 'green';
      return newColors;
    })
  }
  handleTopRight = () => {
    this.setState((prevState) => {
      let newColors = prevState.colors
      newColors[1] = 'green';
      return newColors;
    })
  }
  handleBottomLeft = () => {
    this.setState((prevState) => {
      let newColors = prevState.colors
      newColors[2] = 'green';
      return newColors;
    })
  }
  handleBottomRight = () => {
    this.setState((prevState) => {
      let newColors = prevState.colors
      newColors[3] = 'green';
      return newColors;
    })
  }

  render() {
    const displayBoxes = this.state.colors.map((color,i) => 
      <Box color={color} key={color + i}/>
    );
    const displayButtons = this.state.buttonTexts.map((text, i) => {
      let key = text + i;
      if (text === 'Black/White'){
        return (
          <Button onClick={this.handleBlackWhite} text={text} key={key} />
          )
      } else if (text === 'Top Half Purple'){
        return (
          <Button onClick={this.handleTopHalfPurple} text={text} key={key} />
          )
      } else if (text === 'Bottom Left Blue'){
        return (
          <Button onClick={this.handleBottomLeftBlue} text={text} key={key} />
          )
      } else if (text === 'Bottom Right Blue'){
        return (
          <Button onClick={this.handleBottomRightBlue} text={text} key={key} />
          )
      } else if (text === 'Top Left'){
        return (
          <Button onClick={this.handleTopLeft} text={text} key={key} />
          )
      } else if (text === 'Top Right'){
        return (
          <Button onClick={this.handleTopRight} text={text} key={key} />
          )
      } else if (text === 'Bottom Left'){
        return (
          <Button onClick={this.handleBottomLeft} text={text} key={key} />
          )
      } else if (text === 'Bottom Right'){
        return (
          <Button onClick={this.handleBottomRight} text={text} key={key} />
          )
      }
      
    });


    return (
      <div className="BoxContainer">
        {displayBoxes}
        <div className="ButtonContainer">
        {/* <Button onClick={this.handleBlackWhite} text="Black/White" /> */}
          {displayButtons}
        </div>
      </div>
    )
  }
}

export default BoxContainer;