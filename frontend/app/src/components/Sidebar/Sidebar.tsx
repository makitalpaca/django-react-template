import { useState, type FC } from 'react';
import styled from '@emotion/styled';

import {
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
  AiOutlineSearch,
} from 'react-icons/ai';
import { ThemeSwitchToggle } from 'components/Theme/ThemeSwitchToggle';
import logo from '../../assets/yadon.png';

import { SidebarData } from './SidebarData';
import { SidebarMenu } from './SidebarMenu';

export const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <SidebarNav sidebar={sidebar}>
        {/* eslint-disable-next-line */}
        <div onClick={showSidebar} className="sidebar-open">
          {sidebar ? (
            <AiOutlineMenuFold size="2rem" />
          ) : (
            <AiOutlineMenuUnfold size="2rem" />
          )}
        </div>
        <div className="top-section"></div>
        <div className="search-frm">
          <button className="search-btn">
            <AiOutlineSearch color="white" size="1.5rem" />
          </button>

          <input type="text" placeholder="search" className="search-txt" />
        </div>
        <div className="sidebar-up-driver"></div>

        {SidebarData.map((item, index) => {
          // return <SidebarMenu item={item} key={index} />;
          return <SidebarMenu item={item} key={index} sidebar={sidebar} />;
        })}

        <ThemeSwitchToggle />

        <div className="sidebar-low-driver"></div>
        <div className="sidebar-foot">
          <div className="logo">
            <img src={logo} className="logo-img" alt="logo-img" />
          </div>
        </div>
      </SidebarNav>
    </>
  );
};

const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: ${({ sidebar }) => (sidebar ? '300px' : '80px')};
  height: 100vh;
  position: fixed;
  top: 0;
  transition: 250ms;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  box-sizing: border-box;
  padding: 30px 20px;

  & .sidebar-open {
    display: flex;
    margin-left: 5px;
    cursor: pointer;
    // icon-color: ${(props) => props.theme.icon};
  }

  & .top-section {
    // position: relative;
  }

  & .search-frm {
    color: #fff;
    position: relative;

    & .search-btn {
      width: 40px;
      height: 40px;
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

  // & .sidebar-menu {
  //   color: ${(props) => props.theme.text};
  // }

  & .sidebar-up-driver {
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background: #333;
    margin-bottom: 10px;
  }

  & .sidebar-low-driver {
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background: #333;
    margin-top: 300px;
    bottom: 0;
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
