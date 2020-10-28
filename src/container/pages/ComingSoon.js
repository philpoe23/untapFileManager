import React from 'react';
import { Row, Col, Input, Form } from 'antd';
import FeatherIcon from 'feather-icons-react';
import Countdown from 'react-countdown';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const ComingSoon = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    }
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          textAlign: 'center',
          width: '600px',
          margin: 'auto',
          fontSize: '24px',
        }}
      >
        <span>
          {days} <br /> Days
        </span>
        <span>
          {hours} <br />
          Hours
        </span>
        <span>
          {minutes}
          <br />
          Minutes
        </span>
        <span>
          {seconds} <br /> Seconds
        </span>
      </div>
    );
  };

  renderer.propTypes = {
    days: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    completed: PropTypes.node,
  };

  return (
    <>
      <PageHeader
        title="Coming Soon"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Cards headless>
              <img style={{ width: '120px' }} src={require('../../static/img/Logo_Dark.svg')} alt="" />
              <h1>We are coming soon</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry's standard dummy text ever
                since the 1500s,
              </p>
              <Countdown date={Date.now() + 1606546460} renderer={renderer} />
              <Form name="basic">
                <Row gutter={15}>
                  <Col md="6">
                    <Form.Item name="email" rules={[{ type: 'email', message: 'Please input your username!' }]}>
                      <Input placeholder="name@example.com" />
                    </Form.Item>
                  </Col>
                  <Col md={3}>
                    <Button size="large" type="primary" htmlType="submit">
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Form>
              <ul>
                <li>
                  <Link to="#">
                    <FontAwesome name="facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FontAwesome name="twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FontAwesome name="globe" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FontAwesome name="github" />
                  </Link>
                </li>
              </ul>
              <p>2020 © AazzTech</p>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ComingSoon;
