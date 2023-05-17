export type ColorMode = 'light' | 'dark';

declare module '@emotion/react' {
  export interface ThemeContextType {
    colorMode: ColorMode;
    setColorMode: () => void;
  }

  export interface ThemeType {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    icon: string;
  }
}
