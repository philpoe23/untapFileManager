import React from 'react';
import { Row, Col, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const { TextArea } = Input;
const Inputs = () => {
  return (
    <>
      <PageHeader ghost title="Input" />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Basic">
              <Input placeholder="Basic usage" />
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
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
          <Col md={12} sm={12} xs={24}>
            <Cards title="Textarea">
              <TextArea rows={4} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Inputs;
