import React, { useEffect, useState } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import HomeScreen from '../screens/Home';
import { InformationScreen } from '../screens/Information';
import { getShifts } from '../services/getShifts';
import { ShiftsData } from '../types/shifts';
import { locationKrasnodar } from '../constants/defaultValues';

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

export default observer(function MainNavigator() {
  const [shifts, setShifts] = useState<ShiftsData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getShifts(
          locationKrasnodar.latitude,
          locationKrasnodar.longitude
        );
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
});
