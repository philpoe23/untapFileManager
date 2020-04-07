import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Radio, Progress, Table } from 'antd';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { VectorMap } from '@south-paw/react-vector-maps';
import worldLowRes from '../../config/dataService/vector.json';
import { NavLink } from 'react-router-dom';

import { ChartjsAreaChart, ChartjsDonutChart } from '../../components/charts/chartjs';
const content = (
  <Fragment>
    <NavLink to="#">
      <span>More one</span>
    </NavLink>
    <NavLink to="#">
      <span>More two</span>
    </NavLink>
    <NavLink to="#">
      <span>More three</span>
    </NavLink>
  </Fragment>
);

const locationcolumns = [
  {
    title: 'Channel',
    dataIndex: 'channel',
    key: 'channel',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
  },
  {
    title: 'Goal Conv. Rate',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Goals Completions',
    dataIndex: 'completions',
    key: 'completions',
  },
  {
    title: 'Percentage of Traffic (%)',
    dataIndex: 'percentage',
    key: 'percentage',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
];
const locationdata = [
  {
    key: '1',
    channel: 'Direct',
    sessions: '3,397',
    rate: '3.5%',
    completions: '225',
    percentage: <Progress percent={70} status="active" />,
    value: '23.28%',
  },
  {
    key: '2',
    channel: 'Email',
    sessions: '5,578',
    rate: '2.4%',
    completions: '145',
    percentage: <Progress percent={65} status="active" />,
    value: '65.55%',
  },
  {
    key: '3',
    channel: 'Organic Search',
    sessions: '2,398',
    rate: '6.8%',
    completions: '120',
    percentage: <Progress percent={83} status="active" />,
    value: '83.19%',
  },
  {
    key: '4',
    channel: 'Referral',
    sessions: '3,397',
    rate: '1.5%',
    completions: '110',
    percentage: <Progress percent={73} status="active" />,
    value: '73.33%',
  },
  {
    key: '5',
    channel: 'Social Media',
    sessions: '4,247',
    rate: '3.6%',
    completions: '210',
    percentage: <Progress percent={73} status="active" />,
    value: '73.33%',
  },
  {
    key: '6',
    channel: 'Other',
    sessions: '6,354',
    rate: '3.5%',
    completions: '210',
    percentage: <Progress percent={73} status="active" />,
    value: '73.33%',
  },
];

const landingcolumns = [
  {
    title: 'Landing Pages',
    dataIndex: 'pages',
    key: 'pages',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
  },
  {
    title: 'Bounce Rate',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'CTR',
    dataIndex: 'ctr',
    key: 'ctr',
  },
  {
    title: 'Goal Conv. Rate',
    dataIndex: 'percentage',
    key: 'percentage',
  },
];
const landingdata = [
  {
    key: '1',
    pages: 'Homepage',
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '2',
    pages: 'Our Service',
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '3',
    pages: 'List of Products',
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '4',
    pages: 'Contact us',
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '5',
    pages: 'Products',
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
];
const regioncolumns = [
  {
    title: 'Top Region',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
  },
];
const regiondata = [
  {
    key: '1',
    region: 'United States',
    sessions: '3,397',
  },
  {
    key: '2',
    region: 'United Kingdom',
    sessions: '3,397',
  },
  {
    key: '3',
    region: 'Canada',
    sessions: '3,397',
  },
  {
    key: '4',
    region: 'Japan',
    sessions: '3,397',
  },
  {
    key: '5',
    region: 'India',
    sessions: '3,397',
  },
  {
    key: '6',
    region: 'Bangladesh',
    sessions: '3,397',
  },
  {
    key: '7',
    region: 'Brazil',
    sessions: '3,397',
  },
];
const Performance = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Website Performance Dashboard" />
      <Main>
        <Row gutter={15}>
          <Col md={8}></Col>
          <Col md={16}>
            <Cards
              isbutton={
                <Radio.Group defaultValue={3}>
                  <Radio.Button value={1}>Today</Radio.Button>
                  <Radio.Button value={2}>Week</Radio.Button>
                  <Radio.Button value={3}>Month</Radio.Button>
                  <Radio.Button value={4}>Year</Radio.Button>
                </Radio.Group>
              }
              more={content}
              title="Total Revenue"
              size="large"
            >
              <Heading as="h1">
                $72,784 <span> $52,240</span>
              </Heading>

              <ChartjsAreaChart
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                datasets={[
                  {
                    data: [5, 25, 18, 22, 15, 30, 25, 35, 20, 22, 20, 40],
                    borderColor: '#5F63F2',
                    borderWidth: 3,
                    fill: true,
                    backgroundColor: '#5F63F210',
                    label: 'Current period',
                  },
                  {
                    data: [15, 20, 18, 25, 20, 30, 25, 20, 20, 22, 15, 30],
                    borderColor: '#C6D0DC',
                    borderWidth: 2,
                    fill: false,
                    backgroundColor: '#00173750',
                    label: 'Previous period',
                    borderDash: [10, 5],
                  },
                ]}
                options={{
                  maintainAspectRatio: true,
                  legend: {
                    display: true,
                    labels: {
                      display: true,
                    },
                  },
                  elements: {
                    point: {
                      radius: 0,
                    },
                  },
                  scales: {
                    yAxes: [
                      {
                        stacked: false,
                        gridLines: {
                          display: true,
                          color: '#e5e9f2',
                        },
                        ticks: {
                          beginAtZero: false,
                          fontSize: 10,
                          display: true,
                        },
                      },
                    ],
                    xAxes: [
                      {
                        stacked: true,
                        gridLines: {
                          display: false,
                        },
                        ticks: {
                          beginAtZero: false,
                          fontSize: 11,
                          display: true,
                        },
                      },
                    ],
                  },
                }}
                height={200}
              />
            </Cards>
          </Col>
          <Col md={16}>
            <Cards
              isbutton={
                <Radio.Group defaultValue={3}>
                  <Radio.Button value={1}>Today</Radio.Button>
                  <Radio.Button value={2}>Week</Radio.Button>
                  <Radio.Button value={3}>Month</Radio.Button>
                  <Radio.Button value={4}>Year</Radio.Button>
                </Radio.Group>
              }
              title="Traffic Channels"
              size="large"
            >
              <Table columns={locationcolumns} dataSource={locationdata} pagination={false} />
            </Cards>
          </Col>
          <Col md={8}>
            <Cards
              isbutton={
                <Radio.Group defaultValue={3}>
                  <Radio.Button value={1}>Today</Radio.Button>
                  <Radio.Button value={2}>Week</Radio.Button>
                  <Radio.Button value={3}>Month</Radio.Button>
                </Radio.Group>
              }
              title="Sessions By Device"
              size="large"
            >
              <ChartjsDonutChart
                labels={['Desktop', 'Mobile', 'Tablets']}
                datasets={[
                  {
                    data: [5870, 4483, 2420],
                    backgroundColor: ['#560bd0', '#007bff', '#00cccc'],
                  },
                ]}
              />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards
              isbutton={
                <Radio.Group defaultValue={3}>
                  <Radio.Button value={1}>Today</Radio.Button>
                  <Radio.Button value={2}>Week</Radio.Button>
                  <Radio.Button value={3}>Month</Radio.Button>
                </Radio.Group>
              }
              title="Top Landing Pages"
              size="large"
            >
              <Table columns={landingcolumns} dataSource={landingdata} pagination={false} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards
              isbutton={
                <Radio.Group defaultValue={3}>
                  <Radio.Button value={1}>Today</Radio.Button>
                  <Radio.Button value={2}>Week</Radio.Button>
                  <Radio.Button value={3}>Month</Radio.Button>
                </Radio.Group>
              }
              title="Sessions by Region"
              size="large"
            >
              <Col md={9}>
                <Table columns={regioncolumns} dataSource={regiondata} pagination={false} />
              </Col>
              <Col md={15}>
                <VectorMap {...worldLowRes} fill="#E3E6EF" stroke="white" />
              </Col>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Performance;
