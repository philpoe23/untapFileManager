import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Collapse, Icon } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { RightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const Collapses = () => {
  const callback = key => {
    console.log(key);
  };

  const customPanelStyle = {
    background: '#F8F9FB',
    borderRadius: 3,
    marginBottom: 20,
    border: 0,
    overflow: 'hidden',
  };

  return (
    <Fragment>
      <PageHeader title="Collapse" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic">
              <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 3" key="3" disabled>
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Cards>
            <Cards title="Nested Panel">
              <Collapse onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                  <Collapse defaultActiveKey="1">
                    <Panel header="This is panel nest panel" key="1">
                      <p>
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </p>
                    </Panel>
                  </Collapse>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>
                    <p>
                      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as
                      a welcome guest in many households across the world.
                    </p>
                  </p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>
                    <p>
                      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as
                      a welcome guest in many households across the world.
                    </p>
                  </p>
                </Panel>
              </Collapse>
            </Cards>
            <Cards title="No arrow">
              <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel showArrow={false} header="This is panel header 2" key="2">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Accordion">
              <Collapse defaultActiveKey={['1']} accordion>
                <Panel header="This is panel header 1" key="1">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Cards>
            <Cards title="Borderless">
              <Collapse defaultActiveKey={['1']} bordered={false}>
                <Panel header="This is panel header 1" key="1">
                  <p style={{ paddingLeft: '24px' }}>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p style={{ paddingLeft: '24px' }}>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p style={{ paddingLeft: '24px' }}>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Cards>
            <Cards title="Custom Panel">
              <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0} />}
                style={{ background: '#fff' }}
              >
                <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Collapses;
