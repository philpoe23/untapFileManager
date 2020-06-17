import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Progress, Table } from 'antd';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { VectorMap } from '@south-paw/react-vector-maps';
import worldLowRes from '../../config/dataService/vector.json';
import { NavLink, Link } from 'react-router-dom';
import { ChartjsAreaChart, ChartjsDonutChart } from '../../components/charts/chartjs';
import { Button } from '../../components/buttons/buttons';
import FeatherIcon from 'feather-icons-react';
import { OverviewCard, Pstates, SessionState, RegionList,RegionMap, LadingPages, TrafficTableWrapper } from './style';
import { Dropdown } from '../../components/dropdown/dropdown';


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
    percentage: <Progress percent={70} status="active" showInfo={false} className="progress-dt" />,
    value: '23.28%',
  },
  {
    key: '2',
    channel: 'Email',
    sessions: '5,578',
    rate: '2.4%',
    completions: '145',
    percentage: <Progress percent={65} status="active" showInfo={false} className="progress-et" />,
    value: '65.55%',
  },
  {
    key: '3',
    channel: 'Organic Search',
    sessions: '2,398',
    rate: '6.8%',
    completions: '120',
    percentage: <Progress percent={83} status="active" showInfo={false} className="progress-ost" />,
    value: '83.19%',
  },
  {
    key: '4',
    channel: 'Referral',
    sessions: '3,397',
    rate: '1.5%',
    completions: '110',
    percentage: <Progress percent={73} status="active" showInfo={false} className="progress-rt" />,
    value: '73.33%',
  },
  {
    key: '5',
    channel: 'Social Media',
    sessions: '4,247',
    rate: '3.6%',
    completions: '210',
    percentage: <Progress percent={73} status="active" showInfo={false} className="progress-smt" />,
    value: '73.33%',
  },
  {
    key: '6',
    channel: 'Other',
    sessions: '6,354',
    rate: '3.5%',
    completions: '210',
    percentage: <Progress percent={73} status="active" showInfo={false} className="progress-ot" />,
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
    pages: (
      <span className="page-title">Homepage</span>
    ),
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '2',
    pages: (
      <span className="page-title">Our Service</span>
    ),
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '3',
    pages: (
      <span className="page-title">List of Products</span>
    ),
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '4',
    pages: (
      <span className="page-title">Contact us</span>
    ),
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '5',
    pages: (
      <span className="page-title">Products</span>
    ),
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

const handleActiveChange = e => {
  const link = e.currentTarget;
  link
    .closest('ul')
    .querySelectorAll('li')
    .forEach(li => {
      li.classList.remove('active');
    });

  link.closest('li').classList.add('active');
};

const Performance = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Website Performance Dashboard" />
      <Main>
        <Row gutter={25}>
          <Col lg={8} md={12} sm={24} xs={24}>
            <OverviewCard>
              <div className="d-flex align-items-center justify-content-between overview-head">
                <Heading as="h4">Daily Overview</Heading>
                <Dropdown>
                  <Button>
                    Export <FeatherIcon icon="chevron-down" size={14} />
                  </Button>
                </Dropdown>
              </div>
              <div className="overview-box">
                <Cards headless>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="overview-box-single">
                      <Heading as="h2" className="color-primary">5,461</Heading>
                      <p>Users Today</p>
                    </div>
                    <div className="overview-box-single text-right">
                      <Heading as="h2">8,085</Heading>
                      <p>Expected Users</p>
                    </div>
                  </div>

                  <Progress percent={70} showInfo={false} className="progress-primary" />

                  <p>
                    <span className="growth-upward">
                      <FeatherIcon icon="arrow-up" size={14} />
                      25% <span>Since yesterday</span>
                    </span>
                    <span className="overview-box-percentage" style={{ float: 'right' }}>70%</span>
                  </p>
                </Cards>
              </div>

              <div className="overview-box">
                <Cards headless>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="overview-box-single">
                      <Heading as="h2" className="color-info">140</Heading>
                      <p>Goals Today</p>
                    </div>
                    <div className="overview-box-single text-right">
                      <Heading as="h2">120</Heading>
                      <p>Expected Goals</p>
                    </div>
                  </div>
                  <Progress percent={70} showInfo={false} />
                  <p>
                    <span className="growth-downward">
                      <FeatherIcon icon="arrow-down" size={14} />
                      25% <span>Since yesterday</span>
                    </span>
                    <span className="overview-box-percentage" style={{ float: 'right' }}>70%</span>
                  </p>
                </Cards>
              </div>
            </OverviewCard>
          </Col>
          <Col lg={16} md={12} sm={24} xs={24}>
            <Cards
              isbutton={
                <div className="card-nav">
                  <ul>
                    <li>
                      <Link onClick={handleActiveChange} to="#">
                        Week
                      </Link>
                    </li>
                    <li className="active">
                      <Link onClick={handleActiveChange} to="#">
                        Month
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleActiveChange} to="#">
                        Year
                      </Link>
                    </li>
                  </ul>
                </div>
              }
              more={content}
              title="Website Performance"
              size="large"
            >
              <Pstates>
                <div className="growth-upward">
                  <p>Users</p>
                  <Heading as="h1">
                    72.6k
                    <sub>
                      <span>
                        <FeatherIcon icon="arrow-up" size={14} /> 25%
                      </span>
                    </sub>
                  </Heading>
                </div>
                <div className="growth-upward">
                  <p>Sessions</p>
                  <Heading as="h1">
                    87.2k
                    <sub>
                      <span>
                        <FeatherIcon icon="arrow-up" size={14} /> 47%
                      </span>
                    </sub>
                  </Heading>
                </div>
                <div className="growth-downward">
                  <p>Bounce Rate</p>
                  <Heading as="h1">
                    26.3%
                    <sub>
                      <span>
                        <FeatherIcon icon="arrow-down" size={14} /> 28%
                      </span>
                    </sub>
                  </Heading>
                </div>
                <div className="growth-upward">
                  <p>Session Duration</p>
                  <Heading as="h1">
                    2m 18s
                    <sub>
                      <span>
                        <FeatherIcon icon="arrow-up" size={14} /> 13%
                      </span>
                    </sub>
                  </Heading>
                </div>
              </Pstates>

              <ChartjsAreaChart
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                datasets={[
                  {
                    data: [45, 25, 60, 38, 70, 60, 38, 40, 25, 50, 45, 75],
                    borderColor: '#5F63F2',
                    borderWidth: 5,
                    fill: true,
                    backgroundColor: '#5F63F210',
                    label: 'Current period',
                    pointStyle: 'circle',
                    pointRadius: '0',
                    hoverRadius: '9',
                    pointBorderColor: '#fff',
                    pointBackgroundColor: '#5F63F2',
                    hoverBorderWidth: 5,
                  },
                  {
                    data: [55, 30, 40, 38, 50, 60, 38, 40, 35, 40, 55, 45],
                    borderColor: '#C6D0DC',
                    borderWidth: 2,
                    fill: false,
                    backgroundColor: '#00173750',
                    label: 'Previous period',
                    borderDash: [10, 5],
                    pointRadius: '0',
                    hoverRadius: '0',
                  },
                ]}
                options={{
                  maintainAspectRatio: true,
                  legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                      boxWidth: 6,
                      display: true,
                      usePointStyle: true,
                    },
                  },
                  hover: {
                    mode: 'index',
                    intersect: false,
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
                          fontSize: 14,
                          display: true,
                          suggestedMin: 50,
                          suggestedMax: 80,
                          stepSize: 20,
                          callback: function(label, index, labels) {
                            return label + 'k';
                          },
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
                height={100}
              />
            </Cards>
          </Col>
          <Col lg={16} md={12} sm={24} xs={24}>
            <div className="full-width-table">
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                          Week
                        </Link>
                      </li>
                      <li className="active">
                        <Link onClick={handleActiveChange} to="#">
                          Month
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Traffic Channels"
                size="large"
                more={content}
              >
                <TrafficTableWrapper>
                  <div class="table-responsive">
                    <Table columns={locationcolumns} dataSource={locationdata} pagination={false} />
                  </div>
                </TrafficTableWrapper>
              </Cards>
            </div>
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Cards
              isbutton={
                <div className="card-nav">
                  <ul>
                    <li>
                      <Link onClick={handleActiveChange} to="#">
                        Week
                      </Link>
                    </li>
                    <li className="active">
                      <Link onClick={handleActiveChange} to="#">
                        Month
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleActiveChange} to="#">
                        Year
                      </Link>
                    </li>
                  </ul>
                </div>
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
              <SessionState className="d-flex justify-content-center">
                <div>
                  <span>4,483</span>
                  <sub>45%</sub>
                </div>
                <div>
                  <span>870</span>
                  <sub>30%</sub>
                </div>
                <div>
                  <span>2,420</span>
                  <sub>25%</sub>
                </div>
              </SessionState>
            </Cards>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
          <div className="full-width-table">
            <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                          Week
                        </Link>
                      </li>
                      <li className="active">
                        <Link onClick={handleActiveChange} to="#">
                          Month
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Top Landing Pages"
                size="large"
                more={content}
              >
                <LadingPages>
                  <div className="table-responsive">
                    <Table columns={landingcolumns} dataSource={landingdata} pagination={false} />
                  </div>
                </LadingPages>
              </Cards>
            </div>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Cards
              isbutton={
                <div className="card-nav">
                  <ul>
                    <li>
                      <Link onClick={handleActiveChange} to="#">
                        Week
                      </Link>
                    </li>
                    <li className="active">
                      <Link onClick={handleActiveChange} to="#">
                        Month
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleActiveChange} to="#">
                        Year
                      </Link>
                    </li>
                  </ul>
                </div>
              }
              title="Sessions by Region"
              size="large"
              more={content}
            >
            <Row>
              <Col lg={10} md={8} sm={24} xs={24}>
                <RegionList>
                  <Table columns={regioncolumns} dataSource={regiondata} pagination={false} />
                </RegionList>
              </Col>
              <Col lg={14} md={16} sm={24} xs={24}>
                <RegionMap>
                  <VectorMap {...worldLowRes} fill="#E3E6EF" stroke="white" />
                </RegionMap>
              </Col>
            </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Performance;
