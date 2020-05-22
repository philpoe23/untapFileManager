import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, List } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const Lists = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  return (
    <Fragment>
      <PageHeader ghost title="List" />
      <Main>
        <Row gutter={25}>
          <Col md={12}>
            <Cards title="Simple list">
              <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item.Meta description={item} />}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Lists;
