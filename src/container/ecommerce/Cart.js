import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
//import { Switch, NavLink, Route } from 'react-router-dom';
//import FeatherIcon from 'feather-icons-react';

const ShoppingCart = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Shopping Cart" />
      <Main>
        <Row gutter={15}>
          <Col md={24}></Col>
        </Row>
      </Main>
    </Fragment>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    //sortings: sortBy => dispatch(sorting(sortBy)),
  };
};

const mapStateToProps = state => {
  return {
    //searchData: state.headerSearchData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
