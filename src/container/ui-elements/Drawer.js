import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Form, Col, Row, Input, Select, DatePicker } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Drawer } from '../../components/drawer/drawer';

const { Option } = Select;
const Drawers = () => {
  return (
    <Fragment>
      <PageHeader title="Drawer" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Drawer">
              <Drawer title="Basic Drawer" placement="right">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Custom placement" caption="The simplest use of Drawer">
              <Drawer customPlacement title="Basic Drawer">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Render in current dom" caption="The simplest use of Drawer">
              <div
                style={{
                  height: 200,
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid #ebedf0',
                  borderRadius: 2,
                  padding: 48,
                  textAlign: 'center',
                  background: '#fafafa',
                }}
              >
                <Drawer render title="Basic Drawer">
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Drawer>
              </div>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Submit form in drawer" caption="The simplest use of Drawer">
              <Drawer width={700} btnText="+ New account" title="Basic Drawer">
                <Form layout="vertical" hideRequiredMark>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter user name' }]}
                      >
                        <Input placeholder="Please enter user name" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="url" label="Url" rules={[{ required: true, message: 'Please enter url' }]}>
                        <Input
                          style={{ width: '100%' }}
                          addonBefore="http://"
                          addonAfter=".com"
                          placeholder="Please enter url"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="owner"
                        label="Owner"
                        rules={[{ required: true, message: 'Please select an owner' }]}
                      >
                        <Select placeholder="Please select an owner">
                          <Option value="xiao">Xiaoxiao Fu</Option>
                          <Option value="mao">Maomao Zhou</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="type"
                        label="Type"
                        rules={[{ required: true, message: 'Please choose the type' }]}
                      >
                        <Select placeholder="Please choose the type">
                          <Option value="private">Private</Option>
                          <Option value="public">Public</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="approver"
                        label="Approver"
                        rules={[{ required: true, message: 'Please choose the approver' }]}
                      >
                        <Select placeholder="Please choose the approver">
                          <Option value="jack">Jack Ma</Option>
                          <Option value="tom">Tom Liu</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="dateTime"
                        label="DateTime"
                        rules={[{ required: true, message: 'Please choose the dateTime' }]}
                      >
                        <DatePicker.RangePicker
                          style={{ width: '100%' }}
                          getPopupContainer={trigger => trigger.parentNode}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                          {
                            required: true,
                            message: 'please enter url description',
                          },
                        ]}
                      >
                        <Input.TextArea rows={4} placeholder="please enter url description" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Drawer>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Multi Label Drawer" caption="The simplest use of Drawer">
              <Drawer
                title="Basic Drawer"
                childTitle="Lavel Two"
                childDrawer={
                  <Fragment>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Fragment>
                }
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Drawers;
