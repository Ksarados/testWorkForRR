import axios from 'axios';
import { URLs } from '../constants/urls';

type Address = {
  city?: string;
  town?: string;
  village?: string;
  [key: string]: unknown;
};

type Response = {
  address: Address;
  [key: string]: unknown;
};

export async function getCityFromCoordsOSM(
  lat: number,
  lon: number
): Promise<string | null> {
  try {
    const { data } = await axios.get<Response>(URLs.city, {
      params: {
        format: 'json',
        lat,
        lon,
      },
      headers: {
        'User-Agent': 'ReactNativeApp',
      },
    });

    return (
      data.address.city || data.address.town || data.address.village || null
    );
  } catch (error) {
    console.error('Error fetching city from OSM:', error);
    return null;
  }
}
