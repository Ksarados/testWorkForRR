import { getRequest } from '../utils/apiFetch';
import { URLs } from '../constants/urls';
import { GetShiftsResponse } from '../types/shifts';

export const getShifts = async (
  latitude?: number,
  longitude?: number
): Promise<GetShiftsResponse> => {
  try {
    const response = await getRequest<GetShiftsResponse>(URLs.shifts, {
      params: {
        latitude,
        longitude,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return { data: { data: [] }, status: 500 };
  }
};
