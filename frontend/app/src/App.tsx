import { type FC } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ThemeSwitchButton } from './components/Theme2/ThemeSwitchButton';
// import { ThemeProvider } from './components/Theme2/themeProvider';

import Overview from './pages/Overview';
import Settings from './pages/Settings';

const App: FC = () => {
  return (
    <>
      {/* <ThemeProvider> */}
      <BrowserRouter>
        <Sidebar />

        <ThemeSwitchButton />
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
