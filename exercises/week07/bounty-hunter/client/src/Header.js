import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header(props) {
  return (
    <HeaderContainer>
      <h1> Star Wars Bounty List</h1>
    </HeaderContainer>
  )
}
