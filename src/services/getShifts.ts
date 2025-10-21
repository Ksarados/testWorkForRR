import { getRequest } from '../utils/apiFetch';
import { URLs } from '../constants/urls';
import { GetShiftsResponse } from '../types/shifts';

export const getShifts = async (): Promise<GetShiftsResponse> => {
  try {
    const response = await getRequest<GetShiftsResponse>(URLs.shifts);
    return response;
  } catch (error) {
    console.log(error);
    return { data: [], status: 500 };
  }
};
