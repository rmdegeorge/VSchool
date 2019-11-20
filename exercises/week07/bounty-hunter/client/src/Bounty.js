import React from 'react';
import styled from 'styled-components';
import {withData} from './DataProvider';

const BountyContainer = styled.div`
  padding: 20px;
  border: 2px solid #000000;
  border-radius: 25px;
  width: 100%;
`;

class Bounty extends React.Component {
  render() {
    const {first_name, last_name, living, type, _id} = this.props.info
    return (
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
          {`Living: ${living ? "Alive" : "Deceased"}`}
        </div>
        <button onClick={() => this.props.deleteBounty(_id)}>Delete</button>
      </BountyContainer>
    )
  }
}
export default withData(Bounty);
