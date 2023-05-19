import { type FC } from 'react';
import { useTheme } from './themeContext';

export const ThemeSwitchButton: FC = () => {
  const { colorMode, setColorMode } = useTheme();

  return (
    <>
      <button onClick={setColorMode}>theme!</button>
    </>
  );
};
