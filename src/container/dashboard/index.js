import React, { useState } from 'react';
import { Row, Col, Radio, Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { Focard, CardBarChart, CardGroup, SocialMediaWrapper, LineChartWrapper } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { SocialMediaContent } from '../../components/social-media/overview';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { ChartjsAreaChart, ChartjsBarChartTransparent, ChartjsLineChart } from '../../components/charts/chartjs';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Dashboard = () => {
  const [state, setState] = useState({
    youtubeSubscribeTabActive: 'month',
    twitterOverviewTabActive: 'month',
    instagramOverviewTabActive: 'month',
    linkdinOverviewTabActive: 'month',
  });

  const chartOptions = {
    layout: {
      padding: {
        left: '-10',
        right: '20px',
        top: 0,
        bottom: '-60',
      },
    },
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
      },
      line: {
        tension: 0,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
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
            display: false,
          },
        },
      ],
    },
  };

  const moreContent = (
    <>
      <NavLink to="#">
        <span>2 years</span>
      </NavLink>
      <NavLink to="#">
        <span>3 years</span>
      </NavLink>
      <NavLink to="#">
        <span>4 years</span>
      </NavLink>
    </>
  );

  const handleActiveChangeYoutube = value => {
    setState({
      ...state,
      youtubeSubscribeTabActive: value,
    });
  };

  const handleActiveChangeTwitter = value => {
    setState({
      ...state,
      twitterOverviewTabActive: value,
    });
  };

  const handleActiveChangeInstagram = value => {
    setState({
      ...state,
      instagramOverviewTabActive: value,
    });
  };

  const handleActiveChangeLinkdin = value => {
    setState({
      ...state,
      linkdinOverviewTabActive: value,
    });
  };

  const trafficTableColumns = [
    {
      dataIndex: 'network',
      key: 'network',
    },
    {
      title: 'Acquisition',
      dataIndex: 'users',
      key: 'users',
    },
    {
      dataIndex: 'newUsers',
      key: 'newUsers',
    },
    {
      dataIndex: 'sessions',
      key: 'sessions',
    },
    {
      title: 'Bounce Rate',
      dataIndex: 'bounceRate',
      key: 'bounceRate',
    },
    {
      dataIndex: 'pages',
      key: 'pages',
    },
    {
      dataIndex: 'avg',
      key: 'avg',
    },
  ];

  const trafficTableData = [
    {
      key: '1',
      network: <span className="traffic-title">Social Network</span>,
      users: <span className="traffic-title">Users</span>,
      newUsers: <span className="traffic-title">New Users</span>,
      sessions: <span className="traffic-title">Sessions</span>,
      bounceRate: <span className="traffic-title">Bounce Rate</span>,
      pages: <span className="traffic-title">Pages / Session</span>,
      avg: <span className="traffic-title">Avg. Session Duration</span>,
    },
    {
      key: '2',
      network: <span className="social-name">Facebook</span>,
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
    {
      key: '3',
      network: <span className="social-name">Twitter</span>,
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
    {
      key: '4',
      network: <span className="social-name">Linkdin</span>,
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
    {
      key: '5',
      network: <span className="social-name">Youtube</span>,
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
    {
      key: '6',
      network: <span className="social-name">Pinterest</span>,
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
    {
      key: '7',
      network: <span className="social-name">Google+</span>,
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
  ];

  return (
    <>
      <PageHeader
        ghost
        title="Social Media Dashboard"
        buttons={[
          <div key="6" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row justify="center" gutter={25}>
          <Col xxl={8} lg={24} xs={24}>
            <SocialMediaWrapper>
              <Cards title="Social Media Overview" size="large">
                <Row gutter={25}>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent icon="facebook" bgColor="#2366B8" title="5,461" subTitle="Likes" />
                  </Col>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent icon="twitter" bgColor="#00ABE4" title="5,461" subTitle="Followers" />
                  </Col>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent
                      icon="instagram"
                      bgColor="linear-gradient(to top, #ffc107 0%,#f44336 31%,#9c27b0 65%,#9c27b0 100%)"
                      title="5,461"
                      subTitle="Followers"
                    />
                  </Col>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent icon="youtube-play" bgColor="#E32212" title="5,461" subTitle="Subscribers" />
                  </Col>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent icon="pinterest-p" bgColor="#E32212" title="5,461" subTitle="Followers" />
                  </Col>
                  <Col xxl={8} md={4} xs={8}>
                    <SocialMediaContent icon="linkedin" bgColor="#007CBC" title="5,461" subTitle="Followers" />
                  </Col>
                </Row>
              </Cards>
            </SocialMediaWrapper>
          </Col>

          <Col xxl={16} xs={24}>
            <CardGroup>
              <div className="forcast-overview">
                <Cards
                  isbutton={
                    <div className="card-radio">
                      <Radio.Group defaultValue={2}>
                        <Radio.Button value={1}>Today</Radio.Button>
                        <Radio.Button value={2}>Week</Radio.Button>
                        <Radio.Button value={3}>Month</Radio.Button>
                        <Radio.Button value={4}>Year</Radio.Button>
                      </Radio.Group>
                    </div>
                  }
                  title="Facebook Overview"
                  size="large"
                >
                  <Row gutter={25}>
                    <Col xl={12} md={24}>
                      <Row className="focard-wrapper focard-divider">
                        <Col md={12} sm={12}>
                          <Focard>
                            <div className="focard-details growth-upward">
                              <Heading as="h1">25,872</Heading>
                              <p className="subtitle">Engaged Users</p>
                              <p className="focard-status">
                                <span className="focard-status__percentage">
                                  <FeatherIcon icon="trending-up" />
                                  25%
                                </span>
                                <span> 20,641 (prev)</span>
                              </p>
                            </div>
                            <ChartjsAreaChart
                              labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                              datasets={[
                                {
                                  data: [5, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                                  borderColor: '#20C997',
                                  borderWidth: 3,
                                  fill: true,
                                  backgroundColor: '#20C99710',
                                },
                              ]}
                              height={140}
                            />
                          </Focard>
                        </Col>
                        <Col md={12} sm={12}>
                          <Focard>
                            <div className="focard-details growth-upward">
                              <Heading as="h1">492,534</Heading>
                              <p className="subtitle">Page Impressions</p>
                              <p className="focard-status">
                                <span className="focard-status__percentage">
                                  <FeatherIcon icon="trending-up" />
                                  14%
                                </span>
                                <span> 20,641 (prev)</span>
                              </p>
                            </div>
                            <ChartjsAreaChart
                              labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                              datasets={[
                                {
                                  data: [5, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                                  borderColor: '#FF69A5',
                                  borderWidth: 3,
                                  fill: true,
                                  backgroundColor: '#FF69A510',
                                },
                              ]}
                              height={140}
                            />
                          </Focard>
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={12} md={24}>
                      <Row className="focard-wrapper">
                        <Col md={12} sm={12}>
                          <Focard>
                            <div className="focard-details growth-downward">
                              <Heading as="h1">12,142</Heading>
                              <p className="subtitle">Total Page Likes</p>
                              <p className="focard-status">
                                <span className="focard-status__percentage">
                                  <FeatherIcon icon="trending-down" />
                                  12%
                                </span>
                                <span> 20,641 (prev)</span>
                              </p>
                            </div>
                            <ChartjsAreaChart
                              labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                              datasets={[
                                {
                                  data: [5, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                                  borderColor: '#5F63F2',
                                  borderWidth: 3,
                                  fill: true,
                                  backgroundColor: '#5F63F210',
                                },
                              ]}
                              height={140}
                            />
                          </Focard>
                        </Col>
                        <Col md={12} sm={12}>
                          <Focard>
                            <div className="focard-details growth-upward">
                              <Heading as="h1">1,432</Heading>
                              <p className="subtitle">Page Impressions</p>
                              <p className="focard-status">
                                <span className="focard-status__percentage">
                                  <FeatherIcon icon="trending-up" />
                                  14%
                                </span>
                                <span> 20,641 (prev)</span>
                              </p>
                            </div>
                            <ChartjsAreaChart
                              labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                              datasets={[
                                {
                                  data: [5, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                                  borderColor: '#FA8B0C',
                                  borderWidth: 3,
                                  fill: true,
                                  backgroundColor: '#FA8B0C10',
                                },
                              ]}
                              height={140}
                            />
                          </Focard>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Cards>
              </div>
            </CardGroup>
          </Col>

          <Col xxl={8} xs={24}>
            <Cards
              isbutton={
                <div className="card-nav">
                  <ul>
                    <li className={state.youtubeSubscribeTabActive === 'week' ? 'active' : 'deactivate'}>
                      <Link onClick={() => handleActiveChangeYoutube('week')} to="#">
                        Week
                      </Link>
                    </li>
                    <li className={state.youtubeSubscribeTabActive === 'month' ? 'active' : 'deactivate'}>
                      <Link onClick={() => handleActiveChangeYoutube('month')} to="#">
                        Month
                      </Link>
                    </li>
                    <li className={state.youtubeSubscribeTabActive === 'year' ? 'active' : 'deactivate'}>
                      <Link onClick={() => handleActiveChangeYoutube('year')} to="#">
                        Year
                      </Link>
                    </li>
                  </ul>
                </div>
              }
              title="Youtube Subscribers"
              size="large"
            >
              <CardBarChart>
                <div className="card-bar-top">
                  <p>Subscribers</p>
                  <Heading as="h3">
                    25,472
                    <sub>
                      <FeatherIcon icon="arrow-up" size={14} />
                      25%
                    </sub>
                  </Heading>
                </div>
                <ChartjsBarChartTransparent
                  labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                  datasets={[
                    {
                      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                      backgroundColor: '#5F63F280',
                      hoverBackgroundColor: '#5F63F2',
                      label: 'Gained',
                    },
                    {
                      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                      backgroundColor: '#FF4D4F80',
                      hoverBackgroundColor: '#FF4D4F',
                      label: 'Lost',
                    },
                  ]}
                  options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    legend: {
                      display: true,
                      position: 'top',
                      labels: {
                        boxWidth: 6,
                        display: true,
                        usePointStyle: true,
                      },
                    },
                    layout: {
                      padding: {
                        left: '0',
                        right: 0,
                        top: 0,
                        bottom: '0',
                      },
                    },
                    scales: {
                      yAxes: [
                        {
                          gridLines: {
                            color: '#e5e9f2',
                          },
                          ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            fontColor: '#182b49',
                            max: 80,
                          },
                        },
                      ],
                      xAxes: [
                        {
                          gridLines: {
                            display: false,
                          },
                          barPercentage: 0.6,
                          ticks: {
                            beginAtZero: true,
                            fontSize: 11,
                            fontColor: '#182b49',
                          },
                        },
                      ],
                    },
                  }}
                />
              </CardBarChart>
            </Cards>
          </Col>
          <Col xxl={8} md={8} xs={24}>
            <LineChartWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.twitterOverviewTabActive === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeTwitter('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.twitterOverviewTabActive === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeTwitter('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.twitterOverviewTabActive === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeTwitter('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Twitter Overview"
                size="large"
              >
                <div className="overview-container">
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-downward">
                        <p>Tweets</p>
                        <Heading as="h4">
                          25,472
                          <sub>
                            <FeatherIcon icon="arrow-down" size={14} />
                            25%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>Tweet impressions</p>
                        <Heading as="h4">
                          78K
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            108%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, -10, 18, 5, 17, 0, 1, 2, 11, 30, 15, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>Retweets</p>
                        <Heading as="h4">
                          2578
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            30%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 15, 10, 18, 20, 15, 10, 7, 15, 8, 10, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>Engagement rate</p>
                        <Heading as="h4">
                          2.8
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            34%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 10, 0, 15, 0, 18, 0, 10, 12, 18, 25, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>New followers</p>
                        <Heading as="h4">
                          1078
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            27%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Cards>
            </LineChartWrapper>
          </Col>
          <Col xxl={8} md={8} xs={24}>
            <LineChartWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.instagramOverviewTabActive === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeInstagram('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.instagramOverviewTabActive === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeInstagram('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.instagramOverviewTabActive === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeInstagram('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Instagram Overview"
                size="large"
              >
                <div className="overview-container">
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>Post</p>
                        <Heading as="h4">
                          25,472
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            25%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 12, 7, 18, 5, 12, 17, 12, 18, 30, 25, 35],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>Like</p>
                        <Heading as="h4">
                          78K
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            108%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>Comments</p>
                        <Heading as="h4">
                          2578
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            30%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 8, 10, 17, 9, 12, 13, 18, 20, 27, 30, 34],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>New Followers</p>
                        <Heading as="h4">
                          2.8
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            34%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>Following</p>
                        <Heading as="h4">
                          1078
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            27%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Cards>
            </LineChartWrapper>
          </Col>
          <Col xxl={8} md={8} xs={24}>
            <LineChartWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.linkdinOverviewTabActive === 'week' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeLinkdin('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.linkdinOverviewTabActive === 'month' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeLinkdin('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.linkdinOverviewTabActive === 'year' ? 'active' : 'deactivate'}>
                        <Link onClick={() => handleActiveChangeLinkdin('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Linkedin Key Metrics"
                size="large"
              >
                <div className="linkedin-chart-wrap">
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>Clicks</p>
                        <Heading as="h4">
                          25,472
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            25%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 5, 15, 7, 17, 10, 5, 20, 10, 35, 20, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>Like</p>
                        <Heading as="h4">
                          78K
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            108%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>Comments</p>
                        <Heading as="h4">
                          2578
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            30%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>New Followers</p>
                        <Heading as="h4">
                          2.8
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            34%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col xxl={10} xs={24}>
                      <div className="growth-upward">
                        <p>Following</p>
                        <Heading as="h4">
                          1078
                          <sub>
                            <FeatherIcon icon="arrow-up" size={14} />
                            27%
                          </sub>
                        </Heading>
                      </div>
                    </Col>
                    <Col xxl={14} xs={24}>
                      <div className="border-linechart">
                        <ChartjsLineChart
                          height={60}
                          datasets={[
                            {
                              data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                              borderColor: '#C6D0DC',
                              borderWidth: 2,
                              fill: false,
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Cards>
            </LineChartWrapper>
          </Col>
          <Col xxl={16} xs={24}>
            <CardGroup>
              <div className="full-width-table">
                <Cards
                  isbutton={
                    <div className="card-radio">
                      <Radio.Group defaultValue={2}>
                        <Radio.Button value={1}>Today</Radio.Button>
                        <Radio.Button value={2}>Week</Radio.Button>
                        <Radio.Button value={3}>Month</Radio.Button>
                        <Radio.Button value={4}>Year</Radio.Button>
                      </Radio.Group>
                    </div>
                  }
                  title="Social Traffic Metrics"
                  size="large"
                  more={moreContent}
                >
                  <div className="traffic-table table-responsive">
                    <Table columns={trafficTableColumns} dataSource={trafficTableData} pagination={false} />
                  </div>
                </Cards>
              </div>
            </CardGroup>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Dashboard;
