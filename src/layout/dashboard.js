import React, { Component } from 'react';
import { Layout } from 'antd';
import SidebarItem from '../components/sidebar/dashboard';

import { LayOutWraper } from './style';

const { Sider, Content } = Layout;

const FrameOfDashboard = WrappedComponent => {
  return class extends Component {
    state = {
      collapsed: false,
    };

    toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };

    render() {
      return (
        <LayOutWraper>
          <Layout>
            <Sider style={{ paddingTop: '15px', height: '100vh' }} collapsed={this.state.collapsed} theme="light">
              <p style={{ paddingLeft: '20px' }}>Dashboard</p>
              <SidebarItem />
            </Sider>
            <Content>
              <WrappedComponent />
            </Content>
          </Layout>
        </LayOutWraper>
      );
    }
  };
};

export default FrameOfDashboard;
