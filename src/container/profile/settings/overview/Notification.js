import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Row, Col, Switch, Button } from 'antd';
import Heading from '../../../../components/heading/heading';
import { Link } from 'react-router-dom';

const listStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '2px solid #F7F8FA',
  margin: 0,
  padding: 0,
};

const Notification = () => {
  return (
    <Cards
      title={
        <div>
          <Heading as="h4">Notifications</Heading>
          <span>Choose What Notification you will Receive</span>
        </div>
      }
    >
      <Row gutter={15}>
        <Col md={24}>
          <Cards headless bodyStyle={{ backgroundColor: '#F7F8FA' }}>
            <div
              style={{
                height: '50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              className="header"
            >
              <Heading as="h4">Notifications</Heading>
              <Link to="#">Toggle all</Link>
            </div>
            <Cards headless>
              <nav>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <li style={listStyle}>
                    <div>
                      <Heading as="h4">Company News</Heading>
                      <p>Get Company News, announcements, and product updates</p>
                    </div>
                    <Switch defaultChecked={false} />
                  </li>
                  <li style={listStyle}>
                    <div>
                      <Heading as="h4">Meetups Near you</Heading>
                      <p>Get Company News, announcements, and product updates</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </li>
                  <li style={listStyle}>
                    <div>
                      <Heading as="h4">Opportunities</Heading>
                      <p>Get Company News, announcements, and product updates</p>
                    </div>
                    <Switch defaultChecked={false} />
                  </li>
                  <li style={listStyle}>
                    <div>
                      <Heading as="h4">Weekly News Letters</Heading>
                      <p>Get Company News, announcements, and product updates</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </li>
                </ul>
              </nav>
            </Cards>
          </Cards>
        </Col>

        <Col md={24}>
          <Cards headless bodyStyle={{ backgroundColor: '#F7F8FA' }}>
            <div
              style={{
                height: '50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              className="header"
            >
              <Heading as="h4">Account Activity</Heading>
              <Link to="#">Toggle all</Link>
            </div>
            <Cards headless>
              <nav>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <li style={listStyle}>
                    <div>
                      <Heading as="h4">Company News</Heading>
                      <p>Get Company News, announcements, and product updates</p>
                    </div>
                    <Switch defaultChecked={false} />
                  </li>
                  <li style={listStyle}>
                    <div>
                      <Heading as="h4">Meetups Near you</Heading>
                      <p>Get Company News, announcements, and product updates</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </li>
                  <li style={listStyle}>
                    <div>
                      <Heading as="h4">Opportunities</Heading>
                      <p>Get Company News, announcements, and product updates</p>
                    </div>
                    <Switch defaultChecked={false} />
                  </li>
                  <li style={listStyle}>
                    <div>
                      <Heading as="h4">Weekly News Letters</Heading>
                      <p>Get Company News, announcements, and product updates</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </li>
                </ul>
              </nav>
            </Cards>
          </Cards>
        </Col>
      </Row>
      <Button type="primary">Update Social Profile</Button>
      &nbsp; &nbsp;
      <Button type="default">Cancel</Button>
    </Cards>
  );
};

export default Notification;
