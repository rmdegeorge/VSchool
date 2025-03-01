import React from 'react';
import styled from 'styled-components';

import Form from './Form';
import BountyList from './BountyList';

const BodyContainer = styled.div`
  width: 75%;
  margin: 0 auto 0 auto;
`;

export default class Body extends React.Component {
  render() {
    return (
      <BodyContainer>
        <Form type='add' />
        <BountyList />
      </BodyContainer>
    )
  }
}
