// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
  '3xl': '1800px',
};

// 3. extend the theme
export const theme = extendTheme({ breakpoints });
