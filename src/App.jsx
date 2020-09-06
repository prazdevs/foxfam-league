import { Container, Flex } from '@chakra-ui/core';
import React from 'react';

import Navbar from './components/navbar/Navbar';
import Routes from './Routes';

function App() {
  return (
    <Container centerContent>
      <Navbar />
      <Flex mt="55px">
        <Routes />
      </Flex>
    </Container>
  );
}

export default App;
