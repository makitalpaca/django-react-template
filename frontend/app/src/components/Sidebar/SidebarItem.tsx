export interface SidebarItem {
  title: string;
  path: string;
  icon: any;
  // iconColor?: string;
  // iconClosed?: any;
  subNav?: SidebarItem[];
}
