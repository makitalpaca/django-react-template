import { type ThemeType } from '@emotion/react';
import { type ColorMode } from './types';

const lightTheme: ThemeType = {
  primary: '#2064bc',
  secondary: '#f2f2f2',
  background: '#c5c5c5',
  text: '#0e1013',
  icon: '#0e1013',
  toggle_background: '#333333',
  toggle_foreground: '#efefef',
};

const darkTheme: ThemeType = {
  primary: '#6aa9e8',
  secondary: '#17181b',
  background: '#0e1013',
  text: '#e1e1e1',
  icon: '#e1e1e1',
  toggle_background: '#efefef',
  toggle_foreground: '#333333',
};

export const getTheme = (colorMode: ColorMode): ThemeType => {
  switch (colorMode) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};
