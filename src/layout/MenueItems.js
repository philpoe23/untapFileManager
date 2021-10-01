import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';

const MenuItems = ({ darkMode, toggleCollapsed, topMenu }) => {
  const { path } = useRouteMatch();

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = item => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}`}>
              <FeatherIcon icon="home" />
            </NavLink>
          )
        }
        key="sales"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}`}>
          Dashboard
        </NavLink>
      </Menu.Item>
      {!topMenu && <p className="sidebar-nav-title">Applications</p>}

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/viewAssets`}>
              <FeatherIcon icon="clipboard" />
            </NavLink>
          )
        }
        key="assets"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/viewAssets`}>
          View Assets
        </NavLink>
      </Menu.Item>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}`}>
              <FeatherIcon icon="info" />
            </NavLink>
          )
        }
        key="info"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}`}>
          View Information
        </NavLink>
      </Menu.Item>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/MTACheckList/view`}>
              <FeatherIcon icon="check-square" />
            </NavLink>
          )
        }
        key="checklist"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/MTACheckList/view`}>
          MTA Aerodome Inspection
        </NavLink>
      </Menu.Item>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}`}>
              <FeatherIcon icon="align-left" />
            </NavLink>
          )
        }
        key="reports"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}`}>
          Preview Reports
        </NavLink>
      </Menu.Item>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}`}>
              <FeatherIcon icon="check-circle" />
            </NavLink>
          )
        }
        key="marked"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}`}>
          Reports Marked
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
