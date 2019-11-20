import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import GlobalStyle from './theme/GlobalStyle';

const AppContainer = styled.div`

`;

function App(props) {

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
    </AppContainer>
  );
};

export default App;
