import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicCascader, LazyOptions, ShowSearch } from '../../components/cascader/cascader';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const options2 = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];
const Cascaders = () => {
  return (
    <Fragment>
      <PageHeader title="Cascader" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Cascader">
              <BasicCascader data={options} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Default Value" caption="The simplest use of Cascader">
              <BasicCascader data={options} defaultValue={['zhejiang', 'hangzhou', 'xihu']} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Hover" caption="The simplest use of Cascader">
              <BasicCascader data={options} trigger="hover" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Lazy Load" caption="The simplest use of Cascader">
              <LazyOptions data={options2} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Search" caption="The simplest use of Cascader">
              <ShowSearch data={options} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Cascaders;
