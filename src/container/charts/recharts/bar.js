import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { CardFreshFrame } from '../../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../../styled';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import rechartdata from '../../../config/dataService/recharts.json';
const { data, positiveAndnegetive } = rechartdata;

const ReChartBar = () => {
  return (
    <Fragment>
      <PageHeader title="Rechats Bar Chart" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardFreshFrame title="TINY BAR CHART" size="large" more={false}>
              <BarChart width={750} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#5F63F2" />
                <Bar dataKey="pv" fill="#82ca9d" />
                <Bar dataKey="amt" fill="#2F63F250" />
              </BarChart>
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="STACKED BAR CHART" size="large" more={false}>
              <BarChart
                width={750}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
              </BarChart>
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="MIX BAR CHART" size="large" more={false}>
              <BarChart
                width={750}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                <Bar dataKey="uv" fill="#ffc658" />
              </BarChart>
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="POSITIVE AND NEGATIVE BAR CHART" size="large" more={false}>
              <BarChart
                width={750}
                height={400}
                data={positiveAndnegetive}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="BAR CHART STACKED BY SIGN" size="large" more={false}>
              <BarChart
                width={750}
                height={400}
                data={positiveAndnegetive}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
                <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
              </BarChart>
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="BIAXIAL BAR CHART" size="large" more={false}>
              <BarChart
                width={750}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </CardFreshFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default ReChartBar;
