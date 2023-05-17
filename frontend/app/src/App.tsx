import { type FC } from 'react';
import styled from '@emotion/styled';

import './App.css';
// import { ThemeProvider } from 'components/Theme/themeProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ThemeSwitchButton } from 'components/Theme/ThemeSwitchButton';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useTheme } from './components/Theme/themeContext';

import Overview from './pages/Overview';
import Settings from './pages/Settings';

const App: FC = () => {
  const { colorMode, setColorMode } = useTheme();

  return (
    <>
      {/* <ThemeProvider> */}
      <BrowserRouter>
        <Sidebar />
        <Toggle>
          <button onClick={setColorMode}>toggle</button>
          {colorMode}
          {/* <ThemeSwitchButton /> */}
        </Toggle>

        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;

const Toggle = styled.div`
  display: flex;
  justify-content: center;
  // background: ${(props) => props.theme.background};
`;
