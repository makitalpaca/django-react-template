import { useState, type FC } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
  AiOutlineSearch,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/yadon.png';
// import CloseIcon from '@mui/icons-material/Close';

// import { ThemeSwitchButton } from '../Theme2/ThemeSwitchButton';
import { useTheme } from '../Theme2/themeContext';
import { SidebarData } from './SidebarData';
import { SidebarMenu } from './SidebarMenu';

export const Sidebar: FC = () => {
  // const [sidebar, setSidebar] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  // const { colorMode, setColorMode } = useTheme();

  // const st1 = styled.div`
  //   ${(props) => props.theme.icon};
  // `;

  return (
    <>
      <SidebarNav sidebar={sidebar}>
        {/* eslint-disable-next-line */}
        <div onClick={showSidebar} className="sidebar-open">
          {/* <MenuIcon style={{ color: 'white' }} /> */}
          {sidebar ? (
            <AiOutlineMenuFold color="white" size="2rem" />
          ) : (
            <AiOutlineMenuUnfold color="white" size="2rem" />
          )}
        </div>

        <div className="top-section"></div>

        <div className="search-frm">
          {/* <div className="search-btn">
            <button>a</button>
          </div> */}
          <button className="search-btn">
            <AiOutlineSearch color="white" size="1.5rem" />
          </button>

          <div className="search-txt">
            <input type="text" placeholder="search" />
          </div>
        </div>

        <Divider></Divider>

        <Ul>
          {SidebarData.map((item, index) => {
            return <SidebarMenu item={item} key={index} />;
          })}
          {/* <ThemeSwitchButton /> */}
          {/* <button onClick={setColorMode}>THEME CHANGE !</button> */}
          {/* </SidebarWrap> */}
        </Ul>

        {/* <SideMenuFooter> */}
        <div className="sidebar-foot">
          <div className="logo">
            <img src={logo} className="logo-img" alt="logo-img" />
          </div>
        </div>
        {/* </SideMenuFooter> */}
      </SidebarNav>

      {/* <Container>あー</Container> */}
    </>
  );
};

// const Nav = styled.div`
//   display: flex;
//   justify-content: frex-start;
//   align-items: center;
//   height: 5rem;
//   background-color: ${(props) => props.theme.secondary};
// `;

// const NavIcon = styled(Link)`
//   display: flex;
//   justify-content: frex-start;
//   align-items: center;
//   height: 5rem;
//   font-size: 2rem;
//   margin-left: 1.5rem;
// `;

const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: ${({ sidebar }) => (sidebar ? '300px' : '80px')};
  height: 100vh;
  position: fixed;
  top: 0;
  transition: 250ms;
  // background-color: ${(props) => props.theme.secondary};
  background-color: black;
  // color: ${(props) => props.theme.text};
  box-sizing: border-box;
  padding: 30px 20px;

  & .sidebar-open {
    display: flex;
    margin-left: 5px;
  }

  & .top-section {
    // position: relative;
    // background-color: black;
  }

  & .search-frm {
    color: #fff;
    position: relative;

    & .search-btn {
      width: 40px;
      height: 35px;
      position: absolute;
      background: transparent;
      border: 0;
      font-size: 20px;
      color: #666;
    }

    & .search-txt {
      border: 0;
      outline: none;
      height: 35px;
      background: #333;
      border-radius: 5px;
      display: block;
      margin: 20px 0;
      width: 100%;
      box-sizing: border-box;
      padding-left: 40px;
      color: #666;
    }
  }

  & .sidebar-foot {
    width: 100%;
    // background: green;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    box-sizing: border-box;

    & .logo {
      width: 40px;
      height: 40px;
      overflow: hidden;
      display: inline-block;
      & .logo-img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
`;

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 30vh;
//   background: ${(props) => props.theme.background};
//   color: ${(props) => props.theme.text};
// `;
// const SidebarWrap = styled.div``;

// const OshiteButton = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 90vh;
// `;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background: #333;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;
