import { type FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { type SidebarItem } from './SidebarItem';

type SidebarMenuProps = {
  item: SidebarItem;
};

export const SidebarMenu: FC<SidebarMenuProps> = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        {/* <div className="sidebar-main-menu"> */}
        <div className="sidebar-main-menu-item">
          <div className="sidebar-main-menu-icon">{item.icon}</div>
          <div className="sidebar-main-menu-label">{item.title}</div>
        </div>
        {/* </div> */}
      </SidebarLink>
    </>
  );
};

const SidebarLink = styled(Link)`
  // .sidebar-main-menu {
  overflow: hidden scroll;

  & .sidebar-main-menu-item {
    color: white;
    font-size: 15px;
    text-decoration: none;
    font-weight: 600; // semi-bold
    cursor: pointer;
    border-radius: 5px;
    margin: 10px 0;

    & .sidebar-main-menu-icon {
      // display: inline-block;
      // width: 40px;
      // font-size: 25px;
      // line-height: 40px;
      // text-align: center;
      // padding-top: 3px;
      display: inline-flex;
      height:40px;
      width: 40px;
      font-size: 25px;
      justify-content:center;
      align-items:center;
    }

    & .sidebar-main-menu-label {
      // position: absolute;
      // display: inline-block;
      // line-height: 40px;
      // padding-left: 20px;
      position:absolute;
      display: inline-flex;
      height:40px;
      align-items:center;
      padding-left: 20px;
    }

    &:hover {
      background-color:#333;
  }
  // }
`;
