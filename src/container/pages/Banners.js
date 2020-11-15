import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7 } from '../../components/banners/Banners';

const Banners = () => {
  return (
    <>
      <PageHeader
        title="Banners"
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
          <Col md={6} sm={24} xs={24}>
            <Banner1 />
          </Col>
          <Col md={6} sm={24} xs={24}>
            <Banner2 />
          </Col>
          <Col md={6} sm={24} xs={24}>
            <Banner3 />
          </Col>
          <Col md={6} sm={24} xs={24}>
            <Banner4 />
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Banner5 />
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Banner6 />
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Banner7 />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Banners;
