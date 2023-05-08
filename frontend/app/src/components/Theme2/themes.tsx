interface ThemeType {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  icon: string;
}

const lightTheme: ThemeType = {
  primary: '#2064bc',
  secondary: '#f2f2f2',
  background: 'white',
  text: 'black',
  icon: 'black',
};

const darkTheme: ThemeType = {
  primary: '#6aa9e8',
  secondary: '#222222',
  background: 'black',
  text: 'white',
  icon: 'white',
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
