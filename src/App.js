import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import LoginPage from './pages/login';
import UsersPage from './pages/users';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <UsersPage />
      {/* <LoginPage /> */}
    </ChakraProvider>
  );
}

export default App;
