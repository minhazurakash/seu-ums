import { ENV } from '.environments';
import '@assets/styles/main.scss';
import AppLayout from '@components/Layout/AppLayout';
import DayjsConfig from '@lib/config/dayjs.config';
import { publicPaths } from '@lib/constant';
import { AppProvider } from '@lib/context';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import NextNProgress from 'nextjs-progressbar';

import { Heebo } from 'next/font/google';
const heebo = Heebo({
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-heebo',
});

function App({ Component, pageProps, router }: AppProps) {
  DayjsConfig();
  return (
    <AppProvider nextFont={heebo}>
      <NextNProgress color="#EE4023" height={3} />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppProvider>
  );
}

export default App;
