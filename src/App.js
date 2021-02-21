import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import LoginPage from './pages/login';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
