import { type FC } from 'react';
import styled from '@emotion/styled';
import { useTheme } from './themeContext';

export const ThemeSwitchButton: FC = () => {
  const { colorMode, setColorMode } = useTheme();

  return (
    <>
      <Closer>
        <button onClick={console.log('ぽん')}>あ</button>
        <div>aaaaaaaaaaaaaa</div>
      </Closer>
      <button onClick={setColorMode}>theme!</button>
    </>
  );
};

const Closer = styled.div`
  color=${(props) => props.theme.text};
  display:flex;
  justify-content:center;
`;
