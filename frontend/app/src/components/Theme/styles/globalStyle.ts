import { css } from '@emotion/react';
import {
  lightThemeCssVariables,
  darkThemeCssVariables,
  theme,
  THEME_KEY,
} from './theme';

export const globalStyles = css`
  body[data-theme='${THEME_KEY.light}'] {
    ${lightThemeCssVariables}
  }

  body[data-theme='${THEME_KEY.dark}'] {
    ${darkThemeCssVariables}
  }

  body {
    background: ${theme.base.background};
    color: ${theme.base.color};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
`;
