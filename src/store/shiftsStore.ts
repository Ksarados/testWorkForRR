import { makeAutoObservable } from 'mobx';
import { ShiftsData } from '../types/shifts';

class ShiftsStore {
  shifts: ShiftsData[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  addShifts = (shifts: ShiftsData[]) => {
    this.shifts = shifts;
  };
}

export const shiftsStore = new ShiftsStore();
