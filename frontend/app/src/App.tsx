import { type FC } from 'react';
import styled from '@emotion/styled';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useTheme } from './components/Theme/themeContext';

import Contents from './pages/Contents';
import Dashborad from './pages/Dashborad';
import Logout from './pages/Logout';
import Pareo from './pages/Pareo';
import Settings from './pages/Settings';

const App: FC = () => {
  const { colorMode, setColorMode } = useTheme();

  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Toggle>
          <button onClick={setColorMode}>toggle</button>
          {colorMode}
        </Toggle>

        <Routes>
          <Route path="/dashboard" element={<Dashborad />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/pareo" element={<Pareo />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

const Toggle = styled.div`
  display: flex;
  justify-content: center;
`;
