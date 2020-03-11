import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Cascader } from '../../components/cascader/cascader';

const options = [
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
  const onChange = value => {
    console.log(value);
  };
  const onChangeLoading = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  return (
    <Fragment>
      <PageHeader title="Cascader" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Cascader">
              <Cascader onChange={onChange} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Default Value" caption="The simplest use of Cascader">
              <Cascader onChange={onChange} defaultValue={['zhejiang', 'hangzhou', 'xihu']} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Hover" caption="The simplest use of Cascader">
              <Cascader onChange={onChange} trigger="hover" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Lazy Load" caption="The simplest use of Cascader">
              <Cascader onChange={onChangeLoading} loading data={options} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Search" caption="The simplest use of Cascader">
              <Cascader onChange={onChange} isShowSearch />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Cascaders;
