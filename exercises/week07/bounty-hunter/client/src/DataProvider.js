import React from 'react';
import axios from 'axios';
const {Provider,Consumer} = React.createContext();

class DataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounties = []
    };
  };
  render() {
    return (
      <Provider value={{
        ...this.state,

      }}>
        {this.props.children}
      </Provider>
    )
  }
};

export default DataProvider;

export function withData(Comp) {
  <Consumer>
    {value => <Comp {...value}{...props} />}
  </Consumer>
}
