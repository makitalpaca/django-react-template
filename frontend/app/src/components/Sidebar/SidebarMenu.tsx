import { type FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { type SidebarItem } from './SidebarItem';

type SidebarMenuProps = {
  item: SidebarItem;
  // theme: any;
};

// export const SidebarMenu: FC<SidebarMenuProps> = ({ item, theme }) => {
export const SidebarMenu: FC<SidebarMenuProps> = ({ item }) => {
  return (
    <>
      <SidebarMenuLink>
        {/* {item.icon} */}
        <SidebarLink to={item.path} className="sidebar-link">
          {/* <Link to={item.path}> */}

          {/* <div className="sidebar-main-menu"> */}
          <div className="sidebar-main-menu-item">
            <div className="sidebar-main-menu-icon">{item.icon}</div>
            <div className="sidebar-main-menu-label">{item.title}</div>
            {/* <div>{theme.icon}</div> */}
          </div>
          {/* </div> */}
          {/* </Link> */}
        </SidebarLink>
      </SidebarMenuLink>
      {/* <Abcde>abeeeeeeeeeeeeeeeeeeeeeeeeee</Abcde> */}
    </>
  );
};
// const Abcde = styled.div`
//   color: ${(props) => props.theme.icon};
// `;

const SidebarMenuLink = styled.div`
  // .sidebar-link {
  // color: ${(props) => props.theme.text};
  // background: ${(props) => props.theme.text};
  // }
`;

// .sidebar-main-menu {
// overflow: hidden scroll;
const SidebarLink = styled(Link)`
  & .sidebar-main-menu-item {
    // color: ${(props) => props.theme.text};
    // color : 'rgb(225, 225, 225)';
    // background: ${(props) => props.theme.text};

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
      // color: ${(props) => props.theme.icon};
      // background: ${(props) => props.theme.text};
      svg{
        background: ${(props) => props.theme.text};
      }
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
      // color: ${(props) => props.theme.icon};
      // background: ${(props) => props.theme.text};
    }

    &:hover {
      background-color:#333;
  }
  // }
`;

// const SidebarLink = styled(Link)`
//   // .sidebar-main-menu {
//   overflow: hidden scroll;

//   & .sidebar-main-menu-item {
//     // color: ${(props) => props.theme.text};
//     color: '#0e1013'
//     font-size: 15px;
//     text-decoration: none;
//     font-weight: 600; // semi-bold
//     cursor: pointer;
//     border-radius: 5px;
//     margin: 10px 0;

//     & .sidebar-main-menu-icon {
//       // display: inline-block;
//       // width: 40px;
//       // font-size: 25px;
//       // line-height: 40px;
//       // text-align: center;
//       // padding-top: 3px;
//       display: inline-flex;
//       height:40px;
//       width: 40px;
//       font-size: 25px;
//       justify-content:center;
//       align-items:center;
//       // color: ${(props) => props.theme.icon};
//     }

//     & .sidebar-main-menu-label {
//       // position: absolute;
//       // display: inline-block;
//       // line-height: 40px;
//       // padding-left: 20px;
//       position:absolute;
//       display: inline-flex;
//       height:40px;
//       align-items:center;
//       padding-left: 20px;
//     }

//     &:hover {
//       background-color:#333;
//   }
//   // }
// `;
