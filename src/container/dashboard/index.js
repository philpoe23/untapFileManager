import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { CardFreshFrame, CardTabsFrame, CardTabsBtnFrame } from '../../components/cards/frame/cards-frame';
import { Row, Col, Card } from 'antd';
import { SocialMediaContent } from '../../components/social-media/overview';
import { Main } from '../styled';

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
  tab1: (
    <Fragment>
      <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
      <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
    </Fragment>
  ),
  tab2: <p>content2</p>,
  tab3: <p>content3</p>,
};
const Dashbord = props => {
  return (
    <Fragment>
      <PageHeader title="Social Media Dashboard" />
      <Main>
        <Row gutter={15}>
          <Col md={8}>
            <CardFreshFrame title="Social Media Overview" size="large" more={false}>
              <Row gutter={15}>
                <Col md={8}>
                  <SocialMediaContent icon="facebook" bgColor="#2366B8" title="5,461" subTitle="Likes" />
                </Col>
                <Col md={8}>
                  <SocialMediaContent icon="twitter" bgColor="#00ABE4" title="5,461" subTitle="Followers" />
                </Col>
                <Col md={8}>
                  <SocialMediaContent icon="instagram" bgColor="#9D2E98" title="5,461" subTitle="Followers" />
                </Col>
                <Col md={8}>
                  <SocialMediaContent icon="youtube-play" bgColor="#E32212" title="5,461" subTitle="Subscribers" />
                </Col>
                <Col md={8}>
                  <SocialMediaContent icon="pinterest-p" bgColor="#E32212" title="5,461" subTitle="Followers" />
                </Col>
                <Col md={8}>
                  <SocialMediaContent icon="linkedin" bgColor="#007CBC" title="5,461" subTitle="Followers" />
                </Col>
              </Row>
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
      </Main>
    </Fragment>
  );
};

export default Dashbord;
