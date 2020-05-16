import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Statistic, Button, Icon } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const { Countdown } = Statistic;

const Statistics = () => {
  const onFinish = () => {
    console.log('finished!');
  };

  return (
    <Fragment>
      <PageHeader ghost title="Statistics" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic" caption="The simplest use of Statistic">
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Active Users" value={112893} />
                </Col>
                <Col span={12}>
                  <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                  <Button style={{ marginTop: 16 }} type="primary">
                    Recharge
                  </Button>
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Unit" caption="The simplest use of Statistic">
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
                </Col>
                <Col span={12}>
                  <Statistic title="Unmerged" value={93} suffix="/ 100" />
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="In Card" caption="The simplest use of Statistic">
              <Row gutter={15}>
                <Col md={12}>
                  <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#20C997' }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                  />
                </Col>
                <Col md={12}>
                  <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#FF4D4F' }}
                    prefix={<Icon type="arrow-down" />}
                    suffix="%"
                  />
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Countdown" caption="The simplest use of Statistic">
              <Row gutter={15}>
                <Col md={12}>
                  <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
                </Col>
                <Col md={12}>
                  <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Statistics;
