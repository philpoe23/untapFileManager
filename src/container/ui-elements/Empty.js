import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Empty } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const EmptyData = () => {
  return (
    <Fragment>
      <PageHeader title="Empty" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless title="Basic" caption="The simplest use of Empty">
              <Empty />
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Chose image" caption="The simplest use of Empty">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Customize" caption="The simplest use of Empty">
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
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default EmptyData;
