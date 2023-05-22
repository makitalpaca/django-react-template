import { IoMdSettings } from 'react-icons/io';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { type SidebarItem } from './SidebarItem';

export const SidebarSecondData: SidebarItem[] = [
  {
    title: 'Settings',
    path: '/settings',
    icon: <IoMdSettings />,
    // subNav: [],
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <RiLogoutBoxRLine />,
  },
];
