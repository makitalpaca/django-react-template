export type valueOf<T> = T[keyof T];

export const THEME_KEY = {
  light: 'light',
  dark: 'dark',
} as const;

export type ThemeKey = valueOf<typeof THEME_KEY>;

type Theme = {
  base: {
    color: string;
    background: string;
  };
};

const getCssVariableValue = <N extends string, V extends string>(
  nameSpace: N,
  valueName: V
): `var(--${N}-${V})` => `var(--${nameSpace}-${valueName})` as const;

export const theme: Theme = {
  base: {
    color: getCssVariableValue('base', 'color'),
    background: getCssVariableValue('base', 'background'),
  },
};

const LIGHT_THEME: Theme = {
  base: {
    color: '#191919',
    // background: 'white',
    background: '#e0e0e0',
  },
};

const DARK_THEME: Theme = {
  base: {
    color: 'white',
    // background: '#101010',
    background: '#0a1929',
  },
};

const convertThemeVariables = (colorTheme: Theme): string =>
  Object.entries(colorTheme)
    .flatMap(([nameSpace, colorValues]) => {
      return Object.entries(colorValues).map(
        ([name, value]) => `--${nameSpace}-${name}: ${value};`
      );
    })
    .join('\n');

export const lightThemeCssVariables = convertThemeVariables(LIGHT_THEME);
export const darkThemeCssVariables = convertThemeVariables(DARK_THEME);

export const THEME_STORAGE_KEY = 'themeKey';

export const initTheme = (): void => {
  const body = document.body;
  const colorTheme = globalThis.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? THEME_KEY.dark
    : THEME_KEY.light;
  body.dataset.theme = colorTheme;
};

export const setTheme = (themeKey: ThemeKey): void => {
  document.body.dataset.theme = themeKey;
};
