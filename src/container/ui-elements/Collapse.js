import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Collapse, Icon } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
const { Panel } = Collapse;
const Collapses = () => {
  const callback = key => {
    console.log(key);
  };

  const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };

  return (
    <Fragment>
      <PageHeader title="Collapse" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Collapse">
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
          </Col>
          <Col md={12}>
            <Cards headless title="Accordion" caption="The simplest use of Collapse">
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
          </Col>

          <Col md={12}>
            <Cards headless title="Nested Panel" caption="The simplest use of Collapse">
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
          </Col>
          <Col md={12}>
            <Cards headless title="Borderless" caption="The simplest use of Collapse">
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
          </Col>
          <Col md={12}>
            <Cards headless title="Custom Panel" caption="The simplest use of Collapse">
              <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
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
