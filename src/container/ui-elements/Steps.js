import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Icon, Divider } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Popover } from '../../components/popup/popup';
import { Steps, Step } from '../../components/steps/steps';

const customDot = (dot, { status, index }) => (
  <Popover
    placement="bottomLeft"
    content={
      <span className="span">
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const Stepess = () => {
  const [state, setState] = useState({
    current: 0,
  });

  const { current } = state;

  const onChange = current => {
    console.log('onChange:', current);
    setState({ current });
  };

  const next = current => {
    console.log('onChange:', current);
  };

  const prev = current => {
    console.log('onChange:', current);
  };

  return (
    <Fragment>
      <PageHeader title="Steps" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless title="Basic Step" caption="The simplest use of Steps">
              <Steps size="small" current={1}>
                <Step title="Finished" />
                <Step title="In Progress" />
                <Step title="Waiting" />
              </Steps>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="With Icon" caption="The simplest use of Steps">
              <Steps>
                <Step status="finish" title="Login" icon={<Icon type="user" />} />
                <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                <Step status="process" title="Pay" icon={<Icon type="credit-card" />} />
                <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
              </Steps>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Switch Step" caption="The simplest use of Steps">
              <Steps
                isswitch
                steps={[
                  {
                    title: 'First',
                    content: 'First-content',
                  },
                  {
                    title: 'Second',
                    content: 'Second-content',
                  },

                  {
                    title: 'Last',
                    content: 'Last-content',
                  },
                ]}
                onNext={next}
                onPrev={prev}
              />
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Vertical mini version" caption="The simplest use of Steps">
              <Steps direction="vertical" size="small" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Error Status" caption="The simplest use of Steps">
              <Steps current={1} status="error">
                <Step title="Finished" description="This is a description" />
                <Step title="In Process" description="This is a description" />
                <Step title="Waiting" description="This is a description" />
              </Steps>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Custom dot style" caption="The simplest use of Steps">
              <Steps current={1} progressDot={customDot}>
                <Step title="Finished" description="You can hover on the dot." />
                <Step title="In Progress" description="You can hover on the dot." />
                <Step title="Waiting" description="You can hover on the dot." />
                <Step title="Waiting" description="You can hover on the dot." />
              </Steps>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Clickable" caption="The simplest use of Steps">
              <Steps current={current} onChange={onChange}>
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
              </Steps>

              <Divider />

              <Steps current={current} onChange={onChange} direction="vertical">
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
              </Steps>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Navigation Steps" caption="The simplest use of Steps">
              <Steps navigation onChange={onChange}>
                <Step status="finish" title="Step 1" />
                <Step status="process" title="Step 2" />
                <Step status="wait" title="Step 3" />
              </Steps>
              <Steps navigation onChange={onChange}>
                <Step status="finish" title="finish 1" />
                <Step status="finish" title="finish 2" />
                <Step status="process" title="current process" />
                <Step status="wait" title="wait" disabled />
              </Steps>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Stepess;
