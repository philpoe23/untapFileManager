import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Heading from '../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { UserCard } from './style';
import { Dropdown } from '../../components/dropdown/dropdown';

const Team = ({ searchData, team }) => {
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

  const content = (
    <Fragment>
      <Link to="#">
        <FeatherIcon size={14} icon="eye" />
        <span>View</span>
      </Link>
      <Link to="#">
        <FeatherIcon size={14} icon="edit" />
        <span>Edit</span>
      </Link>
      <Link to="#">
        <FeatherIcon size={14} icon="trash-2" />
        <span>Delete</span>
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <CardToolbox>
        <PageHeader
          backIcon={false}
          title="Team Members"
          subTitle={
            <Fragment>
              <span className="title-counter">274 Users</span>
              <AutoComplete onSearch={handleSearch} dataSource={notdata} width="100%" patterns />
            </Fragment>
          }
          buttons={[
            <Button className="btn-add_new" size="default" key="1" type="primary">
              + Add New User
            </Button>,
          ]}
        />
      </CardToolbox>
      
      <Main>
        <Row gutter={25}>
          {team.map(user => {
            const { id, name, designation, img } = user;
            return (
              <Col key={id} xxl={6} lg={8} sm={12} xs={24}>
                <UserCard>
                  <div className="card team-card">
                    <Cards headless>
                      <figure>
                        <img src={require('../../' + img)} alt="" />
                        <figcaption>
                          <div className="edit">
                            <Dropdown content={content}>
                              <Link className="card__more_actions" to="#">
                                <FeatherIcon icon="more-horizontal" size={14} />
                              </Link>
                            </Dropdown>
                          </div>
                          <Heading className="card__name" as="h6">
                            <Link to="#">{name}</Link>
                          </Heading>
                          <span className="card__designation">{designation}</span>
                          <div className="card__social">
                            <Link className="btn-icon" to="#">
                              <FeatherIcon icon="facebook" size={14} />
                            </Link>
                            <Link className="btn-icon" to="#">
                              <FeatherIcon icon="twitter" size={14} />
                            </Link>
                            <Link className="btn-icon" to="#">
                              <FeatherIcon icon="youtube" size={14} />
                            </Link>
                            <Link className="btn-icon" to="#">
                              <FeatherIcon icon="instagram" size={14} />
                            </Link>
                          </div>
                        </figcaption>
                      </figure>
                    </Cards>
                  </div>
                </UserCard>
              </Col>
            );
          })}
        </Row>
      </Main>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
    team: state.team,
  };
};
export default connect(mapStateToProps)(Team);
