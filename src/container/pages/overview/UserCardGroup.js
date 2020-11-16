import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row, Progress } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { UserCard } from '../style';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';

const UserCardGroup = ({ user }) => {
  const { title, company, img, icon, content } = user;
  return (
    <UserCard>
      <div className="card user-card">
        <Cards headless>
          <figure>
            <img src={require(`../../../${icon}`)} alt="" />
            <figcaption>
              <div className="card__content">
                <Heading className="card__name" as="h6">
                  <Link to="#">{title}</Link>
                  <Dropdown
                    content={
                      <>
                        <Link to="#">View</Link>
                        <Link to="#">Edit</Link>
                        <Link to="#">Leave</Link>
                        <Link to="#">Delete</Link>
                      </>
                    }
                  >
                    <Link to="#">
                      <FeatherIcon icon="more-horizontal" />
                    </Link>
                  </Dropdown>
                </Heading>
                <p className="card__designation">{company}</p>
                <p>{content}</p>
                {img.map((item, key) => {
                  return <img style={{ width: ' 30px' }} key={key + 1} src={require(`../../../${item}`)} alt="" />;
                })}
              </div>
              <div className="card__info">
                <p>
                  <span>Current project</span>
                  <span>Project Completed</span>
                </p>
                <h2>
                  <span>Plugin Development</span>
                  <span>45</span>
                </h2>
                <Row gutter={5}>
                  <Col xs={20}>
                    <Progress
                      percent={70}
                      strokeWidth={5}
                      status="active"
                      showInfo={false}
                      className="progress-dt progress-primary"
                    />
                  </Col>
                  <Col xs={4}>70%</Col>
                </Row>
                <p>12 / 15 tasks completed</p>
              </div>
            </figcaption>
          </figure>
        </Cards>
      </div>
    </UserCard>
  );
};

UserCardGroup.propTypes = {
  user: PropTypes.object,
};

export default UserCardGroup;
