import React, { Component } from 'react';
import { Layout, Button, Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import MenueItems from './sidebar/MenueItems';
import { NavLink } from 'react-router-dom';
import { Div } from './style';
import HeaderSearch from '../components/header-search/header-search';
import AuthInfo from '../components/utilities/auth-info/info';

const { Header, Footer, Sider, Content } = Layout;

const ThemeLayout = WrappedComponent => {
  class LayoutComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: false,
        top: 0,
      };
      this.handleUpdate = this.handleUpdate.bind(this);
      this.renderThumb = this.renderThumb.bind(this);
    }

    handleUpdate(values) {
      const { top } = values;
      this.setState({ top });
    }

    toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };

    renderThumb({ style, ...props }) {
      const thumbStyle = {
        backgroundColor: `#EFF0F3`,
        borderRadius: '20px',
      };
      return <div style={{ ...style, ...thumbStyle }} {...props} />;
    }

    render() {
      return (
        <Div>
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
                <div className="glider-scrollable" data="ss-container">
                  <p className="sidebar-nav-title">MAIN MENU</p>
                  <MenueItems />
                </div>
              </Sider>
              <Layout className="atbd-main-layout">
                <Content>
                  <WrappedComponent />
                  <Footer style={footerStyle}>Footer</Footer>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Div>
      );
    }
  }

  const footerStyle = {
    padding: '24px 50px',
    color: 'rgba(0, 0, 0, 0.65)',
    fontSize: '14px',
    background: 'rgba(255, 255, 255, .90)',
    width: '100%',
    boxShadow: '0 -5px 10px rgba(146,153,184, 0.05)',
  };

  const SideBarStyle = {
    marginTop: '64px',
    paddingTop: '15px',
    paddingBottom: '55px',
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    zIndex: 1,
  };

  return LayoutComponent;
};
export default ThemeLayout;
