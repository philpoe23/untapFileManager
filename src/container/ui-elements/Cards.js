import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Card } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { NavLink } from 'react-router-dom';

const { Meta } = Card;

const content = (
  <Fragment>
    <NavLink to="#">
      <span>More one</span>
    </NavLink>
    <NavLink to="#">
      <span>More two</span>
    </NavLink>
    <NavLink to="#">
      <span>More three</span>
    </NavLink>
  </Fragment>
);

const CardContainer = () => {
  return (
    <Fragment>
      <PageHeader title="Cards" />
      <Main>
        <Row gutter={15}>
          <Col md={8}>
            <Cards title="Default Size Card" size="default" more={content}>
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
            <Cards title="Small Size Card" size="small" more={content}>
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
