import { AiOutlineDashboard } from 'react-icons/ai';
import { GiCampfire } from 'react-icons/gi';
import { MdSpaceDashboard } from 'react-icons/md';
import { type SidebarItem } from './SidebarItem';

export const SidebarData: SidebarItem[] = [
  {
    title: 'Dashborad',
    path: '/dashboard',
    icon: <AiOutlineDashboard />,
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
    // subNav: [],
  },
  {
    title: 'Pareo',
    path: '/pareo',
    icon: <GiCampfire />,
    // subNav: [],
  },
];
