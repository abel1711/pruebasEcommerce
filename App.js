import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DrawerApp } from './src/navegacion/Drawer.js';
import { StatusBar, Text, View } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor='#101010' />
      <DrawerApp />
    </NavigationContainer>
  )
};

export default App;
