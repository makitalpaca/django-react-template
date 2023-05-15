import { AiOutlineDashboard } from 'react-icons/ai';
import { GiCampfire } from 'react-icons/gi';
import { IoMdSettings } from 'react-icons/io';
import { MdSpaceDashboard } from 'react-icons/md';
import { type SidebarItem } from './SidebarItem';

export const SidebarData: SidebarItem[] = [
  {
    title: 'Dashborad',
    path: '/dashboard',
    icon: <AiOutlineDashboard />,
    iconClosed: <AiOutlineDashboard />,
    iconOpend: <AiOutlineDashboard />,
    subNav: [
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <AiOutlineDashboard />,
      },
    ],
  },
  {
    title: 'Contents',
    path: '/contents',
    icon: <MdSpaceDashboard />,
    iconClosed: <AiOutlineDashboard />,
    iconOpend: <AiOutlineDashboard />,
    // subNav: [],
  },
  {
    title: 'Pareo',
    path: '/pareo',
    icon: <GiCampfire />,
    iconClosed: <GiCampfire />,
    iconOpend: <GiCampfire />,
    // subNav: [],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <IoMdSettings />,
    iconClosed: <IoMdSettings />,
    iconOpend: <IoMdSettings />,
    // subNav: [],
  },
];
