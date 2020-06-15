import React, { Fragment, lazy, useState, Suspense } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Select } from 'antd';
import { Switch, NavLink, Route, Link } from 'react-router-dom';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import FeatherIcon from 'feather-icons-react';
import { Button } from '../../components/buttons/buttons';
import CreateProject from './overview/CreateProject';
import { filterProjectByStatus, sortingProjectByCategory } from '../../redux/project/actionCreator';
import { ProjectHeader, ProjectSorting } from './style';

const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

const Project = ({ match }) => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.headerSearchData);

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
    dispatch(sortingProjectByCategory(selectedItems));
  };

  const onChangeCategory = e => {
    e.preventDefault();
    dispatch(filterProjectByStatus(e.currentTarget.getAttribute('data-category')));
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
      <ProjectHeader>
        <PageHeader
          ghost
          title="Projects"
          subTitle={<Fragment>12 Running Projects</Fragment>}
          buttons={[
            <Button onClick={showModal} key="1" type="primary" size="default">
              + Create Projects
            </Button>,
          ]}
        />
      </ProjectHeader>
      <Main>
          <Row gutter={25}>
            <Col md={24}>
              <ProjectSorting>
                <div className="project-sort-bar">
                  <div className="project-sort-nav">
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
                  </div>
                  <div className="project-sort-search">
                    <AutoComplete onSearch={handleSearch} dataSource={notdata} patterns />
                  </div>
                  <div className="project-sort-group">
                    <div className="sort-group">
                      <span>Sort By:</span>
                      <Select onChange={onSorting} defaultValue="category">
                        <Select.Option value="category">Project Category</Select.Option>
                        <Select.Option value="rate">Top Rated</Select.Option>
                        <Select.Option value="popular">Popular</Select.Option>
                        <Select.Option value="time">Newest</Select.Option>
                        <Select.Option value="price">Price</Select.Option>
                      </Select>
                      <div className="layout-style">
                        <NavLink to={match.path}>
                          <FeatherIcon icon="grid" size={16} />
                        </NavLink>
                        <NavLink to={match.path + '/list'}>
                          <FeatherIcon icon="list" size={16} />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </ProjectSorting>
              <div>
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
              </div>
            </Col>
          </Row>
      </Main>
      <CreateProject onCancel={onCancel} visible={visible} />
    </Fragment>
  );
};

export default Project;
