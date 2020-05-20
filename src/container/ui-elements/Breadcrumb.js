import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Breadcrumb, Icon, Menu } from 'antd';
import { BreadcrumbWrapperStyle } from './ui-elements-styled';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { HomeOutlined } from '@ant-design/icons';
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    </Menu.Item>
  </Menu>
);

const Breadcrumbs = () => {
  return (
    <Fragment>
      <PageHeader title="Breadcrumb" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic">
              <BreadcrumbWrapperStyle>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink to="#">Application Center</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink to="#">Application List</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
              </BreadcrumbWrapperStyle>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="With Icon">
            <BreadcrumbWrapperStyle>
              <Breadcrumb>
                  <Breadcrumb.Item>
                    <HomeOutlined />
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink to="#">Application Center</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink to="#">
                      <span>Application List</span>
                    </NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            </BreadcrumbWrapperStyle>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Bread crumbs with drop down menu">
            <BreadcrumbWrapperStyle>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <NavLink to="#">Design</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <NavLink to="#">Component</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item overlay={menu}>
                  <NavLink to="#">
                    <Icon type="user" />
                    <span>General</span>
                  </NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Button</Breadcrumb.Item>
              </Breadcrumb>
            </BreadcrumbWrapperStyle>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Breadcrumbs;
