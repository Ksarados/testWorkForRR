import { useEffect } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import HomeScreen from '../screens/Home';
import { InformationScreen } from '../screens/Information';
import { getShifts } from '../services/getShifts';
import { shiftsStore } from '../store/shiftsStore';
import { locationStore } from '../store/locationStore';
import { ShiftsData } from '../types/shifts';
import { getCurrentLocation } from '../utils/location';
import { getCityFromCoordsOSM } from '../services/getCity';

export type RootStackParamList = {
  Home: undefined;
  Details: { item: ShiftsData };
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
  useEffect(() => {
    const loadData = async () => {
      try {
        const coords = await getCurrentLocation();
        if (coords) {
          locationStore.setLocation(coords.latitude, coords.longitude);
          const city = await getCityFromCoordsOSM(
            coords.latitude,
            coords.longitude
          );
          if (city) {
            locationStore.setCity(city);
          }
        }

        const response = await getShifts(
          locationStore.location.latitude,
          locationStore.location.longitude
        );
        if (response && Array.isArray(response?.data?.data)) {
          shiftsStore.addShifts(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Details' component={InformationScreen} />
    </Stack.Navigator>
  );
});
