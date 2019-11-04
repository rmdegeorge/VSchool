import React, { Component } from 'react';
import Axios from 'axios';


class ColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randColor: []
    };
  };

  componentDidMount() {
    Axios.get('http://www.colr.org/json/color/random').then(results => {
      console.log(results)
      this.setState({
        randColor: results.data
      })
    }).catch(error => {
      console.log(error)
    });
  };

  render() {
    return (
      <div className="ColorComponent">

      </div>
    );
  }
}

export default ColorComponent;