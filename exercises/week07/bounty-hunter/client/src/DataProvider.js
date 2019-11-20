import React from 'react';
import axios from 'axios';
const {Provider,Consumer} = React.createContext();

class DataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounties: []
    };
  };

  getBounties = () => {
    axios.get('/bounty')
    .then(res => {
      this.setState({
        bounties: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <Provider value={{
        ...this.state,
        getBounties: this.getBounties,

      }}>
        {this.props.children}
      </Provider>
    )
  }
};

export default DataProvider;

export function withData(Comp) {
  return props =>
    <Consumer>
      {value => <Comp {...value}{...props} />}
    </Consumer>
};
