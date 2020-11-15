import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { CardBarChart2, EChartCard } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const AverageSalesRevenue = lazy(() => import('./overview/sales/AverageSalesRevenue'));
const SalesGrowth = lazy(() => import('./overview/sales/SalesGrowth'));
const SalesTarget = lazy(() => import('./overview/sales/SalesTarget'));
const TopSellingProduct = lazy(() => import('./overview/sales/TopSellingProduct'));
const TopCountriesRevenue = lazy(() => import('./overview/sales/TopCountriesRevenue'));

const Sales = () => {
  return (
    <>
      <PageHeader
        ghost
        title="Sales Dashboard"
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
          <Col xxl={8} md={12} sm={12} xs={24}>
            <Cards headless>
              <EChartCard>
                <div>
                  <img src={require('../../static/img/icon/New Customer.svg')} alt="" />
                </div>
                <div className="card-chunk">
                  <CardBarChart2>
                    <h2>7,461</h2>
                    <span>New Customer</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
              </EChartCard>
            </Cards>

            <Cards headless>
              <EChartCard>
                <div>
                  <img src={require('../../static/img/icon/SalesRevenue.svg')} alt="" />
                </div>
                <div className="card-chunk">
                  <CardBarChart2>
                    <h2>$28,947</h2>
                    <span>Sales Revenue</span>
                    <p>
                      <span className="growth-downward">
                        <FeatherIcon icon="arrow-down" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
              </EChartCard>
            </Cards>

            <Cards headless>
              <EChartCard>
                <div>
                  <img src={require('../../static/img/icon/Profit.svg')} alt="" />
                </div>
                <div className="card-chunk">
                  <CardBarChart2>
                    <h2>$3,241</h2>
                    <span>Profit</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col md={16}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AverageSalesRevenue />
            </Suspense>
          </Col>
          <Col md={8}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SalesTarget />
            </Suspense>
          </Col>
          <Col md={8}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SalesGrowth />
            </Suspense>
          </Col>
          <Col md={8}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TopCountriesRevenue />
            </Suspense>
          </Col>
          <Col md={12}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TopSellingProduct />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Sales;
