import { makeAutoObservable } from 'mobx';
import { locationIvanovo } from '../constants/defaultValues';

class LocationStore {
  location = {
    latitude: locationIvanovo.latitude,
    longitude: locationIvanovo.longitude,
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
