export const ENV_DEVELOPMENT = 'development';
export const ENV_PRODUCTION = 'production';
export const ENV_STAGING = 'staging';

export const ENV = {
  apiUrl: process.env.NEXT_PUBLIC_API_END_POINT,
  appMode: process.env.NEXT_PUBLIC_APP_MODE,
  appHostUrl: process.env.NEXT_PUBLIC_APP_HOST_URL,
  storagePrefix: process.env.NEXT_PUBLIC_STORAGE_PREFIX,

  isStaging: process.env.NEXT_PUBLIC_APP_MODE === ENV_STAGING,
  isProduction: process.env.NEXT_PUBLIC_APP_MODE === ENV_PRODUCTION,
  isDevelopment: process.env.NEXT_PUBLIC_APP_MODE === ENV_DEVELOPMENT,
};
