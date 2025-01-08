import { AxiosInstance } from '@lib/config';
import { ErrorHandler } from '@lib/utils';
import { ILoginCreate, ILoginResponse } from './interfaces';

const END_POINT: string = '/sign-in';

export const AuthService = {
  NAME: END_POINT,
  async login(payload: ILoginCreate): Promise<ILoginResponse> {
    try {
      const data = await AxiosInstance.post(END_POINT, payload);
      return Promise.resolve(data?.data);
    } catch (error) {
      throw ErrorHandler(error);
    }
  },
};
