import { notification } from 'antd';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { IBaseResponse } from '../../interfaces';
import { cookies } from '@lib/utils/_cookies';

export const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  timeout: 60000,
});
AxiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers['Authorization'] = `Bearer ${cookies?.getToken()}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
AxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError<IBaseResponse>) => {
    if (error?.response?.status === 401) {
      error.response?.data?.errorMessages?.map((x: string) => {
        notification.error({
          message: x,
          duration: 1,
        });
      });
      cookies.removeToken();
    } else if (error.response?.data?.success === false) {
      error.response?.data?.errorMessages?.map((x: string) => {
        // notification.error({
        //   message: x,
        //   duration: 1,
        // });
      });
    }
    return error?.response;
  },
);
