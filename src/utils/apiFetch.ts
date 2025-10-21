import axios, { AxiosRequestConfig } from 'axios';
import { URLs } from '../constants/urls';

const instance = axios.create({
  baseURL: URLs.BASE_URL,
});

export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.get(url, config);
};
