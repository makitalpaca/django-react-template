// import React, { useCallback, useState, useEffect } from 'react'; // eslint-disable-line
// import styled from '@emotion/styled';
// import Brightness2Icon from '@mui/icons-material/Brightness2';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import { type ThemeKey, THEME_KEY, setTheme } from './styles';

// interface Props {
//   className?: string;
// }

// const Component: React.FC<Props> = ({ className }) => {
//   const [themeKey, setThemeKey] = useState<ThemeKey>(
//     (document.body.dataset.theme as ThemeKey) ?? THEME_KEY.light
//   );

//   console.log(document.body.dataset);

//   useEffect(() => {
//     setThemeKey((document.body.dataset.theme as ThemeKey) ?? THEME_KEY.light);
//   }, []);

//   const handleChange = useCallback(() => {
//     const next =
//       themeKey === THEME_KEY.light ? THEME_KEY.dark : THEME_KEY.light;
//     setThemeKey(next);
//     setTheme(next);
//   }, [themeKey]);

//   const isDark = themeKey === THEME_KEY.light;

//   return (
//     <div className={className}>
//       <label className="toggle" data-dark={isDark}>
//         <input
//           type="checkbox"
//           name="switchTheme"
//           id="switchTheme"
//           onChange={handleChange}
//         />
//         <span
//           className="icon light"
//           role="img"
//           aria-label="light"
//           aria-hidden={isDark}
//         >
//           <LightModeIcon style={{ color: 'black' }} />
//         </span>
//         <span
//           className="icon dark"
//           role="img"
//           aria-label="dark"
//           aria-hidden={!isDark}
//         >
//           <Brightness2Icon style={{ color: 'white' }} />
//         </span>
//         <span className="knob" data-dark={isDark} />
//       </label>
//     </div>
//   );
// };

// export const ThemeSwitchButton = styled(Component)`
//   > .toggle {
//     display: block;
//     width: 48px;
//     height: 24px;
//     border-radius: 12px;
//     position: relative;
//     transition: background-color 0.2s ease-out;
//     &[data-dark='true'] {
//       background-color: #101010;
//     }
//     &[data-dark='false'] {
//       background-color: white;
//     }
//     > input {
//       opacity: 0;
//       position: absolute;
//       width: 0;
//       height: 0;
//     }
//   }

//   .icon,
//   .knob {
//     position: absolute;
//     border-radius: 50%;
//     transform: translateY(-50%);
//   }

//   .icon {
//     top: calc(50%);
//     line-height: 1;
//     height: 16px;
//     width: 16px;
//     font-size: 16px;
//     text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
//     &[aria-hidden='true'] {
//       opacity: 0;
//       visibility: hidden;
//     }

//     &.light {
//       left: 3px;
//     }

//     &.dark {
//       right: 5px;
//     }
//   }

//   .knob {
//     height: 18px;
//     width: 18px;
//     right: 2px;
//     top: 50%;
//     transition: right 0.2s ease-out;
//     box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
//     &[data-dark='true'] {
//       right: 26px;
//       background-color: white;
//     }
//     &[data-dark='false'] {
//       background-color: #101010;
//     }
//   }
// `;

import { type FC } from 'react';
import styled from '@emotion/styled';
import { useTheme } from './themeContext';

// import BlogCard from '../blogCard';

// propsでEmotionProviderのthemeを受け取ることができる
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

export const ThemeSwitchButton: FC = () => {
  const { colorMode, setColorMode } = useTheme();
  // const { colorMode, setColorMode } = useContext(ThemeContext);

  return (
    <>
      {/* themeで切り替わる部分 */}
      <Container>
        <p>
          current color mode:
          {colorMode}
        </p>
        <button onClick={setColorMode}>toggle color mode</button>
      </Container>
    </>
  );
};
