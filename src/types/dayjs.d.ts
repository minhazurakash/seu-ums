import 'dayjs';
declare module 'dayjs' {
  interface Dayjs {
    fromNow();
  }
}

import 'axios';
declare module 'axios' {
  interface AxiosRequestConfig {
    api?: string;
  }
}
