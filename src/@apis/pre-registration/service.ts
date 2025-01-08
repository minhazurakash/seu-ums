import { AxiosInstance } from '@lib/config';
import { ErrorHandler } from '@lib/utils';
import { IPreRegistrationResponse } from './interfaces';

const END_POINT: string = 'academic/v/2.0.0/preregistration';

export const PreRegistrationService = {
  NAME: END_POINT,
  async filter(): Promise<IPreRegistrationResponse> {
    try {
      const data = await AxiosInstance.get(`${END_POINT}/offered-section`);
      return Promise.resolve(data?.data);
    } catch (error) {
      throw ErrorHandler(error);
    }
  },
};
