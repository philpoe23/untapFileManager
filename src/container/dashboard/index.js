import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Radio, Table } from 'antd';
import { SocialMediaContent } from '../../components/social-media/overview';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { ChartjsAreaChart, ChartjsBarChartTransparent, ChartjsLineChart } from '../../components/charts/chartjs';
import { Link } from 'react-router-dom';
import { Focard, CardBarChart, CardGroup, SocialMediaWrapper, LineChartWrapper } from './style';

const options = {
  layout: {
    padding: {
      left: '-10',
      right: 0,
      top: 0,
      bottom: '-10',
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

const Dashbord = () => {
  const columns = [
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

  const data = [
    {
      key: '1',
      network: 'Social Network',
      users: 'Users',
      newUsers: 'New Users',
      sessions: 'Sessions',
      bounceRate: 'Bounce Rate',
      pages: 'Pages / Session',
      avg: 'Avg. Session Duration',
    },
    {
      key: '2',
      network: 'Facebook',
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
    {
      key: '3',
      network: 'Twitter',
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
    {
      key: '4',
      network: 'Linkdin',
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
    {
      key: '5',
      network: 'Youtube',
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
    {
      key: '6',
      network: 'Pinterest',
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
    {
      key: '7',
      network: 'Google+',
      users: '3,397',
      newUsers: '422',
      sessions: '2,584',
      bounceRate: '30.35%',
      pages: '2.50',
      avg: '00:01:05',
    },
  ];

  return (
    <Fragment>
      <PageHeader ghost title="Social Media Dashboard" />
      <Main>
        <Row gutter={25}>
          <Col md={8}>
            <SocialMediaWrapper>
              <Cards title="Social Media Overview" size="large">
                <Row gutter={25}>
                  <Col md={8}>
                    <SocialMediaContent icon="facebook" bgColor="#2366B8" title="5,461" subTitle="Likes" />
                  </Col>
                  <Col md={8}>
                    <SocialMediaContent icon="twitter" bgColor="#00ABE4" title="5,461" subTitle="Followers" />
                  </Col>
                  <Col md={8}>
                    <SocialMediaContent icon="instagram" bgColor="#9D2E98" title="5,461" subTitle="Followers" />
                  </Col>
                  <Col md={8}>
                    <SocialMediaContent icon="youtube-play" bgColor="#E32212" title="5,461" subTitle="Subscribers" />
                  </Col>
                  <Col md={8}>
                    <SocialMediaContent icon="pinterest-p" bgColor="#E32212" title="5,461" subTitle="Followers" />
                  </Col>
                  <Col md={8}>
                    <SocialMediaContent icon="linkedin" bgColor="#007CBC" title="5,461" subTitle="Followers" />
                  </Col>
                </Row>
              </Cards>
            </SocialMediaWrapper>
          </Col>

          <Col md={16}>
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
                        <Col md={12}>
                          <Focard>
                            <div className="focard-details">
                              <Heading as="h1">25,872</Heading>
                              <p className="subtitle">Engaged Users</p>
                              <p>
                                <span>
                                  <FeatherIcon icon="trending-up" />
                                  25%
                                </span>
                                <span> 20,641 (prev)</span>
                              </p>
                            </div>
                            <ChartjsAreaChart
                              labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                              datasets={[
                                {
                                  data: [60, 6, 60, 10, 80],
                                  borderColor: '#20C997',
                                  borderWidth: 3,
                                  fill: true,
                                  backgroundColor: '#20C99730',
                                },
                              ]}
                              height={140}
                            />
                          </Focard>
                        </Col>
                        <Col md={12}>
                          <Focard>
                            <div className="focard-details">
                              <Heading as="h1">492,534</Heading>
                              <p className="subtitle">Page Impressions</p>
                              <p>
                                <span>
                                  <FeatherIcon icon="trending-up" />
                                  14%
                                </span>
                                <span> 20,641 (prev)</span>
                              </p>
                            </div>
                            <ChartjsAreaChart
                              labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                              datasets={[
                                {
                                  data: [60, 6, 60, 10, 80],
                                  borderColor: '#FF69A5',
                                  borderWidth: 3,
                                  fill: true,
                                  backgroundColor: '#FF69A530',
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
                        <Col md={12}>
                          <Focard>
                            <div className="focard-details growth-downward">
                              <Heading as="h1">12,142</Heading>
                              <p className="subtitle">Total Page Likes</p>
                              <p>
                                <span>
                                  <FeatherIcon icon="trending-down" />
                                  12%
                                </span>
                                <span> 20,641 (prev)</span>
                              </p>
                            </div>
                            <ChartjsAreaChart
                              labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                              datasets={[
                                {
                                  data: [40, 6, 10, 40, 10],
                                  borderColor: '#5F63F2',
                                  borderWidth: 3,
                                  fill: true,
                                  backgroundColor: '#5F63F230',
                                },
                              ]}
                              height={140}
                            />
                          </Focard>
                        </Col>
                        <Col md={12}>
                          <Focard>
                            <div className="focard-details">
                              <Heading as="h1">1,432</Heading>
                              <p className="subtitle">Page Impressions</p>
                              <p>
                                <span>
                                  <FeatherIcon icon="trending-down" />
                                  14%
                                </span>
                                <span> 20,641 (prev)</span>
                              </p>
                            </div>
                            <ChartjsAreaChart
                              labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                              datasets={[
                                {
                                  data: [60, 6, 60, 10, 50],
                                  borderColor: '#FA8B0C',
                                  borderWidth: 3,
                                  fill: true,
                                  backgroundColor: '#FA8B0C30',
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

          <Col md={8}>
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
                />
              </CardBarChart>
            </Cards>
          </Col>
          <Col md={8}>
            <LineChartWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link to="#" onClick={handleActiveChange}>
                          Week
                        </Link>
                      </li>
                      <li className="active">
                        <Link to="#" onClick={handleActiveChange}>
                          Month
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={handleActiveChange}>
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Twitter Overview"
                size="large"
              >

                <Row className="line-chart-row">
                  <Col md={10}>
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
                  <Col md={14}>
                    <ChartjsLineChart
                      height={50}
                      datasets={[
                        {
                          data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                          borderColor: '#C6D0DC',
                          borderWidth: 1,
                          fill: false,
                        },
                      ]}
                      options={options}
                    />
                  </Col>
                </Row>
                <Row className="line-chart-row">
                  <Col md={10}>
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
                  <Col md={14}>
                    <ChartjsLineChart
                      height={50}
                      datasets={[
                        {
                          data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                          borderColor: '#C6D0DC',
                          borderWidth: 1,
                          fill: false,
                        },
                      ]}
                      options={options}
                    />
                  </Col>
                </Row>
                <Row className="line-chart-row">
                  <Col md={10}>
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
                  <Col md={14}>
                    <ChartjsLineChart
                      height={50}
                      datasets={[
                        {
                          data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                          borderColor: '#C6D0DC',
                          borderWidth: 1,
                          fill: false,
                        },
                      ]}
                      options={options}
                    />
                  </Col>
                </Row>
                <Row className="line-chart-row">
                  <Col md={10}>
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
                  <Col md={14}>
                    <ChartjsLineChart
                      height={50}
                      datasets={[
                        {
                          data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                          borderColor: '#C6D0DC',
                          borderWidth: 1,
                          fill: false,
                        },
                      ]}
                      options={options}
                    />
                  </Col>
                </Row>
                <Row className="line-chart-row">
                  <Col md={10}>
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
                  <Col md={14}>
                    <ChartjsLineChart
                      height={50}
                      datasets={[
                        {
                          data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                          borderColor: '#C6D0DC',
                          borderWidth: 1,
                          fill: false,
                        },
                      ]}
                      options={options}
                    />
                  </Col>
                </Row>
              </Cards>
            </LineChartWrapper>

          </Col>
          <Col md={8}>
            <LineChartWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link to="#" onClick={handleActiveChange}>
                          Week
                        </Link>
                      </li>
                      <li className="active">
                        <Link to="#" onClick={handleActiveChange}>
                          Month
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={handleActiveChange}>
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Instagram Overview"
                size="large"
              >
                <Row className="line-chart-row">
                  <Col md={10}>
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
                  <Col md={14}>
                    <ChartjsLineChart
                      height={50}
                      datasets={[
                        {
                          data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                          borderColor: '#C6D0DC',
                          borderWidth: 1,
                          fill: false,
                        },
                      ]}
                      options={options}
                    />
                  </Col>
                </Row>
                <Row className="line-chart-row">
                  <Col md={10}>
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
                  <Col md={14}>
                    <ChartjsLineChart
                      height={50}
                      datasets={[
                        {
                          data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                          borderColor: '#C6D0DC',
                          borderWidth: 1,
                          fill: false,
                        },
                      ]}
                      options={options}
                    />
                  </Col>
                </Row>
                <Row className="line-chart-row">
                  <Col md={10}>
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
                  <Col md={14}>
                    <ChartjsLineChart
                      height={50}
                      datasets={[
                        {
                          data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                          borderColor: '#C6D0DC',
                          borderWidth: 1,
                          fill: false,
                        },
                      ]}
                      options={options}
                    />
                  </Col>
                </Row>
                <Row className="line-chart-row">
                  <Col md={10}>
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
                  <Col md={14}>
                    <ChartjsLineChart
                      height={50}
                      datasets={[
                        {
                          data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                          borderColor: '#C6D0DC',
                          borderWidth: 1,
                          fill: false,
                        },
                      ]}
                      options={options}
                    />
                  </Col>
                </Row>
                <Row className="line-chart-row">
                  <Col md={10}>
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
                  <Col md={14}>
                    <ChartjsLineChart
                      height={50}
                      datasets={[
                        {
                          data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                          borderColor: '#C6D0DC',
                          borderWidth: 1,
                          fill: false,
                        },
                      ]}
                      options={options}
                    />
                  </Col>
                </Row>
              </Cards>
            </LineChartWrapper>
          </Col>
          <Col md={8}>
            <LineChartWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link to="#" onClick={handleActiveChange}>
                          Week
                        </Link>
                      </li>
                      <li className="active">
                        <Link to="#" onClick={handleActiveChange}>
                          Month
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={handleActiveChange}>
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title="Linkedin Key Metrick"
                size="large"
              >
                <div className="linkedin-chart-wrap">
                  <Row className="line-chart-row">
                    <Col md={10}>
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
                    <Col md={14}>
                      <ChartjsLineChart
                        height={50}
                        datasets={[
                          {
                            data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                            borderColor: '#C6D0DC',
                            borderWidth: 1,
                            fill: false,
                          },
                        ]}
                        options={options}
                      />
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col md={10}>
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
                    <Col md={14}>
                      <ChartjsLineChart
                        height={50}
                        datasets={[
                          {
                            data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                            borderColor: '#C6D0DC',
                            borderWidth: 1,
                            fill: false,
                          },
                        ]}
                        options={options}
                      />
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col md={10}>
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
                    <Col md={14}>
                      <ChartjsLineChart
                        height={50}
                        datasets={[
                          {
                            data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                            borderColor: '#C6D0DC',
                            borderWidth: 1,
                            fill: false,
                          },
                        ]}
                        options={options}
                      />
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col md={10}>
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
                    <Col md={14}>
                      <ChartjsLineChart
                        height={50}
                        datasets={[
                          {
                            data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                            borderColor: '#C6D0DC',
                            borderWidth: 1,
                            fill: false,
                          },
                        ]}
                        options={options}
                      />
                    </Col>
                  </Row>
                  <Row className="line-chart-row">
                    <Col md={10}>
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
                    <Col md={14}>
                      <ChartjsLineChart
                        height={50}
                        datasets={[
                          {
                            data: [0, 10, 8, 15, 7, 10, 15, 20, 18, 35, 25, 30],
                            borderColor: '#C6D0DC',
                            borderWidth: 1,
                            fill: false,
                          },
                        ]}
                        options={options}
                      />
                    </Col>
                  </Row>
                </div>
              </Cards>
            </LineChartWrapper>
          </Col>
          <Col md={16}>
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
                >
                  <div className="traffic-table">
                    <Table columns={columns} dataSource={data} pagination={false} />
                  </div>
                </Cards>
              </div>
            </CardGroup>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Dashbord;
