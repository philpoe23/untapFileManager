import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col, Empty } from 'antd';
import { Main } from '../../styled';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';

const EmptyData = props => {
  return (
    <Fragment>
      <PageHeader title="Empty" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of Empty">
              <Empty />
            </CardHeadLessFrame>
          </Col>
          <Col md={24}>
            <CardHeadLessFrame title="Chose image" caption="The simplest use of Empty">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </CardHeadLessFrame>
          </Col>
          <Col md={24}>
            <CardHeadLessFrame title="Customize" caption="The simplest use of Empty">
              <Empty
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                imageStyle={{
                  height: 60,
                }}
                description={
                  <span>
                    Customize <a href="#API">Description</a>
                  </span>
                }
              ></Empty>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default EmptyData;
