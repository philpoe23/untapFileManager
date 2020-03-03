import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import {
  ChartjsBarChart,
  ChartjsHorizontalChart,
  ChartjsStackedChart,
  ChartjsLineChart,
  ChartjsAreaChart,
  ChartjsBarChartTransparent,
  ChartjsDonutChart,
  ChartjsPieChart,
} from '../../components/charts/chartjs';

const ChartJs = () => {
  return (
    <Fragment>
      <PageHeader title="Chart Js" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Bar Chart" size="large">
              <ChartjsBarChart className={'foo'} style={{ marginBottom: '20px' }} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Horizontal  Chart" size="large">
              <ChartjsHorizontalChart />
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Stacked  Chart" size="large">
              <ChartjsStackedChart />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Line  Chart" size="large">
              <ChartjsLineChart />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Area  Chart" size="large">
              <ChartjsAreaChart />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Transparent  Chart" size="large">
              <ChartjsBarChartTransparent />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Donut  Chart" size="large">
              <ChartjsDonutChart />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Pie  Chart" size="large">
              <ChartjsPieChart />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default ChartJs;
