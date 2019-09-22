import React from 'react';
import styled from 'styled-components';

import Main from '../Main/Main';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

function App() {
  return (
    <Container className="app">
      <Main/>
    </Container>
  );
}

export default App;
