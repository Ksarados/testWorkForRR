import React, { useEffect, useState } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import { InformationScreen } from '../screens/Information';
import { getShifts } from '../services/getShifts';
import { ShiftsData } from '../types/shifts';
import { location } from '../constants/defaultValues';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  const [shifts, setShifts] = useState<ShiftsData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getShifts(location.latitude, location.longitude);
        if (response && Array.isArray(response?.data?.data)) {
          setShifts(response.data.data);
        } else {
          setShifts([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, []);

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Details' component={InformationScreen} />
    </Stack.Navigator>
  );
}
