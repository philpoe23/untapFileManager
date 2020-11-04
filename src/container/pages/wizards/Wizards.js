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
              <div className="wizard-side-border">
                <Cards headless>
                  <Row justify="center">
                    <Col md={17} xs={24}>
                      <WizardsSix />
                    </Col>
                  </Row>
                </Cards>
              </div>
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
              <div className="wizard-side-border">
                <Cards headless>
                  <Row justify="center">
                    <Col md={20} xs={24}>
                      <WizardsFive />
                    </Col>
                  </Row>
                </Cards>
              </div>
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
                <Row justify="center">
                  <Col md={16} xs={24}>
                    <WizardsFour />
                  </Col>
                </Row>
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
                <Row justify="center">
                  <Col md={18} xs={24}>
                    <WizardsThree />
                  </Col>
                </Row>
              </Cards>
            </Suspense>
          </Col>
          <Col xxl={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards headless>
                  <Row justify="center">
                    <Col xxl={18} xs={24}>
                      <WizardsTwo />
                    </Col>
                  </Row>
              </Cards>
            </Suspense>
          </Col>
          <Col xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards headless>
                <Row justify="center">
                  <Col xxl={18} xs={24}>
                    <WizardsOne />
                  </Col>
                </Row>
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Wizards;
