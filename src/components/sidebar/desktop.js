import React from 'react';
import { Menu, Icon } from 'antd';

const SidebarItem = () => {
  return (
    <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
      <Menu.Item key="1">
        <Icon type="pie-chart" />
        <span>Dashboard</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="desktop" />
        <span>Desktop</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="inbox" />
        <span>Mail</span>
      </Menu.Item>
    </Menu>
  );
};
export default SidebarItem;
