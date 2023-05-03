import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { type SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <HomeIcon />,
    iconClosed: <HomeIcon />,
    iconOpend: <HomeIcon />,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <HomeIcon />,
      },
    ],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />,
    iconClosed: <SettingsIcon />,
    iconOpend: <SettingsIcon />,
    // subNav: [],
  },
];
