import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Heading from '../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
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
      <PageHeader
        ghost
        title="Team Members | "
        subTitle={
          <Fragment>
            274 Users <AutoComplete onSearch={handleSearch} dataSource={notdata} width="100%" patterns />
          </Fragment>
        }
        buttons={[
          <Button key="1" type="primary">
            + Add New Members
          </Button>,
        ]}
      />

      <Main>
        <Row gutter={15}>
          {team.map(user => {
            const { id, name, designation, img } = user;
            return (
              <Col key={id} md={4}>
                <Cards headless>
                  <figure>
                    <img src={require('../../' + img)} alt="" />
                    <figcaption>
                      <div className="edit">
                        <Dropdown content={content}>
                          <Link to="#">
                            <FeatherIcon icon="more-horizontal" size={14} />
                          </Link>
                        </Dropdown>
                      </div>
                      <Heading as="h6">
                        <Link to="#">{name}</Link>
                      </Heading>
                      <p>{designation}</p>
                      <div>
                        <Link to="#">
                          <FeatherIcon icon="facebook" size={14} />
                        </Link>
                        <Link to="#">
                          <FeatherIcon icon="twitter" size={14} />
                        </Link>
                        <Link to="#">
                          <FeatherIcon icon="youtube" size={14} />
                        </Link>
                        <Link to="#">
                          <FeatherIcon icon="instagram" size={14} />
                        </Link>
                      </div>
                    </figcaption>
                  </figure>
                </Cards>
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
