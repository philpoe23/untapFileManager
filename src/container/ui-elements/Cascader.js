import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { CasCaderStyleWrapper } from './ui-elements-styled';
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
            <Cards title="Basic">
              <Cascader onChange={onChange} />
            </Cards>
            {/* <Cards title="Custom trigger">
              <span>
                Unselect
                &nbsp;
                <Cascader onChange={onChange}>
                  <a href="#">Change city</a>
                </Cascader>
              </span>
            </Cards> */}
            <Cards title="Disabled option">
              <Cascader onChange={onChange} />
            </Cards>
            <Cards title="Size">
              <CasCaderStyleWrapper>
                <Cascader size="large" onChange={onChange} />
                <Cascader onChange={onChange} />
                <Cascader size="small" onChange={onChange} />
              </CasCaderStyleWrapper>
            </Cards>
            <Cards title="Search">
              <Cascader onChange={onChange} isShowSearch />
            </Cards>
            <Cards title="Custom Field Names">
              <Cascader fieldNames={{ label: 'name', value: 'code', children: 'items' }} onChange={onChange} />
            </Cards>
          </Col>
          
          <Col md={12}>
            <Cards title="Default Value">
              <Cascader onChange={onChange} defaultValue={['zhejiang', 'hangzhou', 'xihu']} />
            </Cards>
            <Cards title="Hover">
              <Cascader onChange={onChange} trigger="hover" />
            </Cards>
            <Cards title="Change on select">
              <Cascader onChange={onChange} changeOnSelect={true} />
            </Cards>
            <Cards title="Custom render">
              <Cascader onChange={onChange} />
            </Cards>
            <Cards  title="Lazy Load">
              <Cascader onChange={onChangeLoading} loading data={options} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Cascaders;
