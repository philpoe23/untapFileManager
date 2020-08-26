import React, { useState } from 'react';
import { Row, Col, Rate } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

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
    <>
      <PageHeader title="Rating" />
      <Main>
        <Row gutter={25}>
          <Col sm={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of Rate">
              <Rate />
            </Cards>
            <Cards title="Half Star">
              <Rate allowHalf defaultValue={2.5} />
            </Cards>
            <Cards title="Rater">
              <span>
                <Rate tooltips={desc} onChange={handleChange} value={value} />
                &nbsp;&nbsp;
                {`${value} Star`}
              </span>
            </Cards>
          </Col>
          <Col sm={12} xs={24}>
            <Cards title="Clear Star">
              <Rate disabled defaultValue={2} />
            </Cards>
            <Cards title="Clear Star">
              <Rate defaultValue={3} />
              <span className="ant-rate-text">allowClear: true</span>
              <br />
              <Rate allowClear={false} defaultValue={3} style={{ marginTop: 10 }} />
              <span className="ant-rate-text">allowClear: false</span>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Rating;
