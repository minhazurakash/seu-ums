import React from 'react';
import { ConfigProvider } from 'antd';

const withTheme = (node: JSX.Element) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#17222B',
        fontFamily: 'var(--font-heebo)',
        colorLink: 'none',
        colorLinkHover: '#ee4023',
        borderRadius: 5,
      },
      components: {
        Menu: {
          itemActiveBg: '#ee4023',
        },
        Button: {
          borderRadius: 4,
        },
        Grid: {
          screenXSMin: 320,
          screenSMMin: 640,
          screenMDMin: 768,
          screenLGMin: 1024,
          screenXLMin: 1280,
          screenXXLMin: 1536,
        },
      },
    }}
  >
    {node}
  </ConfigProvider>
);

export default withTheme;
