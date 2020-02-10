import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../../styled';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';
import { BasicCascader, LazyOptions, ShowSearch } from '../../../components/antd/cascader/cascader';
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
const Cascaders = props => {
  return (
    <Fragment>
      <PageHeader title="Cascader" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of Cascader">
              <BasicCascader data={options} />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Default Value" caption="The simplest use of Cascader">
              <BasicCascader data={options} defaultValue={['zhejiang', 'hangzhou', 'xihu']} />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Hover" caption="The simplest use of Cascader">
              <BasicCascader data={options} trigger="hover" />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Lazy Load" caption="The simplest use of Cascader">
              <LazyOptions data={options2} />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Search" caption="The simplest use of Cascader">
              <ShowSearch data={options} />
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Cascaders;
