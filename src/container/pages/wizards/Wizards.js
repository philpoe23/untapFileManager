import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const WizardsOne = lazy(() => import('./overview/WizardsOne'));
const WizardsTwo = lazy(() => import('./overview/WizardsTwo'));
const WizardsThree = lazy(() => import('./overview/WizardsThree'));
const WizardsFour = lazy(() => import('./overview/WizardsFour'));
const WizardsFive = lazy(() => import('./overview/WizardsFive'));
const WizardsSix = lazy(() => import('./overview/WizardsSix'));

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
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards headless>
                <WizardsSix />
              </Cards>
            </Suspense>
          </Col>
          <Col sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards headless>
                <WizardsFive />
              </Cards>
            </Suspense>
          </Col>
          <Col sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards headless>
                <WizardsFour />
              </Cards>
            </Suspense>
          </Col>
          <Col sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards headless>
                <WizardsThree />
              </Cards>
            </Suspense>
          </Col>
          <Col sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards headless>
                <WizardsTwo />
              </Cards>
            </Suspense>
          </Col>
          <Col sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards headless>
                <WizardsOne />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Wizards;
