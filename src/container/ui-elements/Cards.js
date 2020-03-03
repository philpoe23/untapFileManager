import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Card } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

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

const CardContainer = () => {
  return (
    <Fragment>
      <PageHeader title="Cards" />
      <Main>
        <Row gutter={15}>
          <Col md={8}>
            <Cards title="Default Size Card" size="default" more>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Cards>
          </Col>
          <Col md={8}>
            <Cards title="Default Size Card" size="default">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Cards>
          </Col>
          <Col md={8}>
            <Cards title="Small Size Card" size="small" more>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Cards>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={8}>
            <Cards title="Small Size Card" size="small">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Cards>
          </Col>
          <Col md={8}>
            <Cards headless title="simple card">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Cards>
          </Col>
          <Col md={8}>
            <Cards headless title="simple card" size="large">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Cards>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12}>
            <Cards tabs title="Card with tabs" size="large" tabList={tabList} contentList={contentList} />
          </Col>
          <Col md={12}>
            <Cards tabs more title="Card with tabs" size="large" tabList={tabList} contentList={contentList} />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12}>
            <Cards
              tabs
              isbutton
              title="Card with button tabs"
              size="large"
              tabList={tabList}
              contentList={contentList}
            />
          </Col>
          <Col md={12}>
            <Cards
              tabs
              isbutton
              title="Card with button tabs"
              size="large"
              more
              tabList={tabList}
              contentList={contentList}
            />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Grid Card" size="large">
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Grid Card" size="large">
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
              <Card.Grid style={{ width: '50%' }}>Content</Card.Grid>
            </Cards>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={8}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1553342047-1a988767f0de?ixlib=rb-1.2.1&w=1000&q=80"
                />
              }
            >
              <Meta title="Customized content" description="www.instagram.com" />
            </Card>
          </Col>
          <Col md={8}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1553342047-1a988767f0de?ixlib=rb-1.2.1&w=1000&q=80"
                />
              }
            >
              <Meta title="Customized content" description="www.instagram.com" />
            </Card>
          </Col>
          <Col md={8}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1553342047-1a988767f0de?ixlib=rb-1.2.1&w=1000&q=80"
                />
              }
            >
              <Meta title="Customized content" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default CardContainer;
