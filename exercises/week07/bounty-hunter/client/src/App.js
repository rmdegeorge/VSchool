import React from 'react';
import styled from 'styled-components';
import {withData} from './DataProvider';

import GlobalStyle from './theme/GlobalStyle';
import Header from './Header';
import Body from './Body';

const AppContainer = styled.div`

`;

function App(props) {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Body />
    </AppContainer>
  );
};

export default withData(App);
