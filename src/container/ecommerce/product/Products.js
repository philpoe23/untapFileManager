import React, { Fragment, lazy, useState, Suspense } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { connect } from 'react-redux';
import { Row, Col, Radio, Spin } from 'antd';
import { Switch, NavLink, Route } from 'react-router-dom';
import { AutoComplete } from '../../../components/autoComplete/autoComplete';
import FeatherIcon from 'feather-icons-react';
import { sorting } from '../../../redux/product/actionCreator';

const Filters = lazy(() => import('./overview/Filters'));
const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

const Product = ({ searchData, sortings, match }) => {
  const [state, setState] = useState({
    notdata: searchData,
  });
  const { notdata } = state;
  const handleSearch = searchText => {
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
            <Suspense
              fallback={
                <div className="spin">
                  <Spin />
                </div>
              }
            >
              <Filters />
            </Suspense>
          </Col>
          <Col md={19}>
            <Row gutter={15}>
              <Col md={8}>
                <AutoComplete onSearch={handleSearch} dataSource={notdata} width="80%" patterns />
              </Col>
              <Col md={7}>
                <p>Showing 1–8 of 86 results</p>
              </Col>
              <Col md={9}>
                Sort By :
                <Radio.Group onChange={onSorting} defaultValue={'rate'}>
                  <Radio.Button value="rate">Top Rated</Radio.Button>
                  <Radio.Button value="popular">Popular</Radio.Button>
                  <Radio.Button value="time">Newest</Radio.Button>
                  <Radio.Button value="price">Price</Radio.Button>
                </Radio.Group>
                <NavLink to={match.path}>
                  <FeatherIcon icon="grid" size={16} />
                </NavLink>
                <NavLink to={match.path + '/list'}>
                  <FeatherIcon icon="list" size={16} />
                </NavLink>
              </Col>
            </Row>
            <Row gutter={15}>
              <Switch>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Route exact path={match.path} component={Grid} />
                  <Route path={match.path + '/:list'} component={List} />
                </Suspense>
              </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
