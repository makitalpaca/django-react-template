import { type FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { type SidebarItem } from './SidebarItem';

type SidebarMenuProps = {
  item: SidebarItem;
};

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  font-size: 1.125rem;
  padding: 2rem;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #1f1f1b;
    border-left: 4px solid #6d44dc;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 0.8rem;
`;

const SidebarMenu: FC<SidebarMenuProps> = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </>
  );
};

export default SidebarMenu;
