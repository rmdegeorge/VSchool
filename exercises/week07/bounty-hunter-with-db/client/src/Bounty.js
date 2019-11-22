import React from 'react';
import styled from 'styled-components';
import {withData} from './DataProvider';

import Form from './Form';

const BountyContainer = styled.div`
  padding: 10px;
  border: 2px solid #000000;
  border-radius: 25px;
  width: 100%;
`;

class Bounty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editToggled: false
    };
  };

  toggleEdit = () => {
    // console.log(`You toggled Edit`)
    // console.log(this.state)
    this.setState((prev) => {
      return {
        editToggled: !prev.editToggled
      };
    });
  }

  render() {
    const {first_name, last_name, living, type, _id} = this.props.info
    return (

        this.state.editToggled

        ?

        <BountyContainer>
          <Form type="edit" bountyInfo={this.props.info} toggleEdit={this.toggleEdit} />
        </BountyContainer>

        :

        <BountyContainer>
          <div>
            {`First Name: ${first_name}`}
          </div>
          <div>
            {`Last Name: ${last_name}`}
          </div>
          <div>
            {`Type: ${type}`}
          </div>
          <div>
            {`Dead or Alive: ${living}`}
          </div>
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={() => this.props.deleteBounty(_id)}>Delete</button>
        </BountyContainer>

    );
  };
};

export default withData(Bounty);
