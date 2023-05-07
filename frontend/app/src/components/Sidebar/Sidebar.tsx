import { useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import { ThemeSwitchButton } from '../Theme/ThemeSwitchButton';
import { SidebarData } from './SidebarData';
import SidebarMenu from './SidebarMenu';

const Nav = styled.div`
  display: flex;
  justify-content: frex-start;
  align-items: center;
  height: 5rem;
  // background-color: black;
`;

const NavIcon = styled(Link)`
  display: flex;
  justify-content: frex-start;
  align-items: center;
  height: 5rem;
  font-size: 2rem;
  margin-left: 1.5rem;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: 250px;
  height: 100vh;
  // background-color: black;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
`;

const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Nav>
        <NavIcon to="#" onClick={showSidebar}>
          <MenuIcon style={{ color: 'white' }} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#" onClick={showSidebar}>
            <CloseIcon style={{ color: 'white' }} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SidebarMenu item={item} key={index} />;
          })}
          <ThemeSwitchButton />
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
