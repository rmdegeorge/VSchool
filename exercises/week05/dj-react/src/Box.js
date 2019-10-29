import React, {Component} from "react";

class Box extends Component{
  constructor() {
    super();
    
  } 
  render() {
    return (
      <div className="Box" style={{backgroundColor: this.props.color}}>
        I'm a Box
      </div>
    )
  } 
}

export default Box;