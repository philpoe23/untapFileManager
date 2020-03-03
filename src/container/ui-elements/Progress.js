import React, { Fragment, useState } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Progress, Button, Tooltip } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
const ButtonGroup = Button.Group;

const ProgressBar = props => {
  const [state, setState] = useState({
    percent: 0,
  });
  const increase = () => {
    let percent = state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    setState({ percent });
  };

  const decline = () => {
    let percent = state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    setState({ percent });
  };
  return (
    <Fragment>
      <PageHeader title="Progress Bar" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Progress bar">
              <Progress percent={30} />
              <Progress percent={50} status="active" />
              <Progress percent={70} status="exception" />
              <Progress percent={100} />
              <Progress percent={50} showInfo={false} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Circular progress bar" caption="The simplest use of Progress bar">
              <Progress type="circle" percent={75} />
              <Progress type="circle" percent={70} status="exception" />
              <Progress type="circle" percent={100} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Mini size Circular progress bar" caption="The simplest use of Progress bar">
              <Progress type="circle" percent={30} width={80} />
              <Progress type="circle" percent={70} width={80} status="exception" />
              <Progress type="circle" percent={100} width={80} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Mini size progress bar" caption="The simplest use of Progress bar">
              <Progress size="small" percent={30} width={80} />
              <Progress size="small" percent={70} width={80} status="exception" />
              <Progress size="small" percent={100} width={80} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Dashboard" caption="The simplest use of Progress bar">
              <Progress type="dashboard" percent={70} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Square linecaps" caption="The simplest use of Progress bar">
              <Progress strokeLinecap="square" percent={75} />
              <Progress strokeLinecap="square" type="circle" percent={75} />
              <Progress strokeLinecap="square" type="dashboard" percent={75} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Square linecaps" caption="The simplest use of Progress bar">
              <Progress strokeLinecap="square" percent={75} />
              <Progress strokeLinecap="square" type="circle" percent={75} />
              <Progress strokeLinecap="square" type="dashboard" percent={75} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Dynamic" caption="The simplest use of Progress bar">
              <Progress percent={state.percent} />
              <ButtonGroup>
                <Button onClick={decline} icon="minus" />
                <Button onClick={increase} icon="plus" />
              </ButtonGroup>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Dynamic circle" caption="The simplest use of Progress bar">
              <Progress type="circle" percent={state.percent} />
              <ButtonGroup>
                <Button onClick={decline} icon="minus" />
                <Button onClick={increase} icon="plus" />
              </ButtonGroup>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Custom Text" caption="The simplest use of Progress bar">
              <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
              <Progress type="circle" percent={100} format={() => 'Done'} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Progress bar with success segment" caption="The simplest use of Progress bar">
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} />
              </Tooltip>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} type="circle" />
              </Tooltip>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} type="dashboard" />
              </Tooltip>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Custom line gradient" caption="The simplest use of Progress bar">
              <Progress
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                percent={99.9}
              />
              <Progress
                strokeColor={{
                  from: '#108ee9',
                  to: '#87d068',
                }}
                percent={99.9}
                status="active"
              />
              <Progress
                type="circle"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                percent={90}
              />
              <Progress
                type="circle"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                percent={100}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default ProgressBar;
