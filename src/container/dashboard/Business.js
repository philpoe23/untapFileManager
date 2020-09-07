import React, { useState, useEffect } from 'react';
import { Row, Col, Progress } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Focard, CardBarChart, ExList, RatioCard, IncomeExpenseWrapper } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';

import { ChartjsAreaChart, ChartjsBarChartTransparent, ChartjsLineChart } from '../../components/charts/chartjs';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { cashFlowGetData, cashFlowFilterData } from '../../redux/chartContent/actionCreator';

const Business = () => {
  const dispatch = useDispatch();
  const { cashFlowState, cfIsLoading } = useSelector(state => {
    return {
      cashFlowState: state.chartContent.cashFlowData,
      cfIsLoading: state.chartContent.cfIsLoading,
    };
  });
  const [state, setState] = useState({
    cashFlowActive: 'month',
    incomeFlowActive: 'month',
  });

  useEffect(() => {
    if (cashFlowGetData) {
      dispatch(cashFlowGetData());
    }
  }, [dispatch]);

  const moreContent = (
    <>
      <NavLink to="#">
        <span>Total Income</span>
      </NavLink>
      <NavLink to="#">
        <span>Total Expense</span>
      </NavLink>
      <NavLink to="#">
        <span>Net Profit</span>
      </NavLink>
    </>
  );

  const lineChartOptions = {
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

  const handleActiveChangeCash = value => {
    setState({
      ...state,
      cashFlowActive: value,
    });
  };

  const handleActiveChangeIncome = value => {
    setState({
      ...state,
      incomeFlowActive: value,
    });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Finance Dashboard"
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
        <Row gutter={25}>
          <Col xxl={12} xs={24}>
            <Row gutter={25}>
              <Col md={12}>
                <Focard>
                  <div className="forcast-card-box">
                    <Cards headless title="Net Profit">
                      <div className="focard-details growth-downward">
                        <Heading as="h1">$25.3k</Heading>
                        <p className="focard-status">
                          <span className="focard-status__percentage">
                            <FeatherIcon icon="arrow-down" /> 25%
                          </span>
                          <span>Since last month</span>
                        </p>
                      </div>
                      <ChartjsAreaChart
                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                        datasets={[
                          {
                            data: [30, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                            borderColor: '#5F63F2',
                            borderWidth: 3,
                            fill: true,
                            backgroundColor: '#5F63F230',
                          },
                        ]}
                        height={80}
                      />
                    </Cards>
                  </div>
                </Focard>
              </Col>
              <Col md={12}>
                <Focard>
                  <div className="forcast-card-box">
                    <Cards headless title="Gross Profit">
                      <div className="focard-details growth-upward">
                        <Heading as="h1">$82.24k</Heading>
                        <p className="focard-status">
                          <span className="focard-status__percentage">
                            <FeatherIcon icon="arrow-up" /> 25%
                          </span>
                          <span>Since last month</span>
                        </p>
                      </div>
                      <ChartjsAreaChart
                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                        datasets={[
                          {
                            data: [30, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                            borderColor: '#20C997',
                            borderWidth: 3,
                            fill: true,
                            backgroundColor: '#20C99730',
                          },
                        ]}
                        height={80}
                      />
                    </Cards>
                  </div>
                </Focard>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <RatioCard>
                  <Cards headless title="Quick Ratio">
                    <div className="ratio-content">
                      <Heading as="h1">1.8</Heading>
                      <Progress percent={80} status="success" />
                      <p>
                        <strong>1 or higher</strong> quick ratio target
                      </p>
                    </div>
                  </Cards>
                </RatioCard>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <RatioCard>
                  <Cards headless title="Current Ratio">
                    <div className="ratio-content">
                      <Heading as="h1">2.4</Heading>
                      <Progress percent={72} status="warning" />
                      <p>
                        <strong>3 or higher</strong> current ratio target
                      </p>
                    </div>
                  </Cards>
                </RatioCard>
              </Col>
            </Row>
          </Col>
          <Col xxl={12} xs={24}>
            {cashFlowState !== null && (
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.cashFlowActive === 'week' ? 'active' : 'regular'}>
                        <Link onClick={() => handleActiveChangeCash('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.cashFlowActive === 'month' ? 'active' : 'regular'}>
                        <Link onClick={() => handleActiveChangeCash('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.cashFlowActive === 'year' ? 'active' : 'regular'}>
                        <Link onClick={() => handleActiveChangeCash('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title={
                  <div>
                    Cash Flow <span>Nov 23, 2019 - Nov 29, 2019</span>
                  </div>
                }
                size="large"
                more={moreContent}
              >
                <CardBarChart>
                  <div className="card-bar-top d-flex flex-grid">
                    <div className="flex-grid-child">
                      <p>Current Balance</p>
                      <Heading as="h3" className="color-primary">
                        ${cashFlowState.current}
                      </Heading>
                    </div>
                    <div className="flex-grid-child">
                      <p>Cash In</p>
                      <Heading as="h3">${cashFlowState.in}</Heading>
                    </div>
                    <div className="flex-grid-child">
                      <p>Cash Out</p>
                      <Heading as="h3">${cashFlowState.out}</Heading>
                    </div>
                  </div>
                  <ChartjsBarChartTransparent
                    labels={cashFlowState.labels}
                    datasets={[
                      {
                        data: cashFlowState.dataIn,
                        backgroundColor: '#20C99750',
                        hoverBackgroundColor: '#20C997',
                        label: 'Cash in',
                        maxBarThickness: 10,
                        barThickness: 12,
                      },
                      {
                        data: cashFlowState.dataOut,
                        backgroundColor: '#FF4D4F50',
                        hoverBackgroundColor: '#FF4D4F',
                        label: 'Cash out',
                        maxBarThickness: 10,
                        barThickness: 12,
                      },
                    ]}
                    // height={126}
                    options={{
                      maintainAspectRatio: true,
                      responsive: true,
                      layout: {
                        padding: {
                          top: 20,
                        },
                      },
                      tooltips: {
                        mode: 'label',
                        intersect: false,
                        // backgroundColor: '#fff',
                        position: 'average',

                        // titleFontColor: '#5A5F7D',
                        titleFontSize: 12,
                        titleSpacing: 15,
                        // bodyFontColor: '#868EAE',
                        bodyFontSize: 13,
                        // borderColor: '#F1F2F6',
                        borderWidth: 2,
                        bodySpacing: 15,
                        xPadding: 15,
                        yPadding: 15,
                        zIndex: 999999,
                        callbacks: {
                          label(t, d) {
                            const dstLabel = d.datasets[t.datasetIndex].label;
                            const { yLabel } = t;
                            return `${yLabel} ${dstLabel}`;
                          },
                        },
                      },
                      legend: {
                        display: false,
                        position: 'top',
                        align: 'end',
                        labels: {
                          boxWidth: 6,
                          display: true,
                          usePointStyle: true,
                        },
                      },

                      scales: {
                        yAxes: [
                          {
                            gridLines: {
                              color: '#e5e9f2',
                              borderDash: [8, 4],
                              zeroLineColor: 'transparent',
                            },

                            ticks: {
                              beginAtZero: true,
                              fontSize: 12,
                              fontColor: '#182b49',
                              max: Math.max(...cashFlowState.dataIn),
                              stepSize: Math.max(...cashFlowState.dataIn) / 5,
                            },
                          },
                        ],
                        xAxes: [
                          {
                            gridLines: {
                              display: false,
                            },
                            ticks: {
                              beginAtZero: true,
                              fontSize: 12,
                              fontColor: '#182b49',
                            },
                          },
                        ],
                      },
                    }}
                  />
                </CardBarChart>
              </Cards>
            )}
          </Col>
          <Col md={24}>
            <IncomeExpenseWrapper>
              <Cards
                isbutton={
                  <div className="card-nav">
                    <ul>
                      <li className={state.incomeFlowActive === 'week' ? 'active' : 'regular'}>
                        <Link onClick={() => handleActiveChangeIncome('week')} to="#">
                          Week
                        </Link>
                      </li>
                      <li className={state.incomeFlowActive === 'month' ? 'active' : 'regular'}>
                        <Link onClick={() => handleActiveChangeIncome('month')} to="#">
                          Month
                        </Link>
                      </li>
                      <li className={state.incomeFlowActive === 'year' ? 'active' : 'regular'}>
                        <Link onClick={() => handleActiveChangeIncome('year')} to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
                title={
                  <div>
                    Income And Expenses <span>Nov 23, 2019 - Nov 29, 2019</span>
                  </div>
                }
                size="large"
                more={moreContent}
              >
                <Row gutter="25">
                  <Col xxl={6} sm={24}>
                    <ExList>
                      <div>
                        <p>Total income</p>
                        <Heading as="h1">
                          <span>$952,784</span>
                          <sub>
                            <span>
                              <FeatherIcon icon="arrow-up" /> 37%
                            </span>
                            Since last month
                          </sub>
                        </Heading>
                      </div>
                      <div>
                        <p>Total expenses</p>
                        <Heading as="h1">
                          <span>$274,784</span>
                          <sub className="growth-downward">
                            <span>
                              <FeatherIcon icon="arrow-down" /> 25%
                            </span>
                            Since last month
                          </sub>
                        </Heading>
                      </div>
                      <div>
                        <p>Cost of goods sold</p>
                        <Heading as="h1">
                          <span>$532,784</span>
                          <sub>
                            <span>
                              <FeatherIcon icon="arrow-up" /> 25%
                            </span>
                            Since last month
                          </sub>
                        </Heading>
                      </div>
                      <div>
                        <p>Net profit</p>
                        <Heading as="h1">
                          <span>$252,727</span>
                          <sub>
                            <span>
                              <FeatherIcon icon="arrow-up" /> 25%
                            </span>
                            Since last month
                          </sub>
                        </Heading>
                      </div>
                    </ExList>
                  </Col>
                  <Col xxl={18} sm={24}>
                    <ChartjsBarChartTransparent
                      labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                      datasets={[
                        {
                          data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                          backgroundColor: '#5F63F240',
                          hoverBackgroundColor: '#5F63F2',
                          label: 'Total Income',
                        },
                        {
                          data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                          backgroundColor: '#FF69A540',
                          hoverBackgroundColor: '#FF69A5',
                          label: 'Cost of goods sold',
                        },
                        {
                          data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                          backgroundColor: '#FA8B0C40',
                          hoverBackgroundColor: '#FA8B0C',
                          label: 'Total expenses',
                        },
                        {
                          data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                          backgroundColor: '#20C99740',
                          hoverBackgroundColor: '#20C997',
                          label: 'Net profit',
                        },
                      ]}
                      height={100}
                      options={{
                        maintainAspectRatio: true,
                        responsive: true,
                        legend: {
                          display: true,
                          position: 'bottom',
                          labels: {
                            boxWidth: 6,
                            display: true,
                            usePointStyle: true,
                          },
                          align: 'start',
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
                                fontSize: 13,
                                fontColor: '#182b49',
                                max: 80,
                                stepSize: 20,
                                callback(label) {
                                  return `${label}k`;
                                },
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
                                fontSize: 13,
                                fontColor: '#182b49',
                              },
                            },
                          ],
                        },
                      }}
                    />
                  </Col>
                </Row>
              </Cards>
            </IncomeExpenseWrapper>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Cards title="Account Receivable" more={moreContent}>
              <ChartjsLineChart
                labels={['Current', '1-30', '30-60', '60-90', '90']}
                datasets={[
                  {
                    data: [105, 145, 95, 149, 90],
                    borderColor: '#FA8B0C',
                    borderWidth: 3,
                    fill: false,
                  },
                ]}
                height={100}
                options={{
                  ...lineChartOptions,
                  elements: {
                    point: {
                      radius: 0,
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
                          fontSize: 13,
                          fontColor: '#182b49',
                          max: 200,
                          stepSize: 50,
                          callback(label) {
                            return `${label}k`;
                          },
                        },
                      },
                    ],
                  },
                }}
              />
            </Cards>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Cards title="Account Payable" more={moreContent}>
              <ChartjsLineChart
                labels={['Current', '1-30', '30-60', '60-90', '90']}
                datasets={[
                  {
                    data: [80, 160, 105, 140, 107],
                    borderColor: '#2C99FF',
                    borderWidth: 3,
                    fill: false,
                  },
                ]}
                height={100}
                options={{
                  ...lineChartOptions,
                  elements: {
                    point: {
                      radius: 0,
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
                          fontSize: 13,
                          fontColor: '#182b49',
                          max: 200,
                          stepSize: 50,
                          callback(label) {
                            return `${label}k`;
                          },
                        },
                      },
                    ],
                  },
                }}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Business;
