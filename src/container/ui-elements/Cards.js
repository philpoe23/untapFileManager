import React from 'react';
import { Row, Col, Card } from 'antd';
import { NavLink } from 'react-router-dom';
import { CardStyleWrapper } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const content = (
  <>
    <NavLink to="#">
      <span>More one</span>
    </NavLink>
    <NavLink to="#">
      <span>More two</span>
    </NavLink>
    <NavLink to="#">
      <span>More three</span>
    </NavLink>
  </>
);

const CardContainer = () => {
  return (
    <>
      <PageHeader title="Cards" />
      <Main>
        <Row gutter={25}>
          <Col md={24}>
            <Cards title="Basic card" size="large">
              <Col md={8} style={{ padding: 0 }}>
                <CardStyleWrapper>
                  <Cards title="Default Size Card" border size="default" moreText more={content} style={{ width: 400 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Cards>
                  <Cards title="Small size card" border size="small" moreText more={content} style={{ width: 400 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Cards>
                </CardStyleWrapper>
              </Col>
            </Cards>
            <Cards title="No border" size="large">
              <Col md={8} style={{ padding: 0, marginBottom: '-20px' }}>
                <CardStyleWrapper>
                  <Cards
                    title="Default Size Card"
                    border={false}
                    size="default"
                    moreText
                    more={content}
                    style={{ width: 400 }}
                  >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Cards>
                </CardStyleWrapper>
              </Col>
            </Cards>
            <Cards title="Simple card" size="large">
              <Col md={8} style={{ padding: 0, marginBottom: '-20px' }}>
                <CardStyleWrapper>
                  <Cards headless border size="default">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Cards>
                </CardStyleWrapper>
              </Col>
            </Cards>
          </Col>
        </Row>
        <Cards title="Card In Column" size="large">
          <div className="columnCardsWrapper">
            <Row gutter={16}>
              <Col span={8}>
                <CardStyleWrapper>
                  <Cards title="Card title" border={false} size="default">
                    <p>Card content</p>
                  </Cards>
                </CardStyleWrapper>
              </Col>
              <Col span={8}>
                <CardStyleWrapper>
                  <Cards title="Card title" border={false} size="default">
                    <p>Card content</p>
                  </Cards>
                </CardStyleWrapper>
              </Col>
              <Col span={8}>
                <CardStyleWrapper>
                  <Cards title="Card title" border={false} size="default">
                    <p>Card content</p>
                  </Cards>
                </CardStyleWrapper>
              </Col>
            </Row>
          </div>
        </Cards>

        <Row gutter={15}>
          <Col md={24}>
            <Cards title="Grid Card" size="large">
              <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
              <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
              <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
              <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
              <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
              <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
              <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
              <Card.Grid style={{ width: '25%', textAlign: 'center', padding: 24 }}>Content</Card.Grid>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default CardContainer;
