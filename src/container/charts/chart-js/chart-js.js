import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { CardFreshFrame } from '../../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../../styled';
import { ChartjsBarChart, ChartjsHorizontalChart, ChartjsStackedChart, ChartjsLineChart, ChartjsAreaChart, ChartjsBarChartTransparent, ChartjsDonutChart, ChartjsPieChart } from '../../../components/charts/chartjs';

const Label = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const Data1 = [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30];
const Data2 = [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20];
const Color1 = '#001737';
const Color2 = '#1ce1ac';

const LabelRound = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const DataRound = [20, 20, 30, 5, 25];
const ColorRound = ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'];

const ChartJs = () => {
  return (
    <Fragment>
      <PageHeader title="Chart Js" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardFreshFrame title="Bar Chart" size="large" more={false}>
              <ChartjsBarChart Label={Label} Data1={Data1} Data2={Data2} Color1={Color1} Color2={Color2} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Horizontal  Chart" size="large" more={false}>
              <ChartjsHorizontalChart Label={Label} Data1={Data1} Data2={Data2} Color1={Color1} Color2={Color2} />
            </CardFreshFrame>
          </Col>

          <Col md={12}>
            <CardFreshFrame title="Stacked  Chart" size="large" more={false}>
              <ChartjsStackedChart Label={Label} Data1={Data1} Data2={Data2} Color1={Color1} Color2={Color2} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Line  Chart" size="large" more={false}>
              <ChartjsLineChart Label={Label} Data1={Data1} Data2={Data2} Color1={Color1} Color2={Color2} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Area  Chart" size="large" more={false}>
              <ChartjsAreaChart Label={Label} Data1={Data1} Data2={Data2} Color1={Color1} Color2={Color2} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Transparent  Chart" size="large" more={false}>
              <ChartjsBarChartTransparent Label={Label} Data1={Data1} Data2={Data2} Color1={Color1} Color2={Color2} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Donut  Chart" size="large" more={false}>
              <ChartjsDonutChart Label={LabelRound} Data1={DataRound} color={ColorRound} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Pie  Chart" size="large" more={false}>
              <ChartjsPieChart Label={LabelRound} Data1={DataRound} color={ColorRound} />
            </CardFreshFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default ChartJs;
