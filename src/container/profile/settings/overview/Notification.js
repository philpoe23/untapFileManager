import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Row, Col, Switch } from 'antd';
import { Button } from '../../../../components/buttons/buttons';
import Heading from '../../../../components/heading/heading';
import { Link } from 'react-router-dom';
import { NotificationWrapper } from './style';

const listStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 0,
  padding: 0,
};

const Notification = () => {
  return (
    <NotificationWrapper>
      <Cards
        title={
          <div className="setting-card-title">
            <Heading as="h4">Notifications</Heading>
            <span>Choose What Notification you will Receive</span>
          </div>
        }
      >
        <Row gutter={15}>
          <Col md={24}>
            <div className="notification-box-single">
              <Cards headless bodyStyle={{ backgroundColor: '#F7F8FA', borderRadius: 10 }}>
                <div
                  style={{
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  className="notification-header"
                >
                  <Heading className="notification-header__text" as="h4">Notifications</Heading>
                  <Link className="btn-toggle" to="#">Toggle all</Link>
                </div>
                <div className="notification-body">
                  <Cards headless>
                    <nav>
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <Heading className="notification-list-single__title" as="h4">Company News</Heading>
                            <p>Get Company News, announcements, and product updates</p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <Heading className="notification-list-single__title" as="h4">Meetups Near you</Heading>
                            <p>Get Company News, announcements, and product updates</p>
                          </div>
                          <Switch defaultChecked={true} />
                        </li>
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <Heading className="notification-list-single__title" as="h4">Opportunities</Heading>
                            <p>Get Company News, announcements, and product updates</p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <Heading className="notification-list-single__title" as="h4">Weekly News Letters</Heading>
                            <p>Get Company News, announcements, and product updates</p>
                          </div>
                          <Switch defaultChecked={true} />
                        </li>
                      </ul>
                    </nav>
                  </Cards>
                </div>
              </Cards>
            </div>  
          </Col>

          <Col md={24}>
            <div className="notification-box-single">
              <Cards headless bodyStyle={{ backgroundColor: '#F7F8FA', borderRadius: 10 }}>
                <div
                  style={{
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  className="notification-header"
                >
                  <Heading className="notification-header__text" as="h4">Account Activity</Heading>
                  <Link className="btn-toggle" to="#">Toggle all</Link>
                </div>
                <div className="notification-body">
                <Cards headless>
                    <nav>
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <Heading className="notification-list-single__title" as="h4">Company News</Heading>
                            <p>Get Company News, announcements, and product updates</p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <Heading className="notification-list-single__title" as="h4">Meetups Near you</Heading>
                            <p>Get Company News, announcements, and product updates</p>
                          </div>
                          <Switch defaultChecked={true} />
                        </li>
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <Heading className="notification-list-single__title" as="h4">Opportunities</Heading>
                            <p>Get Company News, announcements, and product updates</p>
                          </div>
                          <Switch defaultChecked={false} />
                        </li>
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <Heading className="notification-list-single__title" as="h4">Weekly News Letters</Heading>
                            <p>Get Company News, announcements, and product updates</p>
                          </div>
                          <Switch defaultChecked={true} />
                        </li>
                      </ul>
                    </nav>
                </Cards>
                </div>
              </Cards>
            </div>
          </Col>
        </Row>
        <div className="notification-actions">
          <Button size="default" type="primary">Update Social Profile</Button>
          &nbsp; &nbsp;
          <Button size="default" type="default">Cancel</Button>
        </div>
      </Cards>
    </NotificationWrapper>
    
  );
};

export default Notification;
