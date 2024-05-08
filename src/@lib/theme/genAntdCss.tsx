import fs from 'fs';
import withTheme from './theme';
import { extractStyle } from '@ant-design/static-style-extract';

const outputPath = './src/@assets/styles/css/antd.min.css';

const css = extractStyle(withTheme);

fs.writeFileSync(outputPath, css);

console.log(`🎉 Antd CSS generated at ${outputPath}`);
