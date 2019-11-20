import React from 'react';
import styled from 'styled-components';
import {withData} from './DataProvider'

import Bounty from './Bounty';

const BountyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BountiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 20px;
  width: 100%;
`;

class BountyList extends React.Component {
  componentDidMount() {
    this.props.getAllBounties();
  }
  render() {
    console.log(this.props.bounties);
    const displayBounties = this.props.bounties.map((bounty) => <Bounty key={bounty._id} info={bounty}/>)

    return (
      <BountyListContainer>
        <h2>Bounties</h2>
        <BountiesContainer>
          {displayBounties}
        </BountiesContainer>
      </BountyListContainer>


    )
  }
}

export default withData(BountyList);
