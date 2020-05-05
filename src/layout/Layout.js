import React, { Component } from 'react';
import { Layout, Button, Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import SidebarItem from '../components/sidebar/sidebar';
import { NavLink } from 'react-router-dom';
import { LayOutWraper } from './style';
import HeaderSearch from '../components/header-search/header-search';
import AuthInfo from '../components/utilities/auth-info/info';

const { Header, Footer, Sider, Content } = Layout;
const ThemeLayout = WrappedComponent => {
  class LayoutComponent extends Component {
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
            <Header
              style={{
                position: 'fixed',
                width: '100%',
                top: 0,
                left: 0,
              }}
            >
              <Row>
                <Col md={4} className="align-center-v navbar-brand">
                  <Button type="link" style={{ marginTop: 0 }} onClick={this.toggleCollapsed}>
                    <FeatherIcon icon={this.state.collapsed ? 'align-left' : 'align-right'} />
                  </Button>
                  <NavLink to="/">
                    <img src={require(`../static/img/logo.png`)} alt="" />
                  </NavLink>
                </Col>
                <Col md={6}>
                  <HeaderSearch />
                </Col>
                <Col md={14}>
                  <AuthInfo />
                </Col>
              </Row>
            </Header>
            <Layout>
              <Sider width={300} style={SideBarStyle} collapsed={this.state.collapsed} theme="light">
                <p className="sidebar-nav-title">MAIN MENU</p>
                <SidebarItem />
              </Sider>
              <Layout style={{ marginLeft: 300, marginTop: '64px', marginBottom: '70px' }}>
                <Content>
                  <WrappedComponent />
                  <Footer style={footerStyle}>Footer</Footer>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </LayOutWraper>
      );
    }
  }

  const footerStyle = {
    padding: '24px 15px',
    color: 'rgba(0, 0, 0, 0.65)',
    fontSize: '14px',
    background: 'rgba(255, 255, 255, .90)',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0px 0px 7px -4px #888',
  };

  const SideBarStyle = {
    marginTop: '64px',
    paddingTop: '15px',
    paddingBottom: '55px',
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
  };

  return LayoutComponent;
};
export default ThemeLayout;
