import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../../styled';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';
import { radar } from '../../../config/dataService/recharts.json';

const ReChartRadar = () => {
  return (
    <Fragment>
      <PageHeader title="Rechats Radar Chart" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="SIMPLE RADAR CHART" size="large">
              <RadarChart cx={300} cy={250} outerRadius={150} width={750} height={500} data={radar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="SPECIFIED DOMAIN RADAR CHART" size="large">
              <RadarChart cx={300} cy={250} outerRadius={150} width={750} height={500} data={radar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default ReChartRadar;
