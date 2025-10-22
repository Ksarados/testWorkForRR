import { makeAutoObservable } from 'mobx';
import { locationIvanovo } from '../constants/defaultValues';
import { locationKrasnodar } from '../constants/defaultValues';

class LocationStore {
  location = {
    latitude: locationKrasnodar.latitude,
    longitude: locationKrasnodar.longitude,
  };
  constructor() {
    makeAutoObservable(this);
  }

  setLocation = (latitude: number, longitude: number) => {
    this.location.latitude = latitude;
    this.location.longitude = longitude;
  };
}

export const locationStore = new LocationStore();
