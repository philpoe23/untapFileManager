import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col, Card } from 'antd';
import { Main } from '../../styled';
import { CardHeadLessFrame, CardFreshFrame, CardTabsFrame, CardTabsBtnFrame } from '../../../components/cards/frame/cards-frame';

const { Meta } = Card;
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
      <p>Card content tab1</p>
      <p>Card content tab1</p>
      <p>Card content tab1</p>
      <p>Card content tab1</p>
      <p>Card content tab1</p>
    </Fragment>
  ),
  tab2: (
    <Fragment>
      <p>Card content tab2</p>
      <p>Card content tab2</p>
      <p>Card content tab2</p>
      <p>Card content tab2</p>
      <p>Card content tab2</p>
    </Fragment>
  ),
  tab3: (
    <Fragment>
      <p>Card content tab3</p>
      <p>Card content tab3</p>
      <p>Card content tab3</p>
      <p>Card content tab3</p>
      <p>Card content tab3</p>
    </Fragment>
  ),
};

const Cards = props => {
  return (
    <Fragment>
      <PageHeader title="Cards" />
      <Main>
        <Row gutter={15}>
          <Col md={8}>
            <CardFreshFrame title="Default Size Card" size="default" more={true}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </CardFreshFrame>
          </Col>
          <Col md={8}>
            <CardFreshFrame title="Default Size Card" size="default" more={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </CardFreshFrame>
          </Col>
          <Col md={8}>
            <CardFreshFrame title="Small Size Card" size="small" more={true}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </CardFreshFrame>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={8}>
            <CardFreshFrame title="Small Size Card" size="small" more={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </CardFreshFrame>
          </Col>
          <Col md={8}>
            <CardHeadLessFrame title="simple card">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </CardHeadLessFrame>
          </Col>
          <Col md={8}>
            <CardHeadLessFrame title="simple card" size="large">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </CardHeadLessFrame>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12}>
            <CardTabsFrame title="Card with tabs" size="large" more={false} tabList={tabList} contentList={contentList} />
          </Col>
          <Col md={12}>
            <CardTabsFrame title="Card with tabs" size="large" more={true} tabList={tabList} contentList={contentList} />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12}>
            <CardTabsBtnFrame title="Card with button tabs" size="large" more={false} tabList={tabList} contentList={contentList} />
          </Col>
          <Col md={12}>
            <CardTabsBtnFrame title="Card with button tabs" size="large" more={true} tabList={tabList} contentList={contentList} />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12}>
            <CardFreshFrame title="Grid Card" size="large" more={false}>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Grid Card" size="large" more={false}>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
            </CardFreshFrame>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={8}>
            <Card hoverable style={{ width: '100%' }} cover={<img alt="example" src="https://images.unsplash.com/photo-1553342047-1a988767f0de?ixlib=rb-1.2.1&w=1000&q=80" />}>
              <Meta title="Customized content" description="www.instagram.com" />
            </Card>
          </Col>
          <Col md={8}>
            <Card hoverable style={{ width: '100%' }} cover={<img alt="example" src="https://images.unsplash.com/photo-1553342047-1a988767f0de?ixlib=rb-1.2.1&w=1000&q=80" />}>
              <Meta title="Customized content" description="www.instagram.com" />
            </Card>
          </Col>
          <Col md={8}>
            <Card hoverable style={{ width: '100%' }} cover={<img alt="example" src="https://images.unsplash.com/photo-1553342047-1a988767f0de?ixlib=rb-1.2.1&w=1000&q=80" />}>
              <Meta title="Customized content" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Cards;
