import { InternalAxiosRequestConfig } from 'axios';

export const RequestInterceptor: [
  (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig,
  (error: unknown) => Promise<never>
] = [
    (config: InternalAxiosRequestConfig) => {
      config.headers.Accept = "application/json";
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: unknown) => Promise.reject(error),
];
