import { useState, type FC } from 'react';
import styled from '@emotion/styled';

import { BsFillSunFill } from 'react-icons/bs';
import { TbMoonFilled } from 'react-icons/tb';
import { useTheme } from './themeContext';

export const ThemeSwitchToggle: FC = () => {
  const { colorMode, setColorMode } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const themeState = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <ThemeSWitchWrapper>
        <input
          id="theme-switch"
          type="checkbox"
          onChange={() => {
            themeState();
            setColorMode();
          }}
        />
        <label htmlFor="theme-switch">
          <div className="toggle-light">
            <BsFillSunFill />
          </div>
          <div className="toggle-dark">
            <TbMoonFilled />
          </div>
        </label>
      </ThemeSWitchWrapper>
    </>
  );
};

const ThemeSWitchWrapper = styled.div`
  & input {
    display: none;

    &:checked + label {
      background: #e1e1e1;

      &::before {
        // left: 32px;
        left: 22px;
      }
    }
  }

  & label {
    background: ${(props) => props.theme.toggle_background};
    height: 24px;
    width: 40px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    transition: 250ms;

    &::before {
      height: 16px;
      width: 16px;
      border-radius: 100%;
      background: ${(props) => props.theme.toggle_foreground};
      content: '';
      display: inline-block;
      position: absolute;
      // left: 4px;
      left: 3px;
      transition: 250ms ease-out;
      z-index: 2;
    }

    > .toggle-light {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: ${(props) => props.theme.toggle_foreground};
    }

    > .toggle-dark {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: ${(props) => props.theme.toggle_foreground};
    }
  }
`;
