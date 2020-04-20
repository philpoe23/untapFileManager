import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { Row, Col, Pagination } from 'antd';
import Heading from '../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

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
      <PageHeader
        ghost
        title="Users Card | "
        subTitle={
          <Fragment>
            274 Users <AutoComplete onSearch={handleSearch} dataSource={notdata} width="100%" patterns />
          </Fragment>
        }
        buttons={[
          <Button key="1" type="primary">
            + Add New User
          </Button>,
        ]}
      />

      <Main>
        <Row gutter={15}>
          {users.map(user => {
            const { id, name, designation, img } = user;

            return (
              <Col key={id} md={6}>
                <Cards headless>
                  <figure>
                    <img src={require('../../' + img)} alt="" />
                    <figcaption>
                      <Heading as="h6">
                        <Link to="#">{name}</Link>
                      </Heading>
                      <p>{designation}</p>
                      <div>
                        <Button type="default">
                          <FeatherIcon icon="mail" size={14} />
                          Message
                        </Button>
                        <Button type="default">
                          <FeatherIcon icon="user-plus" size={14} />
                          Follow
                        </Button>
                      </div>
                      <hr />
                      <Row gutter={15}>
                        <Col md={8}>
                          <Heading as="h2">$72,572</Heading>
                          <p>Total Revenue</p>
                        </Col>
                        <Col md={8}>
                          <Heading as="h2">3,257</Heading>
                          <p>Orders</p>
                        </Col>
                        <Col md={8}>
                          <Heading as="h2">74</Heading>
                          <p>Products</p>
                        </Col>
                      </Row>
                    </figcaption>
                  </figure>
                </Cards>
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
