import React, { useLayoutEffect, useState } from 'react';
import { Row, Col, Icon } from 'antd';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Main } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};
const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknow',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

const ReChartRadial = () => {
  const [state, setState] = useState({
    responsive: 0,
  });
  const { responsive } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const element = document.querySelector('.recharts-wrapper');
      const width =
        element !== null
          ? element.closest('.ant-card-body').clientWidth
          : document.querySelector('.ant-card-body').clientWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <PageHeader
        title="Rechats Radial Chart"
        buttons={[
          <CalendarButtonPageHeader key="1" />,
          <ExportButtonPageHeader key="2" />,
          <ShareButtonPageHeader key="3" />,
          <Button key="4" type="primary">
            <Icon type="plus" />
            Add New
          </Button>,
          // <DateRangePickerOne key="5" />,
        ]}
        ghost
      />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <Cards title="SIMPLE RADIAL BAR CHART" size="large">
              <RadialBarChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                cx={responsive / 3}
                cy={responsive / 5}
                innerRadius={20}
                outerRadius={140}
                barSize={10}
                data={data}
              >
                <RadialBar
                  minAngle={15}
                  label={{ position: 'insideStart', fill: '#fff' }}
                  background
                  clockWise
                  dataKey="uv"
                />
                <Legend
                  iconSize={10}
                  width={responsive / 9}
                  height={responsive / 8}
                  layout="vertical"
                  verticalAlign="middle"
                  wrapperStyle={style}
                />
              </RadialBarChart>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ReChartRadial;
