import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Radio } from 'antd';
import { SocialMediaContent } from '../../components/social-media/overview';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { ChartjsAreaChart, ChartjsBarChartTransparent, ChartjsLineChart } from '../../components/charts/chartjs';
import { NavLink, Link } from 'react-router-dom';
import { Focard, CardBarChart, CardGroup } from './style';

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
  return (
    <Fragment>
      <PageHeader ghost title="Social Media Dashboard" />
      <Main>
        <Row gutter={15}>
          <Col md={8}>
            <Cards title="Social Media Overview" size="large">
              <Row gutter={15}>
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
          </Col>

          <Col md={16}>
            <CardGroup>
              <Cards
                isbutton={
                  <Radio.Group defaultValue={2}>
                    <Radio.Button value={1}>Today</Radio.Button>
                    <Radio.Button value={2}>Week</Radio.Button>
                    <Radio.Button value={3}>Month</Radio.Button>
                    <Radio.Button value={4}>Year</Radio.Button>
                  </Radio.Group>
                }
                title="Facebook Overview"
                size="large"
              >
                <Row>
                  <Col md={12}>
                    <Row className="focard-wrapper">
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
                            labels={['Jan', 'Feb', 'Mar', 'Apr']}
                            datasets={[
                              {
                                data: [20, 40, 30, 45],
                                borderColor: '#20C997',
                                borderWidth: 3,
                                fill: true,
                                backgroundColor: '#20C99730',
                              },
                            ]}
                            height={180}
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
                            labels={['Jan', 'Feb', 'Mar', 'Apr']}
                            datasets={[
                              {
                                data: [10, 20, 60, 33],
                                borderColor: '#FF69A5',
                                borderWidth: 3,
                                fill: true,
                                backgroundColor: '#FF69A530',
                              },
                            ]}
                            height={180}
                          />
                        </Focard>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12}>
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
                            labels={['Jan', 'Feb', 'Mar', 'Apr']}
                            datasets={[
                              {
                                data: [25, 35, 20, 28],
                                borderColor: '#5F63F2',
                                borderWidth: 3,
                                fill: true,
                                backgroundColor: '#5F63F230',
                              },
                            ]}
                            height={180}
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
                            labels={['Jan', 'Feb', 'Mar', 'Apr']}
                            datasets={[
                              {
                                data: [40, 31, 20, 45],
                                borderColor: '#FA8B0C',
                                borderWidth: 3,
                                fill: true,
                                backgroundColor: '#FA8B0C30',
                              },
                            ]}
                            height={180}
                          />
                        </Focard>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Cards>
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
                <div>
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
          </Col>
          <Col md={8}>
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
          </Col>
          <Col md={8}>
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
              <Row>
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
                    height={110}
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
          </Col>
          <Col md={16}>
            <Cards
              isbutton={
                <Radio.Group defaultValue={2}>
                  <Radio.Button value={1}>Today</Radio.Button>
                  <Radio.Button value={2}>Week</Radio.Button>
                  <Radio.Button value={3}>Month</Radio.Button>
                  <Radio.Button value={4}>Year</Radio.Button>
                </Radio.Group>
              }
              title="Social Traffic Metrics"
              size="large"
              more={content}
            ></Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Dashbord;
