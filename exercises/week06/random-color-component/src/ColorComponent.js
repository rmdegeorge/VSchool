import React, { Component } from 'react';
import Axios from 'axios';


class ColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randColor: ''
    };
  };

  componentDidMount() {
    Axios.get('http://www.colr.org/json/colors/random/1').then(results => {
      console.log('Results: ')
      console.log(results)
      this.setState({
        randColor: results.data.colors[0].hex
      })
    }).catch(error => {
      console.log(error)
    });
  };

  render() {
    console.log('state.randColor: ')
    console.log(this.state.randColor)

    return (
      <div className="ColorComponent" style={{backgroundColor: `#${this.state.randColor}`}}>
      </div>
    );
  }
}

export default ColorComponent;

