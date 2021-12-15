import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import SubMenu from 'antd/lib/menu/SubMenu';

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

      {/* <SubMenu key="info" icon={!topMenu && <FeatherIcon icon="info" />} title="View Information">
        <Menu.Item key="assetcategories">
          <NavLink onClick={toggleCollapsed} to={`${path}/viewInformation/assetcategories`}>
            Asset Categories
          </NavLink>
        </Menu.Item>
        <Menu.Item key="viewstatus">
          <NavLink onClick={toggleCollapsed} to={`${path}/viewInformation/status`}>
            View Status
          </NavLink>
        </Menu.Item>
        <Menu.Item key="viewlocations">
          <NavLink onClick={toggleCollapsed} to={`${path}/viewInformation/locations`}>
            View Locations
          </NavLink>
        </Menu.Item>
        <Menu.Item key="viewassettypes">
          <NavLink onClick={toggleCollapsed} to={`${path}/viewInformation/assettypes`}>
            View Asset Types
          </NavLink>
        </Menu.Item>
      </SubMenu> */}

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
          Serviceability Inspection Checklist
        </NavLink>
      </Menu.Item>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/fuellandingrecord/view`}>
              <FeatherIcon icon="align-left" />
            </NavLink>
          )
        }
        key="reports"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/fuellandingrecord/view`}>
          Fuel and Landing Docket
        </NavLink>
      </Menu.Item>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/dailyReport/view`}>
              <FeatherIcon icon="calendar" />
            </NavLink>
          )
        }
        key="marked"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/dailyReport/view`}>
          Daily Report
        </NavLink>
      </Menu.Item>
      <img
        src={require('../static/img/sidebar_graphic.png')}
        height={window.innerHeight < 800 ? 310 : 400}
        style={{ position: 'absolute', bottom: 0, width: 285, zIndex: '-1' }}
      />
      <div className="sidebar-bottom">
        <span className="admin-footer__copyright" style={{ paddingBottom: 10, color: '#9a9a9a' }}>
          Developed By
        </span>
        <img src={require('../static/img/emerald_apps_logo.svg')} height={30} />
      </div>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
