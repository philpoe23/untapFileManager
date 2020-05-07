import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Radio, Progress } from 'antd';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { Focard, CardBarChart } from './style';

import { ChartjsAreaChart, ChartjsBarChartTransparent, ChartjsLineChart } from '../../components/charts/chartjs';
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
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        gridLines: {
          display: true,
        },
        ticks: {
          display: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        barPercentage: 1,
        gridLines: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
    ],
  },
};
const Business = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Finance Dashboard" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Row gutter={15}>
              <Col md={12}>
                <Focard>
                  <Cards headless title="Profit">
                    <div className="focard-details">
                      <Heading as="h1">$25,872</Heading>
                      <p>
                        <span>
                          <FeatherIcon icon="trending-up" /> 25%
                        </span>
                        <span> 20,641 (prev)</span>
                      </p>
                    </div>
                    <ChartjsAreaChart
                      labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
                      datasets={[
                        {
                          data: [30, 10, 25, 25, 10, 30],
                          borderColor: '#5F63F2',
                          borderWidth: 3,
                          fill: true,
                          backgroundColor: '#5F63F230',
                        },
                      ]}
                      height={80}
                    />
                  </Cards>
                </Focard>
              </Col>
              <Col md={12}>
                <Focard>
                <Cards headless title="Gross Profit">
                  <div className="focard-details">
                    <Heading as="h1">$25,872</Heading>
                    <p>Engaged Users</p>
                    <p>
                      <span>
                        <FeatherIcon icon="trending-up" /> 25%
                      </span>
                      <span> 20,641 (prev)</span>
                    </p>
                  </div>
                  <ChartjsAreaChart
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
                    datasets={[
                      {
                        data: [30, 10, 25, 25, 10, 30],
                        borderColor: '#20C997',
                        borderWidth: 3,
                        fill: true,
                        backgroundColor: '#20C99730',
                      },
                    ]}
                    height={80}
                  />
                </Cards>
                </Focard>
              </Col>
              <Col md={12}>
                <Cards headless title="Quick Ratio">
                  <div>
                    <Heading as="h1">1.8</Heading>
                    <Progress percent={80} status="success" />
                    <p>
                      <strong>1 or higher</strong> quick ratio target
                    </p>
                  </div>
                </Cards>
              </Col>
              <Col md={12}>
                <Cards headless title="Current Ratio">
                  <div>
                    <Heading as="h1">2.4</Heading>
                    <Progress percent={72} status="warning" />
                    <p>
                      <strong>3 or higher</strong> current ratio target
                    </p>
                  </div>
                </Cards>
              </Col>
            </Row>
          </Col>
          <Col md={12}>
            <Cards
              isbutton={
                <div className="card-nav">
                  <ul>
                    <li>
                      <Link to="#">
                        Week
                      </Link>
                    </li>
                    <li className="active">
                      <Link to="#">
                        Month
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Year
                      </Link>
                    </li>
                  </ul>
                </div>
              }
              title={<div>Cash Flow <span>Nov 23, 2019 - Nov 29, 2019</span></div>}
              size="large"
            >
              <CardBarChart>
              <div className="d-flex flex-grid">
                <div className="flex-grid-child">
                  <p>Current Balance</p>
                  <Heading as="h3">
                    $25,472
                  </Heading>
                </div>
                <div className="flex-grid-child">
                  <p>Cash In</p>
                  <Heading as="h3">
                    $35,414
                  </Heading>
                </div>
                <div className="flex-grid-child">
                  <p>Cash Out</p>
                  <Heading as="h3">
                    $45,798
                  </Heading>
                </div>
              </div>
              <ChartjsBarChartTransparent
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                datasets={[
                  {
                    data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                    backgroundColor: '#20C99780',
                    hoverBackgroundColor: '#20C997',
                    label: 'Gained',
                  },
                  {
                    data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                    backgroundColor: '#FF4D4F80',
                    hoverBackgroundColor: '#FF4D4F',
                    label: 'Lost',
                  },
                ]}
                height={150}
              />
              </CardBarChart>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards
              isbutton={
                <Radio.Group defaultValue={3}>
                  <Radio.Button value={2}>Week</Radio.Button>
                  <Radio.Button value={3}>Month</Radio.Button>
                  <Radio.Button value={4}>Year</Radio.Button>
                </Radio.Group>
              }
              title={<div>Income And Expenses <span>Nov 23, 2019 - Nov 29, 2019</span></div>}
              size="large"
            >
              <Col md={8}>
                <div>
                  <p>Total income</p>
                  <Heading as="h1">
                    $952,784
                    <sub>
                      <FeatherIcon icon="arrow-up" /> 37% Since last month
                    </sub>
                  </Heading>
                </div>
                <div>
                  <p>Total expenses</p>
                  <Heading as="h1">
                    $274,784
                    <sub>
                      <FeatherIcon icon="arrow-up" /> 25% Since last month
                    </sub>
                  </Heading>
                </div>
                <div>
                  <p>Cost of goods sold</p>
                  <Heading as="h1">
                    $532,784
                    <sub>
                      <FeatherIcon icon="arrow-up" /> 25% Since last month
                    </sub>
                  </Heading>
                </div>
                <div>
                  <p>Net profit</p>
                  <Heading as="h1">
                    $252,727
                    <sub>
                      <FeatherIcon icon="arrow-up" /> 25% Since last month
                    </sub>
                  </Heading>
                </div>
              </Col>
              <Col md={16}>
                <ChartjsBarChartTransparent
                  labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                  datasets={[
                    {
                      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                      backgroundColor: '#5F63F280',
                      hoverBackgroundColor: '#5F63F2',
                      label: 'Total Income',
                    },
                    {
                      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                      backgroundColor: '#FF69A580',
                      hoverBackgroundColor: '#FF69A5',
                      label: 'Cost of goods sold',
                    },
                    {
                      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                      backgroundColor: '#FA8B0C80',
                      hoverBackgroundColor: '#FA8B0C',
                      label: 'Total expenses',
                    },
                    {
                      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                      backgroundColor: '#20C99780',
                      hoverBackgroundColor: '#20C997',
                      label: 'Net profit',
                    },
                  ]}
                  height={150}
                />
              </Col>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Account Receivable" more={content}>
              <ChartjsLineChart
                labels={['Current', '1-30', '30-60', '60-90', '90']}
                datasets={[
                  {
                    data: [7, 10, 8, 14, 7],
                    borderColor: '#FA8B0C',
                    borderWidth: 3,
                    fill: false,
                  },
                ]}
                height={100}
                options={{
                  ...options,
                  elements: {
                    point: {
                      radius: 0,
                    },
                  },
                }}
              />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Account Payable" more={content}>
              <ChartjsLineChart
                labels={['Current', '1-30', '30-60', '60-90', '90']}
                datasets={[
                  {
                    data: [7, 10, 8, 14, 7],
                    borderColor: '#2C99FF',
                    borderWidth: 3,
                    fill: false,
                  },
                ]}
                height={100}
                options={{
                  ...options,
                  elements: {
                    point: {
                      radius: 0,
                    },
                  },
                }}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Business;
