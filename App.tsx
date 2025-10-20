import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  
  return(
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <MainNavigator />
    </NavigationContainer>
  )
}
