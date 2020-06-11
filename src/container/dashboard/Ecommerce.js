import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Radio, Table } from 'antd';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import {
  ChartjsAreaChart,
  ChartjsBarChartTransparent,
  ChartjsLineChart,
  ChartjsDonutChart,
} from '../../components/charts/chartjs';
import { NavLink } from 'react-router-dom';
import { VectorMap } from '@south-paw/react-vector-maps';
import worldLowRes from '../../config/dataService/vector.json';
import { Link } from 'react-router-dom';
import { CardBarChart2, LocationMapWrapper, RevenueChartWrapper } from './style';

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
        barPercentage: 1,
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

const revenuecolumns = [
  {
    title: 'Name of Sourse',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Visitors',
    dataIndex: 'visitors',
    key: 'visitors',
  },
  {
    title: 'Page View',
    dataIndex: 'page_View',
    key: 'page_View',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
  {
    title: 'Trend',
    dataIndex: 'trend',
    key: 'trend',
    width: 120,
  },
];
const revenuedata = [
  {
    key: '1',
    name: 'Google',
    visitors: '23,397',
    page_View: '12,201',
    revenue: '$5,536',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [0, 10, 8, 14, 7, 10],
            borderColor: '#5F63F2',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...options,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '2',
    name: 'Facebook',
    visitors: '23,397',
    page_View: '12,201',
    revenue: '$5,536',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [0, 10, 8, 14, 7, 10],
            borderColor: '#FF69A5',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...options,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '3',
    name: 'Email marketing',
    visitors: '23,397',
    page_View: '12,201',
    revenue: '$5,536',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [0, 10, 8, 14, 7, 10],
            borderColor: '#20C997',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...options,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '4',
    name: 'Direct website',
    visitors: '23,397',
    page_View: '12,201',
    revenue: '$5,536',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [0, 10, 8, 14, 7, 10],
            borderColor: '#2C99FF',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...options,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
  {
    key: '5',
    name: 'Referral',
    visitors: '23,397',
    page_View: '12,201',
    revenue: '$5,536',
    trend: (
      <ChartjsLineChart
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        datasets={[
          {
            data: [0, 10, 8, 14, 7, 10],
            borderColor: '#FA8B0C',
            borderWidth: 2,
            fill: false,
          },
        ]}
        height={30}
        width={120}
        options={{
          ...options,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    ),
  },
];

const sellingcolumns = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
    key: 'sold',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];
const sellingdata = [
  {
    key: '1',
    name: 'Samsung Galaxy S8 256GB',
    price: '$280',
    sold: '126',
    revenue: '$38,536',
  },
  {
    key: '2',
    name: 'Half Sleeve Shirt',
    price: '$25',
    sold: '80',
    revenue: '$20,573',
  },
  {
    key: '3',
    name: 'Marco Shoes',
    price: '$32',
    sold: '58',
    revenue: '$20,573',
  },
  {
    key: '4',
    name: 'Marco Shoes',
    price: '$32',
    sold: '58',
    revenue: '$20,573',
  },
  {
    key: '5',
    name: '15" Mackbook Pro',
    price: '$950',
    sold: '58',
    revenue: '$20,573',
  },
  {
    key: '6',
    name: 'Apple iPhone X',
    price: '$985',
    sold: '90',
    revenue: '$20,573',
  },
];

const locationcolumns = [
  {
    title: 'Top Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Order',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];
const locationdata = [
  {
    key: '1',
    location: 'United States',
    order: '397',
    revenue: '$38,536',
  },
  {
    key: '2',
    location: 'United Kingdom',
    order: '420',
    revenue: '$38,536',
  },
  {
    key: '3',
    location: 'Canada',
    order: '210',
    revenue: '$38,536',
  },
  {
    key: '4',
    location: 'China',
    order: '108',
    revenue: '$38,536',
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
const Ecommerce = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Ecommerce Dashboard" />
      <Main>
        <Row gutter={25}>
          <Col md={6}>
            <Cards headless>
              <Row>
                <Col xs={12}>
                  <CardBarChart2>
                    <Heading as="h1">7,461</Heading>
                    <span>Orders</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </Col>
                <Col xs={12}>
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#5F63F230',
                        hoverBackgroundColor: '#5F63F2',
                      },
                    ]}
                    options={options}
                  />
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={6}>
            <Cards headless>
              <Row>
                <Col xs={12}>
                  <CardBarChart2>
                    <Heading as="h1">$28,947</Heading>
                    <span>Revenue</span>
                    <p>
                      <span className="growth-downward">
                        <FeatherIcon icon="arrow-down" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </Col>
                <Col xs={12}>
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#FF69A530',
                        hoverBackgroundColor: '#FF69A5',
                      },
                    ]}
                    options={options}
                  />
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={6}>
            <Cards headless>
              <Row>
                <Col xs={12}>
                  <CardBarChart2>
                    <Heading as="h1">$3,241</Heading>
                    <span>Avg. order value</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </Col>
                <Col xs={12}>
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#20C99730',
                        hoverBackgroundColor: '#20C997',
                      },
                    ]}
                    options={options}
                  />
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={6}>
            <Cards headless>
              <Row>
                <Col xs={12}>
                  <CardBarChart2>
                    <Heading as="h1">45.2k</Heading>
                    <span>Unique visitors</span>
                    <p>
                      <span className="growth-upward">
                        <FeatherIcon icon="arrow-up" /> 25%
                      </span>
                      <span>Since last week</span>
                    </p>
                  </CardBarChart2>
                </Col>
                <Col xs={12}>
                  <ChartjsBarChartTransparent
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    datasets={[
                      {
                        data: [20, 60, 50, 45, 50, 60, 70],
                        backgroundColor: '#2C99FF30',
                        hoverBackgroundColor: '#2C99FF',
                      },
                    ]}
                    options={options}
                  />
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12}>
            <Cards
              isbutton={
                <div className="card-nav">
                  <ul>
                    <li>
                      <Link onClick={handleActiveChange} to="#">
                      Today
                      </Link>
                    </li>
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
              title="Total Revenue"
              size="large"
            >
              <Heading as="h1">
                <span>$72,784</span>
                <span> $52,240</span>
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
          <Col md={12}>
            <div className="full-width-table">
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                        Today
                        </Link>
                      </li>
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
                title="Source Of Revenue Generated"
                size="large"
              >
                <div className="revenue-table">
                  <Table columns={revenuecolumns} dataSource={revenuedata} pagination={false} />
                </div>
              </Cards>
            </div>
          </Col>
          <Col md={8}>
            <div className="full-width-table">
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                        Today
                        </Link>
                      </li>
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
                  title="Top Selling Products"
                  size="large"
                  bodypadding="0px"
                >
                  <div className="top-seller-table">
                    <Table columns={sellingcolumns} dataSource={sellingdata} pagination={false} />
                  </div>
                </Cards>
            </div>
            
          </Col>
          <Col md={8}>
            <LocationMapWrapper>
              <div className="full-width-table">
                <Cards
                    isbutton={
                      <div className="card-nav">
                        <ul>
                          <li>
                            <Link onClick={handleActiveChange} to="#">
                            Today
                            </Link>
                          </li>
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
                    title="Sales By Location"
                    size="large"
                  >
                    <div className="location-map d-flex justify-content-center">
                      <VectorMap {...worldLowRes} fill="#E3E6EF" stroke="white" />
                    </div>
                    
                    <div className="location-table">
                      <Table columns={locationcolumns} dataSource={locationdata} pagination={false} />
                    </div>
                  </Cards>
              </div>
            </LocationMapWrapper>
          </Col>
          <Col md={8}>
            <RevenueChartWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <Link onClick={handleActiveChange} to="#">
                        Today
                        </Link>
                      </li>
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
                title="Revenue By Device"
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
            </RevenueChartWrapper>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Ecommerce;
