import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Pagination } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const Paginations = props => {
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  const onChange = pageNumber => {
    console.log('Page: ', pageNumber);
  };

  return (
    <Fragment>
      <PageHeader title="Paginations" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Pagination">
              <Pagination defaultCurrent={1} total={50} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="More Pages" caption="The simplest use of Pagination">
              <Pagination defaultCurrent={1} total={500} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Page size" caption="The simplest use of Pagination">
              <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Quick Jumper" caption="The simplest use of Pagination">
              <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Paginations;
