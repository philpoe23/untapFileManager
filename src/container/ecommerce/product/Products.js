import React, { Fragment, lazy, useState, Suspense } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Spin } from 'antd';
import { Switch, NavLink, Route } from 'react-router-dom';
import { AutoComplete } from '../../../components/autoComplete/autoComplete';
import { TopToolBox } from '../Style';
import FeatherIcon from 'feather-icons-react';
import { sorting } from '../../../redux/product/actionCreator';

const Filters = lazy(() => import('./overview/Filters'));
const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

const Product = ({ match }) => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.headerSearchData);

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
    dispatch(sorting(e.target.value));
  };

  return (
    <Fragment>
      <PageHeader ghost title="Shop" />
      <Main>
        <Row gutter={30}>
          <Col xxl={5} xl={7} lg={7} md={10} xs={24}>
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
          <Col xxl={19} xl={17} lg={17} md={14}>
            <TopToolBox>
              <Row gutter={0}>
                <Col xxl={7} lg={12} xs={24}>
                  <AutoComplete onSearch={handleSearch} dataSource={notdata} width="100%" patterns />
                </Col>
                <Col xxl={7} lg={12} xs={24}>
                  <p className="search-result">Showing 1–8 of 86 results</p>
                </Col>
                <Col xxl={10} xs={24}>
                  <div className="product-list-action d-flex justify-content-between align-items-center">
                    <div className="product-list-action__tab">
                      Sort By :
                      <Radio.Group onChange={onSorting} defaultValue={'rate'}>
                        <Radio.Button value="rate">Top Rated</Radio.Button>
                        <Radio.Button value="popular">Popular</Radio.Button>
                        <Radio.Button value="time">Newest</Radio.Button>
                        <Radio.Button value="price">Price</Radio.Button>
                      </Radio.Group>
                    </div>

                    <div className="product-list-action__viewmode">
                      <NavLink to={match.path}>
                        <FeatherIcon icon="grid" size={16} />
                      </NavLink>
                      <NavLink to={match.path + '/list'}>
                        <FeatherIcon icon="list" size={16} />
                      </NavLink>
                    </div>
                  </div>
                </Col>
              </Row>
            </TopToolBox>
            
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
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Product;
