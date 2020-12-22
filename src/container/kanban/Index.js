import React, { lazy, Suspense } from 'react';
import { Switch, NavLink, Route, Link } from 'react-router-dom';
import { Row, Col, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { KanvanBoardWrap } from './style';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Kanban = () => {
  return (
    <>
      <PageHeader
        title="Kanban"
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
        <Row gutter={15}>
          <Col xs={24}>
            <KanvanBoardWrap>
              <Cards headless title="Product Design">
                <p>Kanvan column here</p>
              </Cards>
            </KanvanBoardWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Kanban;
