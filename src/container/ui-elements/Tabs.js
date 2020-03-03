import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Tab } from '../../components/tabs/tabs';
import { data, dataIcon, icon } from '../../config/dataService/tab-data.json';

const Tabs = () => {
  return (
    <Fragment>
      <PageHeader title="Tabs" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Tab data={data} icon="apple" />
          </Col>
          <Col md={12}>
            <Tab data={data} color="#5F63F2" />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12}>
            <Tab data={dataIcon} color="#5F63F2" />
          </Col>
          <Col md={12}>
            <Tab data={icon} color="#5F63F2" />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12}>
            <Tab data={dataIcon} color="#ffffff" />
          </Col>
          <Col md={12}>
            <Tab tabPosition="left" data={icon} color="#5F63F2" />
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Tabs;
