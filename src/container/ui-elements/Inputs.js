import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Input } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const Inputs = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Input" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic">
              <Input placeholder="Basic usage" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Three sizes of Input">
              <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
              <br />
              <br />
              <Input placeholder="default size" prefix={<UserOutlined />} />
              <br />
              <br />
              <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Textarea">
              <TextArea rows={4} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Inputs;
