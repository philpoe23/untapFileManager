import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import WizardsOne from './overview/WizardsOne';
import WizardsTwo from './overview/WizardsTwo';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const Wizards = () => {
  return (
    <>
      <PageHeader
        title="Wizards"
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
          <Col sm={24} xs={24}>
            <Cards headless>
              <WizardsTwo />
            </Cards>
          </Col>
          <Col sm={24} xs={24}>
            <Cards headless>
              <WizardsOne />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Wizards;
