import Geolocation from 'react-native-geolocation-service';
// eslint-disable-next-line react-native/split-platform-components
import { PermissionsAndroid, Platform } from 'react-native';

//запрос разрешения для андроид
async function requestLocationPermission() {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Доступ к геолокации',
          message:
            'Приложению нужен доступ к вашей геолокации, чтобы определить город',
          buttonPositive: 'Разрешить',
          buttonNegative: 'Отмена',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Разрешение на геолокацию выдано');
        return true;
      } else {
        console.log('Разрешение на геолокацию отклонено');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true;
}

//получение координат
export async function getCurrentLocation() {
  const hasPermission = await requestLocationPermission();
  if (!hasPermission) return null;

  return new Promise<{ latitude: number; longitude: number }>(
    (resolve, reject) => {
      Geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => reject(error),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  );
}
