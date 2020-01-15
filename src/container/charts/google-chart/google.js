import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { CardFreshFrame } from '../../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../../styled';
import mapdata from '../../../config/dataService/google-maps.json';

import { GoogleBasicBarChart, GoogleMaterialBarChart, GoogleStackedChart, GoogleCustomColorChart, GoogleOrgChart, GoogleComboChart, GoogleLineChart, GoogleMultiLineChart, GoogleBasicPieChart, Google3dPieChart } from '../../../components/charts/google-chart';

const { data1, data2, data3, data4, data5, data6, data7 } = mapdata;

const GoogleChart = () => {
  return (
    <Fragment>
      <PageHeader title="Google Chart" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardFreshFrame title="Basic bar chart with multiple series" size="large" more={false}>
              <GoogleBasicBarChart data={data1} width="100%" height="300px" title="Population of Largest U.S. Cities" chartArea="50%" />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Material Design" size="large" more={false}>
              <GoogleMaterialBarChart data={data2} width="100%" height="300px" title="Company Performance" subtitle="Sales, Expenses, and Profit: 2014-2017" chartArea="50%" />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Stacked bar chart with multiple series" size="large" more={false}>
              <GoogleStackedChart data={data1} width="100%" height="300px" title="Population of Largest U.S. Cities" chartArea="50%" />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Custom Colors Bar Chart" size="large" more={false}>
              <GoogleCustomColorChart data={data1} width="100%" height="300px" title="Population of Largest U.S. Cities" chartArea="50%" colors={['#b0120a', '#ffab91']} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Combo Chart" size="large" more={false}>
              <GoogleComboChart data={data3} width="100%" height="300px" title="Monthly Coffee Production by Country" chartArea="50%" colors={['#b0120a', '#ffab91', '#e0120a', '#afab91']} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Line Chart" size="large" more={false}>
              <GoogleLineChart data={data4} width="100%" height="300px" title="Monthly Coffee Production by Country" chartArea="50%" />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Multiple Line Chart" size="large" more={false}>
              <GoogleMultiLineChart data={data5} width="100%" height="300px" title="Monthly Coffee Production by Country" chartArea="50%" />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Organization Chart" size="large" more={false}>
              <GoogleOrgChart data={data6} width="100%" height="300px" title="Monthly Coffee Production by Country" chartArea="100%" />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Basic Pie Chart" size="large" more={false}>
              <GoogleBasicPieChart data={data7} width="100%" height="300px" title="My Daily Activities" chartArea="100%" />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="3d Pie Chart" size="large" more={false}>
              <Google3dPieChart data={data7} width="100%" height="300px" title="My Daily Activities" chartArea="100%" />
            </CardFreshFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default GoogleChart;
