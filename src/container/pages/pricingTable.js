import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { PricingCard, ListGroup, Badge } from './style';
import { List } from '../../components/pricing/pricing';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const PricingTable = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Pricing Table" />
      <Main>
        <Row gutter={15}>
          <Col md={6}>
            <PricingCard style={{marginBottom: 30}}>
              <Badge type="dark">Free Forever</Badge>
              <Heading className="pricing-title" as="h3">Free</Heading>
              <p>For Individuals</p>
              <ListGroup>
                <List text="100MB File Space" />
                <List text="2 Active Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
              </ListGroup>
              <Button size="default" type="default">Current Plan</Button>
            </PricingCard>
          </Col>
          <Col md={6}>
            <PricingCard style={{marginBottom: 30}}>
              <Badge type="primary">Basic Plan</Badge>
              <Heading as="h3">
                <sup>$</sup>19 <sub>Per month</sub>
              </Heading>
              <p>For 2 Users</p>
              <ListGroup>
                <List text="100GB File Space" />
                <List text="300 Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
                <List text="Custom Post Types" />
              </ListGroup>
              <Button size="default" type="primary">Get Started</Button>
            </PricingCard>
          </Col>
          <Col md={6}>
            <PricingCard style={{marginBottom: 30}}>
              <Badge type="secondary">Business</Badge>
              <Heading as="h3">
                <sup>$</sup>39 <sub>Per month</sub>
              </Heading>
              <p>For 10 Users</p>
              <ListGroup>
                <List text="100GB File Space" />
                <List text="300 Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
                <List text="Custom Post Types" />
                <List text="Subtasks" />
              </ListGroup>
              <Button size="default" type="secondary">Get Started</Button>
            </PricingCard>
          </Col>
          <Col md={6}>
            <PricingCard style={{marginBottom: 30}}>
              <Badge type="success">Enterprise</Badge>
              <Heading as="h3">
                <sup>$</sup>79 <sub>Per month</sub>
              </Heading>
              <p>For 50 Users</p>
              <ListGroup>
                <List text="100GB File Space" />
                <List text="300 Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
                <List text="Custom Post Types" />
                <List text="Subtasks" />
              </ListGroup>
              <Button size="default" type="success">Get Started</Button>
            </PricingCard>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <Row gutter={15}>
                <Col md={6}>
                  <PricingCard>
                    <Badge type="dark">Free Forever</Badge>
                    <Heading as="h3">Free</Heading>
                    <p>For Individuals</p>
                    <ListGroup>
                      <List text="100MB File Space" />
                      <List text="2 Active Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                    </ListGroup>
                    <Button size="default" type="default">Current Plan</Button>
                  </PricingCard>
                </Col>
                <Col md={6}>
                  <PricingCard>
                    <Badge type="primary">Basic Plan</Badge>
                    <Heading as="h3">
                      <sup>$</sup>19 <sub>Per month</sub>
                    </Heading>
                    <p>For 2 Users</p>
                    <ListGroup>
                      <List text="100GB File Space" />
                      <List text="300 Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                      <List text="Custom Post Types" />
                    </ListGroup>
                    <Button size="default" type="primary">Get Started</Button>
                  </PricingCard>
                </Col>
                <Col md={6}>
                  <PricingCard>
                    <Badge type="secondary">Business</Badge>
                    <Heading as="h3">
                      <sup>$</sup>39 <sub>Per month</sub>
                    </Heading>
                    <p>For 10 Users</p>
                    
                    <ListGroup>
                      <List text="100GB File Space" />
                      <List text="300 Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                      <List text="Custom Post Types" />
                      <List text="Subtasks" />
                    </ListGroup>
                    <Button size="default" type="secondary">Get Started</Button>
                  </PricingCard>
                </Col>
                <Col md={6}>
                  <PricingCard>
                    <Badge type="success">Enterprise</Badge>
                    <Heading as="h3">
                      <sup>$</sup>79 <sub>Per month</sub>
                    </Heading>
                    <p>For 50 Users</p>
                    <ListGroup>
                      <List text="100GB File Space" />
                      <List text="300 Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                      <List text="Custom Post Types" />
                      <List text="Subtasks" />
                    </ListGroup>
                    <Button size="default" type="success">Get Started</Button>
                  </PricingCard>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default PricingTable;
