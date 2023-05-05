import { type FC } from 'react';
import './App.css';
import { Global } from '@emotion/react';
import { globalStyles, initTheme } from 'components/Theme/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

import Overview from './pages/Overview';
import Settings from './pages/Settings';

const App: FC = () => {
  initTheme();

  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
