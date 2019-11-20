import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #000000;
  color: #ffffff;
`;

export default function Header(props) {
  return (
    <HeaderContainer>
      I'm the header.
    </HeaderContainer>
  )
}
