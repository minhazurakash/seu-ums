import { IBaseEntity, IBaseResponse } from '@lib/interfaces';

export interface ILogin extends IBaseEntity {
  changePasswordOnNextSignIn: boolean;
  email: string;
  graduated: string | null; // null or a string if a graduation date is added later
  mfaEnabled: boolean;
  name: string;
  rememberMe: boolean;
  status: 'Online' | 'Offline'; // Assuming it's a string with limited options
  token: string;
  type: 'STUDENT' | 'TEACHER' | 'ADMIN'; // Add more roles if applicable
  uiLayout: 'classy' | 'compact'; // Add more layouts if applicable
  uiScheme: 'auto' | 'light' | 'dark'; // Assuming standard UI schemes
  uiTheme: string; // Generic string for themes
  username: string;
}

export interface ILoginCreate {
  username?: string;
  timeZone?: string;
  rememberMe: boolean;
  password: string;
}

export interface ILoginResponse extends IBaseResponse {
  data: ILogin;
}
