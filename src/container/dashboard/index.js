import React, { Fragment } from 'react';
// import Header from '../../components/header/header';
import PageHeader from '../../components/page-header/page-header';
import FrameOfDashboard from '../../layout/dashboard';
import { CardFreshFrame, CardTabsFrame, CardTabsBtnFrame } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
  {
    key: 'tab3',
    tab: 'tab3',
  },
];
const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
  tab3: <p>content3</p>,
};
const Dashbord = props => {
  return (
    <Fragment>
      <PageHeader title="Social Media Dashboard" />
      <div style={{ padding: '0px 50px', minHeight: 280 }}>
        <Row gutter={15}>
          <Col md={8}>
            <CardFreshFrame title="Social Media Overview" size="large" more={false}>
              <p>This is Child</p>
            </CardFreshFrame>
          </Col>
          <Col md={16}>
            <CardTabsBtnFrame title="Facebook Overview" size="large" more={false} tabList={tabList} contentList={contentList} />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={8}>
            <CardTabsFrame title="Facebook Overview" size="large" more={false} tabList={tabList} contentList={contentList} />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default FrameOfDashboard(Dashbord);
