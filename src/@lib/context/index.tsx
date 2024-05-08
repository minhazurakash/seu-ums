import withTheme from '@lib/theme/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';
import { queryClient } from '../config';

type AppProviderProps = {
  nextFont?: NextFont;
  children: React.ReactNode;
};
export const AppProvider = ({ nextFont, children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider getPopupContainer={() => document.getElementById('__main')}>
        {withTheme(
          <main id="__main" className={nextFont?.className} role="main">
            {children}
          </main>,
        )}
      </ConfigProvider>
    </QueryClientProvider>
  );
};
