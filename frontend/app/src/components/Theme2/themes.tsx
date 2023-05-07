interface ThemeType {
  primary: string;
  secundary: string;
  background: string;
  text: string;
}

const lightTheme: ThemeType = {
  primary: '#ffffff',
  secundary: '#ffffff',
  background: '#e4e9f7',
  text: '#191919',
};

const darkTheme: ThemeType = {
  primary: '#ffffff',
  secundary: '#ffffff',
  background: '#0a1929',
  text: 'white',
};

export const getTheme = (colorMode: string): ThemeType => {
  switch (colorMode) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};
