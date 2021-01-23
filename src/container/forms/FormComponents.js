import React from 'react';
import { Row, Col, Form, Input, Card, Switch } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Main, BasicFormWrapper } from '../styled';
import { Tag } from '../../components/tags/tags';
import { PageHeader } from '../../components/page-headers/page-headers';

const FormLayout = () => {
  const log = () => {
    // console.log(e);
  };
  return (
    <>
      <PageHeader ghost title="Forms" />
      <Main>
        <Row gutter={25}>
          <Col lg={12}>
            <Card title="Input Groups">
              <BasicFormWrapper>
                <Form name="sDash_textarea" layout="vertical">
                  <Row gutter="30">
                    <Col lg={12} className="mb-25">
                      <Form.Item name="input-name">
                        <Input prefix={<FeatherIcon icon="user" size={14} />} placeholder="Name" />
                      </Form.Item>
                    </Col>
                    <Col lg={12} className="mb-25">
                      <Form.Item name="input-email">
                        <Input prefix={<FeatherIcon icon="mail" size={14} />} placeholder="Email" />
                      </Form.Item>
                    </Col>
                    <Col lg={12} className="mb-25">
                      <Form.Item name="input-location">
                        <Input prefix={<FeatherIcon icon="map-pin" size={14} />} placeholder="Location" />
                      </Form.Item>
                    </Col>
                    <Col lg={12} className="mb-25">
                      <Form.Item name="input-password">
                        <Input.Password prefix={<FeatherIcon icon="lock" size={14} />} placeholder="Password" />
                      </Form.Item>
                    </Col>
                    <Col lg={12} className="mb-25">
                      <Form.Item name="input-payment">
                        <Input prefix={<FeatherIcon icon="credit-card" size={14} />} placeholder="Payment Method" />
                      </Form.Item>
                    </Col>
                    <Col lg={12} className="mb-25">
                      <Form.Item name="input-phone">
                        <Input prefix={<FeatherIcon icon="phone" size={14} />} placeholder="Phone" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </BasicFormWrapper>
            </Card>
          </Col>
          <Col lg={12}>
            <Card title="Tags">
              <div className="taglist-wrap">
                <Tag>Unremovable</Tag>
                <Tag closable onClose={log}>
                  Tag 2
                </Tag>
                <Tag closable onClose={log}>
                  Tag 3
                </Tag>
              </div>
            </Card>
            <Card title="Toggle buttons">
              <Switch defaultChecked size="large" />
            </Card>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default FormLayout;
