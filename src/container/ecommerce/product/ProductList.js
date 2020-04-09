import React, { Fragment, lazy, useState } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { connect } from 'react-redux';
import { Row, Col, Radio } from 'antd';
import { Switch, NavLink, Route } from 'react-router-dom';
import { AutoComplete } from '../../../components/autoComplete/autoComplete';
import FeatherIcon from 'feather-icons-react';
import { sorting } from '../../../redux/actions/products';

const Filters = lazy(() => import('./overview/Filters'));
const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

const ProductList = ({ searchData, sortings }) => {
  const [state, setState] = useState({
    notdata: searchData,
  });
  const { notdata } = state;
  const patternSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const onSorting = e => {
    sortings(e.target.value);
  };
  return (
    <Fragment>
      <PageHeader ghost title="Shop" />
      <Main>
        <Row gutter={15}>
          <Col md={5}>
            <Switch>
              <Filters />
            </Switch>
          </Col>
          <Col md={19}>
            <Row gutter={15}>
              <Col md={8}>
                <AutoComplete onSearch={patternSearch} dataSource={notdata} width="80%" patterns />
              </Col>
              <Col md={7}>
                <p>Showing 1–8 of 86 results</p>
              </Col>
              <Col md={9}>
                Sort By :
                <Radio.Group onChange={onSorting} defaultValue={3}>
                  <Radio.Button value="rate">Top Rated</Radio.Button>
                  <Radio.Button value="popular">Popular</Radio.Button>
                  <Radio.Button value="time">Newest</Radio.Button>
                  <Radio.Button value="price">Price</Radio.Button>
                </Radio.Group>
                <NavLink to="/ecommerce/productGrid">
                  <FeatherIcon icon="grid" size={16} />
                </NavLink>
                <NavLink to="/ecommerce/productList">
                  <FeatherIcon icon="list" size={16} />
                </NavLink>
              </Col>
            </Row>
            <Row gutter={15}>
              <Route exact path="/ecommerce/productGrid" component={Grid} />
              <Route path="/ecommerce/productList" component={List} />
            </Row>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    sortings: sortBy => dispatch(sorting(sortBy)),
  };
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
