import axios from 'axios';
import { RequestInterceptor } from './interceptor';

const API_END_POINT = import.meta.env.VITE_API_END_POINT;

const getClient = async () => {
  const axiosInstance = axios.create({
    baseURL: API_END_POINT,
    headers: {
      'Content-Type': 'application/json'
    },
  });

  axiosInstance.interceptors.request.use(
    ...RequestInterceptor
  );

  return axiosInstance;
};

export default getClient;
