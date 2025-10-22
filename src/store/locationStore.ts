import { makeAutoObservable } from 'mobx';
import { locationKrasnodar } from '../constants/defaultValues';

class LocationStore {
  location = {
    latitude: locationKrasnodar.latitude,
    longitude: locationKrasnodar.longitude,
  };
  city: string | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  setLocation = (latitude: number, longitude: number) => {
    this.location.latitude = latitude;
    this.location.longitude = longitude;
  };

  setCity = (city: string) => {
    this.city = city;
  };
}

export const locationStore = new LocationStore();
