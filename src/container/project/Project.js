import React, { Fragment, lazy, useState, Suspense } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { Row, Col, Spin, Select } from 'antd';
import { Switch, NavLink, Route, Link } from 'react-router-dom';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import FeatherIcon from 'feather-icons-react';
import { sorting } from '../../redux/actions/products';
import { Button } from '../../components/buttons/buttons';
import CreateProject from './overview/CreateProject';
import { filterProjectByStatus, sortingProjectByCategory } from '../../redux/project/actionCreator';

const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

const Project = ({ searchData, sortings, match, filterProjectByStatus, sortingProjectByCategory }) => {
  const [state, setState] = useState({
    notdata: searchData,
    visible: false,
  });

  const { notdata, visible } = state;
  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const onSorting = selectedItems => {
    sortingProjectByCategory(selectedItems);
  };

  const onChangeCategory = e => {
    e.preventDefault();
    filterProjectByStatus(e.currentTarget.getAttribute('data-category'));
  };

  const showModal = e => {
    setState({
      visible: true,
    });
  };

  const onCancel = e => {
    setState({
      visible: false,
    });
  };

  return (
    <Fragment>
      <PageHeader
        ghost
        title="Projects | "
        subTitle={<Fragment>12 Running Projects</Fragment>}
        buttons={[
          <Button onClick={showModal} key="1" type="primary">
            + Create Projects
          </Button>,
        ]}
      />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Row gutter={15}>
              <Col md={6}>
                <nav>
                  <ul>
                    <li>
                      <Link onClick={onChangeCategory} data-category="all" to="#">
                        All
                      </Link>
                    </li>
                    <li>
                      <Link onClick={onChangeCategory} data-category="progress" to="#">
                        In Progress
                      </Link>
                    </li>
                    <li>
                      <Link onClick={onChangeCategory} data-category="complete" to="#">
                        Complete
                      </Link>
                    </li>
                    <li>
                      <Link onClick={onChangeCategory} data-category="late" to="#">
                        Late
                      </Link>
                    </li>
                    <li>
                      <Link onClick={onChangeCategory} data-category="early" to="#">
                        Early
                      </Link>
                    </li>
                  </ul>
                </nav>
              </Col>
              <Col md={12}>
                <AutoComplete onSearch={handleSearch} dataSource={notdata} width="40%" patterns />
              </Col>
              <Col md={6}>
                Sort By :
                <Select style={{ width: '70%' }} onChange={onSorting} defaultValue="category">
                  <Select.Option value="category">Project Category</Select.Option>
                  <Select.Option value="rate">Top Rated</Select.Option>
                  <Select.Option value="popular">Popular</Select.Option>
                  <Select.Option value="time">Newest</Select.Option>
                  <Select.Option value="price">Price</Select.Option>
                </Select>
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
      <CreateProject onCancel={onCancel} visible={visible} />
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    sortings: sortBy => dispatch(sorting(sortBy)),
    filterProjectByStatus: status => dispatch(filterProjectByStatus(status)),
    sortingProjectByCategory: category => dispatch(sortingProjectByCategory(category)),
  };
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Project);
