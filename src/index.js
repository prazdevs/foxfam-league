import 'typeface-quicksand';

import { ChakraProvider, extendTheme } from '@chakra-ui/core';
import theme from './theme';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider
      resetCSS
      theme={extendTheme({ config: { useSystemColorMode: true }, ...theme })}
    >
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
