import { type FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { type SidebarItem } from './SidebarItem';

type SidebarMenuProps = {
  item: SidebarItem;
  sidebar: boolean;
};

export const SidebarMenu: FC<SidebarMenuProps> = ({ item, sidebar }) => {
  return (
    <>
      <SidebarMenuLink sidebar={sidebar}>
        <Link to={item.path}>
          <div className="sidebar-main-menu-icon">{item.icon}</div>
          <div className="sidebar-main-menu-label">{item.title}</div>
        </Link>
      </SidebarMenuLink>
    </>
  );
};

const SidebarMenuLink = styled.div<{ sidebar: boolean }>`
  // overflow: hidden scroll;

  font-size: 15px;
  text-decoration: none;
  font-weight: 600; // semi-bold
  cursor: pointer;
  border-radius: 5px;
  margin: 10px 0;

  & .sidebar-main-menu-icon {
    display: inline-flex;
    height: 40px;
    width: 40px;
    font-size: 25px;
    justify-content: center;
    align-items: center;
  }

  & .sidebar-main-menu-label {
    position: absolute;
    display: inline-flex;
    height: 40px;
    align-items: center;
    padding-left: 20px;

    opacity: ${({ sidebar }) => (sidebar ? '1' : '0')};
    transition: 50ms ease-in;
  }

  &:hover {
    background-color: #333;
  }
`;
