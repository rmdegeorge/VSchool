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

  getAllBounties = () => {
    axios.get('/bounty/')
    .then(res => {
      // console.log("\n\ngetAllBounties RESPONSE")
      // console.log(res.data);
      this.setState({
        bounties: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  };

  addNewBounty = (newBounty) => {
    axios.post('/bounty/', newBounty)
    .then((res) => {
      this.setState((prev) => {
        return {
          bounties: [...prev.bounties, res.data]
        };
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };

  deleteBounty = (id) => {
    axios.delete(`/bounty/${id}`)
    .then((res) => {
      this.setState((prev) => {
        return {
          bounties: prev.bounties.filter(bounty => bounty._id !== id)
        }
      })
    })
    .catch((error) => {
      console.log(error);
    })
  };

  render() {
    return (
      <Provider value={{
        ...this.state,
        getAllBounties: this.getAllBounties,
        addNewBounty: this.addNewBounty,
        deleteBounty: this.deleteBounty,

      }}>
        {this.props.children}
      </Provider>
    );
  };
};

export default DataProvider;

export function withData(Comp) {
  return props =>
    <Consumer>
      {value => <Comp {...value}{...props} />}
    </Consumer>
};
