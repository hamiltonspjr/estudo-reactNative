/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Text preset="headingLarge" color="primary" black>
        Olá
      </Text>
      <Text mt="s8">Digite seu e-mail e senha para entrar</Text>
    </ThemeProvider>
  );
}

export default App;
