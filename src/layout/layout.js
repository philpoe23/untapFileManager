import React, { Component } from 'react';
import { Layout, Button, Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import SidebarItem from '../components/sidebar/sidebar';
import { NavLink } from 'react-router-dom';
import { LayOutWraper } from './layout-style';
import HeaderSearch from '../components/header-search/header-search';
import AuthInfo from '../components/auth-info/info';
import { connect } from 'react-redux';
import { readMessageList } from '../redux/actions/auth-info/message-list';
import { readNotificationList } from '../redux/actions/auth-info/notification-list';
import PropTypes from 'prop-types';

const { Header, Footer, Sider, Content } = Layout;

const FrameOfTheme = WrappedComponent => {
  class LayouT extends Component {
    state = {
      collapsed: false,
    };

    toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
    render() {
      const { readMessage, readNotification } = this.props;
      readMessage();
      readNotification();
      return (
        <LayOutWraper>
          <Layout>
            <Header>
              <Row>
                <Col md={4}>
                  <Button type="link" style={{ marginTop: 0 }} onClick={this.toggleCollapsed}>
                    <FeatherIcon icon={this.state.collapsed ? 'align-left' : 'align-right'} />
                  </Button>
                  <NavLink to="/">
                    <img src={require('../static/img/aazztech_logo_v2.png')} alt="" />
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
              <Sider style={{ paddingTop: '15px', height: '100vh' }} collapsed={this.state.collapsed} theme="light">
                <p style={{ paddingLeft: '20px' }}>MAIN MENU</p>
                <SidebarItem />
              </Sider>
              <Content>
                <WrappedComponent />
              </Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </LayOutWraper>
      );
    }
  }
  LayouT.propTypes = {
    readMessage: PropTypes.func,
    readNotification: PropTypes.func,
  };
  const mapDispatchToProps = dispatch => {
    return {
      readMessage: () => dispatch(readMessageList()),
      readNotification: () => dispatch(readNotificationList()),
    };
  };
  return connect(null, mapDispatchToProps)(LayouT);
};
export default FrameOfTheme;
