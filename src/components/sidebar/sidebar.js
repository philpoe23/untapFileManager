import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;
const SidebarItem = () => {
  return (
    <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="home" />
            <span>Dashboard</span>
          </span>
        }
      >
        <Menu.Item key="1">Ecommerce</Menu.Item>
        <Menu.Item key="2">Fintech / Business Dashboard</Menu.Item>
        <Menu.Item key="3">Site Performance Dashboard</Menu.Item>
        <Menu.Item key="4">Google Analytics Social Media</Menu.Item>
      </SubMenu>
    </Menu>
  );
};
export default SidebarItem;
