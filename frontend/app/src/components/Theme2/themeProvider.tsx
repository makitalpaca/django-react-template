import { type FC, useState } from 'react';
import { ThemeProvider as EmotionProvider } from '@emotion/react';
import { ThemeContext } from './themeContext';
import { getTheme } from './themes';

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  // const ThemeProvider = ({ children }) => {
  // useStateでモードを管理する（stateの値をcontextProviderに渡す）
  const [colorMode, setColorMode] = useState('light');

  // モードを切り替える関数
  const toggleColorMode = () => {
    // colorMode切り替え用関数
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    // emotion-themingのthemeProvider
    // stateのcolorModeが変わるとthemeが切り替わる
    <EmotionProvider theme={getTheme(colorMode)}>
      {/* useContextのprivderにモードを管理してるstateを渡し
        子のcomponentでsetColorModeでstateを変更した場合、
        EmotionProviderに渡しているcolorModeが切り替わる
        colorModeが切り替れば、getThemeで取得されるthemeも変わり、
        darkmodeまたはlightモードに切り替わる
     */}
      <ThemeContext.Provider
        value={{
          colorMode,
          setColorMode: toggleColorMode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionProvider>
  );
};

// export default ThemeProvider;
