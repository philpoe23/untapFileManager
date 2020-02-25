import React, { Fragment, useState } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Rate } from 'antd';
import { Main } from '../styled';
import { CardHeadLessFrame } from '../../components/cards/frame/cards-frame';

const Rating = () => {
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [state, setState] = useState({
    value: 3,
  });

  const handleChange = value => {
    setState({ value });
  };
  const { value } = state;
  return (
    <Fragment>
      <PageHeader title="Rating" />
      <Main>
        <Row gutter={15}>
          <Col md={6}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of Rate">
              <Rate />
            </CardHeadLessFrame>
          </Col>
          <Col md={6}>
            <CardHeadLessFrame title="Half Star" caption="The simplest use of Rate">
              <Rate allowHalf defaultValue={2.5} />
            </CardHeadLessFrame>
          </Col>
          <Col md={6}>
            <CardHeadLessFrame title="Show copywriting" caption="The simplest use of Rate">
              <span>
                <Rate tooltips={desc} onChange={handleChange} value={value} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
              </span>
            </CardHeadLessFrame>
          </Col>
          <Col md={6}>
            <CardHeadLessFrame title="Clear Star" caption="The simplest use of Rate">
              <Rate defaultValue={3} />
              <span className="ant-rate-text">allowClear: true</span>
              <br />
              <Rate allowClear={false} defaultValue={3} />
              <span className="ant-rate-text">allowClear: false</span>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Rating;
