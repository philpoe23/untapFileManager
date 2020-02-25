import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { CardFreshFrame } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { ChartjsBarChart, ChartjsHorizontalChart, ChartjsStackedChart, ChartjsLineChart, ChartjsAreaChart, ChartjsBarChartTransparent, ChartjsDonutChart, ChartjsPieChart } from '../../components/charts/chartjs';

const ChartJs = () => {
  return (
    <Fragment>
      <PageHeader title="Chart Js" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardFreshFrame title="Bar Chart" size="large" more={false}>
              <ChartjsBarChart className={'foo'} style={{ marginBottom: '20px' }} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Horizontal  Chart" size="large" more={false}>
              <ChartjsHorizontalChart />
            </CardFreshFrame>
          </Col>

          <Col md={12}>
            <CardFreshFrame title="Stacked  Chart" size="large" more={false}>
              <ChartjsStackedChart />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Line  Chart" size="large" more={false}>
              <ChartjsLineChart />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Area  Chart" size="large" more={false}>
              <ChartjsAreaChart />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Transparent  Chart" size="large" more={false}>
              <ChartjsBarChartTransparent />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Donut  Chart" size="large" more={false}>
              <ChartjsDonutChart />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Pie  Chart" size="large" more={false}>
              <ChartjsPieChart />
            </CardFreshFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default ChartJs;
