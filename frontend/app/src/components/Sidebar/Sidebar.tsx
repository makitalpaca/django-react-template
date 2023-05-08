import { useState, type FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

// import { ThemeSwitchButton } from '../Theme2/ThemeSwitchButton';
import { useTheme } from '../Theme2/themeContext';
import { SidebarData } from './SidebarData';
import SidebarMenu from './SidebarMenu';

const Nav = styled.div`
  display: flex;
  justify-content: frex-start;
  align-items: center;
  height: 5rem;
  background-color: ${(props) => props.theme.secondary};
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
  background-color: ${(props) => props.theme.secondary};
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  color: ${(props) => props.theme.text};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;
const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const { colorMode, setColorMode } = useTheme();

  // console.log(${ props });
  // const iconColor = ${(props) => props.theme.background};
  // console.log(iconColor);
  // const styles = { color: (props) => props.theme.text };
  const st1 = styled.div`
    ${(props) => props.theme.icon};
  `;

  return (
    <>
      <Nav>
        <NavIcon to="#" onClick={showSidebar}>
          {/* <MenuIcon style={{ color: 'white' }} /> */}
          <MenuIcon sx={{ color: st1 }} />
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
          {/* <ThemeSwitchButton /> */}
          <button onClick={setColorMode}>THEME CHANGE !</button>
        </SidebarWrap>
      </SidebarNav>
      <Container>あー</Container>
    </>
  );
};

export default Sidebar;
