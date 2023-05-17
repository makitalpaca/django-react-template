import { type FC } from 'react';
// import styled from '@emotion/styled';
import { useTheme } from './themeContext';

export const ThemeSwitchButton: FC = () => {
  const { colorMode, setColorMode } = useTheme();

  return (
    <>
      <button onClick={setColorMode}>theme!</button>
    </>
  );
};

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 30vh;
//   background: ${(props) => props.theme.primary};
//   color: ${(props) => props.theme.text};
// `;
