import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Progress, Button, Tooltip } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
const ButtonGroup = Button.Group;

const ProgressBar = () => {
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
      <PageHeader ghost title="Progress Bar" />
      <Main>
        <Row gutter={25}>
          <Col md={12}>
            <Cards title="Basic" caption="The simplest use of Progress bar">
              <Progress percent={30} style={{ marginBottom: '15px' }} />
              <Progress percent={50} status="active" style={{ marginBottom: '15px' }} />
              <Progress percent={70} status="exception" style={{ marginBottom: '15px' }} />
              <Progress percent={100} style={{ marginBottom: '15px' }} />
              <Progress percent={50} showInfo={false} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Circular progress bar" caption="The simplest use of Progress bar">
              <Progress type="circle" percent={75} style={{ marginRight: '15px' }} />
              <Progress type="circle" percent={70} status="exception" style={{ marginRight: '15px' }} />
              <Progress type="circle" percent={100} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Mini size Circular progress bar" caption="The simplest use of Progress bar">
              <Progress type="circle" percent={30} width={80} style={{ marginRight: '15px' }} />
              <Progress type="circle" percent={70} width={80} status="exception" style={{ marginRight: '15px' }} />
              <Progress type="circle" percent={100} width={80} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Mini size progress bar" caption="The simplest use of Progress bar">
              <Progress size="small" percent={30} width={80} style={{ marginBottom: '15px' }} />
              <Progress size="small" percent={70} width={80} status="exception" style={{ marginBottom: '15px' }} />
              <Progress size="small" percent={100} width={80} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Dashboard" caption="The simplest use of Progress bar">
              <Progress type="dashboard" percent={70} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Square linecaps" caption="The simplest use of Progress bar">
              <Progress strokeLinecap="square" percent={75} style={{ marginBottom: '15px' }} />
              <Progress strokeLinecap="square" type="circle" percent={75} style={{ marginRight: '15px' }} />
              <Progress strokeLinecap="square" type="dashboard" percent={75} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Square linecaps" caption="The simplest use of Progress bar">
              <Progress strokeLinecap="square" percent={75} style={{ marginBottom: '15px' }} />
              <Progress strokeLinecap="square" type="circle" percent={75} style={{ marginRight: '15px' }} />
              <Progress strokeLinecap="square" type="dashboard" percent={75} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Dynamic" caption="The simplest use of Progress bar">
              <Progress percent={state.percent} />
              <ButtonGroup>
                <Button onClick={decline} icon={<PlusOutlined />} />
                <Button onClick={increase} icon={<MinusOutlined />} />
              </ButtonGroup>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Dynamic circle" caption="The simplest use of Progress bar">
              <Progress type="circle" percent={state.percent} />
              <ButtonGroup>
                <Button onClick={decline} icon={<MinusOutlined />} />
                <Button onClick={increase} icon={<PlusOutlined />} />
              </ButtonGroup>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Custom Text" caption="The simplest use of Progress bar">
              <Progress
                type="circle"
                percent={75}
                format={percent => `${percent} Days`}
                style={{ marginRight: '15px' }}
              />
              <Progress type="circle" percent={100} format={() => 'Done'} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Progress bar with success segment" caption="The simplest use of Progress bar">
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} style={{ marginBottom: '15px' }} />
              </Tooltip>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} type="circle" style={{ marginRight: '15px' }} />
              </Tooltip>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} type="dashboard" />
              </Tooltip>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Custom line gradient" caption="The simplest use of Progress bar">
              <Progress
                strokeColor={{
                  '0%': '#2C99FF',
                  '100%': '#20C997',
                }}
                percent={99.9}
                style={{ marginBottom: '15px' }}
              />
              <Progress
                strokeColor={{
                  from: '#2C99FF',
                  to: '#20C997',
                }}
                percent={99.9}
                status="active"
                style={{ marginBottom: '15px' }}
              />
              <Progress
                type="circle"
                strokeColor={{
                  '0%': '#2C99FF',
                  '100%': '#20C997',
                }}
                percent={90}
                style={{ marginRight: '15px' }}
              />
              <Progress
                type="circle"
                strokeColor={{
                  '0%': '#2C99FF',
                  '100%': '#20C997',
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
