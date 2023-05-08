// // themeContext.ts
// // React useContextで現在のモードを管理する
// import { type FC, createContext, useContext } from 'react';

// interface ThemeContextType {
//   colorMode: string;
//   setColorMode: () => void;
// }

// // コンテキストのデフォルト値
// const defaultContext: ThemeContextType = {
//   colorMode: 'light',
//   setColorMode: () => {}, // eslint-disable-line
// };

// // コンテキスト作成
// export const ThemeContext = createContext<ThemeContextType>(defaultContext);
// export const useTheme = () => useContext(ThemeContext);
// // eslint-disable-line

// import { createContext } from 'react';
import { type FC, createContext, useContext } from 'react';

interface ThemeContextType {
  colorMode: string;
  setColorMode: () => void;
}
// type ThemeContextType = {
//   colorMode: 'light' | 'dark';
//   setColorMode: () => void;
// };

// コンテキストのデフォルト値
const defaultContext: ThemeContextType = {
  colorMode: 'light',
  setColorMode: () => {}, // eslint-disable-line
};

// interface Props {}

// コンテキスト作成
export const ThemeContext = createContext<ThemeContextType>(defaultContext);
export const useTheme: FC = () => useContext(ThemeContext);

// export const useTheme: FC<Props> = (): JSX.Element => useContext(ThemeContext);
// eslint-disable-line

// import { type FC, createContext, useContext } from 'react';

// // コンテキストのデフォルト値
// const defaultContext = {
//   colorMode: 'light',
//   setColorMode: () => {}, // eslint-disable-line
// };

// // コンテキスト作成
// export const ThemeContext = createContext(defaultContext);
// export const useTheme: FC = () => useContext(ThemeContext);
// // eslint-disable-line
