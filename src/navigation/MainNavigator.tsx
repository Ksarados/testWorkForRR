import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import { InformationScreen } from '../screens/Information';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={InformationScreen} />
    </Stack.Navigator>
  );
}