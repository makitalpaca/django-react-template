export interface SidebarItem {
  title: string;
  path: string;
  icon: any;
  iconOpend?: any;
  iconClosed?: any;
  subNav?: SidebarItem[];
}
