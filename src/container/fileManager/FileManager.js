import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import SideNav from './overview/SideNav';
import { Header } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const FileManager = props => {
  return (
    <>
      <PageHeader
        title="File Manager"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col sm={6} xs={24}>
            <SideNav />
          </Col>
          <Col md={18}>
            <Cards headless>
              <Header>
                <Input
                  style={{ width: '350px' }}
                  size="large"
                  placeholder="large size"
                  prefix={<FeatherIcon icon="search" />}
                />
                <div className="list">
                  <NavLink to="#">
                    <FeatherIcon icon="grid" />
                  </NavLink>
                  <NavLink to="#">
                    <FeatherIcon icon="list" />
                  </NavLink>
                </div>
              </Header>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

FileManager.propTypes = {};

export default FileManager;
