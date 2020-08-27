import React, { useState } from 'react';
import { Row, Col, Progress, Table } from 'antd';
import { VectorMap } from '@south-paw/react-vector-maps';
import { NavLink, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';
import {
  OverviewCard,
  PerformanceChartWrapper,
  Pstates,
  SessionChartWrapper,
  SessionState,
  RegionList,
  RegionMap,
  LadingPages,
  TrafficTableWrapper,
} from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import worldLowRes from '../../demoData/vector.json';
import { ChartjsAreaChart, ChartjsDonutChart } from '../../components/charts/chartjs';
import { Button } from '../../components/buttons/buttons';
import { Dropdown } from '../../components/dropdown/dropdown';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const moreContent = (
  <>
    <NavLink to="#">
      <span>More one</span>
    </NavLink>
    <NavLink to="#">
      <span>More two</span>
    </NavLink>
    <NavLink to="#">
      <span>More three</span>
    </NavLink>
  </>
);

const locationColumns = [
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

const locationData = [
  {
    key: '1',
    channel: 'Direct',
    sessions: '3,397',
    rate: '3.5%',
    completions: '225',
    percentage: (
      <Progress
        percent={70}
        strokeWidth={5}
        status="active"
        showInfo={false}
        className="progress-dt progress-primary"
      />
    ),
    value: '23.28%',
  },
  {
    key: '2',
    channel: 'Email',
    sessions: '5,578',
    rate: '2.4%',
    completions: '145',
    percentage: (
      <Progress
        percent={65}
        strokeWidth={5}
        status="active"
        showInfo={false}
        className="progress-et progress-secondary"
      />
    ),
    value: '65.55%',
  },
  {
    key: '3',
    channel: 'Organic Search',
    sessions: '2,398',
    rate: '6.8%',
    completions: '120',
    percentage: (
      <Progress
        percent={83}
        strokeWidth={5}
        status="active"
        showInfo={false}
        className="progress-ost progress-success"
      />
    ),
    value: '83.19%',
  },
  {
    key: '4',
    channel: 'Referral',
    sessions: '3,397',
    rate: '1.5%',
    completions: '110',
    percentage: (
      <Progress percent={73} strokeWidth={5} status="active" showInfo={false} className="progress-rt progress-info" />
    ),
    value: '73.33%',
  },
  {
    key: '5',
    channel: 'Social Media',
    sessions: '4,247',
    rate: '3.6%',
    completions: '210',
    percentage: (
      <Progress
        percent={73}
        strokeWidth={5}
        status="active"
        showInfo={false}
        className="progress-smt progress-warning"
      />
    ),
    value: '73.33%',
  },
  {
    key: '6',
    channel: 'Other',
    sessions: '6,354',
    rate: '3.5%',
    completions: '210',
    percentage: (
      <Progress percent={73} strokeWidth={5} status="active" showInfo={false} className="progress-ot progress-danger" />
    ),
    value: '73.33%',
  },
];

const landingColumns = [
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

const landingData = [
  {
    key: '1',
    pages: <span className="page-title">Homepage</span>,
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '2',
    pages: <span className="page-title">Our Service</span>,
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '3',
    pages: <span className="page-title">List of Products</span>,
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '4',
    pages: <span className="page-title">Contact us</span>,
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
  {
    key: '5',
    pages: <span className="page-title">Products</span>,
    sessions: '3,397',
    rate: '3.5%',
    ctr: '225',
    percentage: '23.20%',
  },
];

const regionColumns = [
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

const regionData = [
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
  const [state, setState] = useState({
    performance: 'month',
    traffic: 'month',
    device: 'month',
    landing: 'month',
    region: 'month',
  });

  const handleActiveChangePerformance = value => {
    setState({
      ...state,
      performance: value,
    });
  };

  const handleActiveChangeTraffic = value => {
    setState({
      ...state,
      traffic: value,
    });
  };

  const handleActiveChangeDevice = value => {
    setState({
      ...state,
      device: value,
    });
  };

  const handleActiveChangeLanding = value => {
    setState({
      ...state,
      landing: value,
    });
  };

  const handleActiveChangeRegion = value => {
    setState({
      ...state,
      region: value,
    });
  };

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
      height: '220px',
    };
    return <div style={{ ...style, ...thumbStyle }} props={props} />;
  };

  renderThumb.propTypes = {
    style: PropTypes.shape(PropTypes.object).isRequired,
  };

  return (
    <>
      <PageHeader
        ghost
        title="Website Performance Dashboard"
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
        <Row justify="center" gutter={25}>
          <Col xxl={8} xl={10} lg={12} xs={24}>
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
                      <Heading as="h2" className="color-primary">
                        5,461
                      </Heading>
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
                    <span className="overview-box-percentage" style={{ float: 'right' }}>
                      70%
                    </span>
                  </p>
                </Cards>
              </div>

              <div className="overview-box">
                <Cards headless>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="overview-box-single">
                      <Heading as="h2" className="color-info">
                        140
                      </Heading>
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
                    <span className="overview-box-percentage" style={{ float: 'right' }}>
                      70%
                    </span>
                  </p>
                </Cards>
              </div>
            </OverviewCard>
          </Col>
          <Col xxl={16} xl={14} lg={12} xs={24}>
            <PerformanceChartWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.performance === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangePerformance('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.performance === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangePerformance('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.performance === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangePerformance('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                more={moreContent}
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

                <div className="performance-lineChart">
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
                        display: false,
                        position: 'bottom',
                        align: 'start',
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
                              beginAtZero: true,
                              fontSize: 13,
                              display: true,
                              suggestedMin: 50,
                              suggestedMax: 80,
                              stepSize: 20,
                              callback(label) {
                                return `${label}k`;
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
                              fontSize: 13,
                              display: true,
                            },
                          },
                        ],
                      },
                    }}
                    height={90}
                  />
                </div>
              </Cards>
            </PerformanceChartWrapper>
          </Col>
          <Col xxl={16} xs={24}>
            <div className="full-width-table">
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.traffic === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeTraffic('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.traffic === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeTraffic('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.traffic === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeTraffic('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Traffic Channels"
                size="large"
                more={moreContent}
              >
                <TrafficTableWrapper>
                  <div className="table-bordered table-responsive">
                    <Table columns={locationColumns} dataSource={locationData} pagination={false} />
                  </div>
                </TrafficTableWrapper>
              </Cards>
            </div>
          </Col>
          <Col xxl={8} xl={8} md={12} xs={24}>
            <SessionChartWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.device === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeDevice('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.device === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeDevice('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.device === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeDevice('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Sessions By Device"
                size="large"
              >
                <div className="session-chart-inner">
                  <ChartjsDonutChart
                    labels={['Desktop', 'Mobiles', 'Tablets']}
                    datasets={[
                      {
                        data: [5870, 4483, 2420],
                        backgroundColor: ['#20C997', '#5F63F2', '#FA8B0C'],
                      },
                    ]}
                  />

                  <SessionState className="session-wrap d-flex justify-content-center">
                    <div className="session-single">
                      <div className="chart-label">
                        <span className="label-dot dot-success" />
                        Desktop
                      </div>
                      <span>4,483</span>
                      <sub>45%</sub>
                    </div>
                    <div className="session-single">
                      <div className="chart-label">
                        <span className="label-dot dot-info" />
                        Mobile
                      </div>
                      <span>5870</span>
                      <sub>30%</sub>
                    </div>
                    <div className="session-single">
                      <div className="chart-label">
                        <span className="label-dot dot-warning" />
                        Tablets
                      </div>
                      <span>2,420</span>
                      <sub>25%</sub>
                    </div>
                  </SessionState>
                </div>
              </Cards>
            </SessionChartWrapper>
          </Col>
          <Col xxl={12} xl={16} md={12} xs={24}>
            <div className="full-width-table">
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.landing === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeLanding('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.landing === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeLanding('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.landing === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeLanding('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Top Landing Pages"
                size="large"
                more={moreContent}
              >
                <LadingPages>
                  <div className="table-bordered table-responsive">
                    <Table columns={landingColumns} dataSource={landingData} pagination={false} />
                  </div>
                </LadingPages>
              </Cards>
            </div>
          </Col>
          <Col xxl={12} xs={24}>
            <Cards
              isbutton={
                <div className="card-nav">
                  <ul>
                    <li className={state.region === 'week' ? 'active' : 'deactivate'}>
                      <Link onClick={() => handleActiveChangeRegion('week')} to="#">
                        Week
                      </Link>
                    </li>
                    <li className={state.region === 'month' ? 'active' : 'deactivate'}>
                      <Link onClick={() => handleActiveChangeRegion('month')} to="#">
                        Month
                      </Link>
                    </li>
                    <li className={state.region === 'year' ? 'active' : 'deactivate'}>
                      <Link onClick={() => handleActiveChangeRegion('year')} to="#">
                        Year
                      </Link>
                    </li>
                  </ul>
                </div>
              }
              title="Sessions by Region"
              size="large"
              more={moreContent}
            >
              <Row>
                <Col xxl={10} md={11} xs={24}>
                  <RegionList>
                    <Scrollbars autoHeight autoHeightMin={280} autoHide renderThumbVertical={renderThumb}>
                      <Table columns={regionColumns} dataSource={regionData} pagination={false} />
                    </Scrollbars>
                  </RegionList>
                </Col>
                <Col xxl={14} md={13} xs={24}>
                  <RegionMap>
                    <VectorMap {...worldLowRes} fill="#E3E6EF" stroke="white" />
                  </RegionMap>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Performance;
