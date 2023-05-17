import { createContext, useContext } from 'react';
import { type ThemeContextType } from '@emotion/react';

const defaultContext: ThemeContextType = {
  colorMode: 'light',
  setColorMode: () => {},
};

// コンテキスト作成
export const ThemeContext = createContext<ThemeContextType>(defaultContext);
export const useTheme = () => useContext(ThemeContext);
