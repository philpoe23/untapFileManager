import React, { Fragment } from 'react';
import { Row, Col, Progress } from 'antd';
import Heading from '../../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { connect } from 'react-redux';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { Link } from 'react-router-dom';

const Grid = () => {
  return (
    <Row gutter={15}>
      <Col md={8}>
        <Cards
          headless
          title={
            <div>
              <Heading as="h4">
                <Link to="/projectDetails/1">
                  Dashboard UI Project <small>EARLY</small>
                </Link>
              </Heading>
              <Dropdown
                content={
                  <Fragment>
                    <Link to="#">More One</Link>
                    <Link to="#">More Tow</Link>
                    <Link to="#">More Three</Link>
                    <Link to="#">More Four</Link>
                  </Fragment>
                }
              >
                <Link to="#">
                  <FeatherIcon icon="more-horizontal" size={18} />
                </Link>
              </Dropdown>
            </div>
          }
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          <Row>
            <Col md={6}>
              <Heading as="h6">Start Date</Heading>
              <p>26 Dec 2019</p>
            </Col>
            <Col md={6}>
              <Heading as="h6">Deadline</Heading>
              <p>18 Mar 2020</p>
            </Col>
          </Row>
          <Progress percent={84} status="active" />
          <p>12/15 Task Completed</p>
          <hr />
          <p>Assigned To</p>
          <img style={{ width: '35px' }} src={require(`../../../static/img/users/1.png`)} alt="" />
          <img style={{ width: '35px' }} src={require(`../../../static/img/users/2.png`)} alt="" />
          <img style={{ width: '35px' }} src={require(`../../../static/img/users/3.png`)} alt="" />
          <img style={{ width: '35px' }} src={require(`../../../static/img/users/4.png`)} alt="" />
          <img style={{ width: '35px' }} src={require(`../../../static/img/users/5.png`)} alt="" />
          <img style={{ width: '35px' }} src={require(`../../../static/img/users/6.png`)} alt="" />
          <img style={{ width: '35px' }} src={require(`../../../static/img/users/7.png`)} alt="" />
        </Cards>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    //productsAll: state.products,
  };
};

export default connect(mapStateToProps)(Grid);
