import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import { connect } from 'react-redux';
import { Row, Col, Pagination } from 'antd';
import Heading from '../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { UserCard } from './style';

const Users = ({ searchData, users }) => {
  const [state, setState] = useState({
    notdata: searchData,
  });
  let { notdata } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  const onChange = page => {
    console.log(page);
  };

  return (
    <Fragment>
      <CardToolbox>
        <PageHeader
          ghost
          title="Users Card"
          subTitle={
            <Fragment>
              274 Users <AutoComplete onSearch={handleSearch} dataSource={notdata} width="100%" patterns />
            </Fragment>
          }
          buttons={[
            <Button size="default" type="primary" key="1">
              <Link to="/pages/add-user">+ Add New User</Link>
            </Button>,
          ]}
        />
      </CardToolbox>
      <Main>
        <Row gutter={15}>
          {users.map(user => {
            const { id, name, designation, img } = user;
            return (
              <Col key={id} md={6}>
                <UserCard>
                  <div className="card user-card">
                    <Cards headless>
                      <figure>
                        <img src={require('../../' + img)} alt="" />
                      </figure>
                      <figcaption>
                        <div className="card__content">
                          <Heading className="card__name" as="h6">
                            <Link to="#">{name}</Link>
                          </Heading>
                          <p className="card__designation">{designation}</p>
                        </div>
                        
                        <div className="card__actions">
                          <Button size="default" type="white">
                            <FeatherIcon icon="mail" size={14} />
                            Message
                          </Button>
                          <Button size="default" type="white">
                            <FeatherIcon icon="user-plus" size={14} />
                            Follow
                          </Button>
                        </div>
                        <div className="card__info">
                          <Row gutter={15}>
                            <Col md={8}>
                              <div className="info-single">
                                <Heading className="info-single__title" as="h2">$72,572</Heading>
                                <p>Total Revenue</p>
                              </div>
                            </Col>
                            <Col md={8}>
                              <div className="info-single">
                                <Heading className="info-single__title" as="h2">3,257</Heading>
                                <p>Orders</p>
                              </div>
                            </Col>
                            <Col md={8}>
                              <div className="info-single">
                                <Heading className="info-single__title" as="h2">74</Heading>
                                <p>Products</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </figcaption>
                    </Cards>
                  </div>
                </UserCard>
              </Col>
            );
          })}
          <Pagination
            onChange={onChange}
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={6}
            total={500}
          />
        </Row>
      </Main>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
    users: state.users,
  };
};

export default connect(mapStateToProps)(Users);
