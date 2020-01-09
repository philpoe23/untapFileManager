import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const SidebarItem = () => {
  return (
    <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
      <Menu.Item key="1">
        <NavLink to="/">
          <Icon type="home" />
          <span>Dashboard</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/desktop">
          <Icon type="desktop" />
          <span>Desktop</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="inbox" />
        <span>Mail</span>
      </Menu.Item>
    </Menu>
  );
};
export default SidebarItem;
