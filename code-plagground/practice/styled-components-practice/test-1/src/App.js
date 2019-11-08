import React from 'react';
import styled from 'styled-components';

import Header from './Components/Header';
import Profile from './Components/Profile';
import GlobalStyle from './theme/globalStyle';

const AppWrapper = styled.div`
  background-color: #fafafa;
`;
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Header />

        <Profile />
      </AppWrapper>
    </Fragment>
  );
}

export default App;
