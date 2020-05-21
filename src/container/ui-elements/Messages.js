import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, message, Space } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';

const Messages = () => {
  const info = () => {
    message.info('This is a normal message');
  };

  const success = () => {
    message.success('This is a success message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const warning = () => {
    message.warning('This is a warning message');
  };

  const customSuccess = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  };

  const loadingSuccess = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };

  return (
    <Fragment>
      <PageHeader ghost title="Message" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic">
              <Button type="primary" onClick={info}>
                Display normal message
              </Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Customize">
              <Button onClick={customSuccess}>Customized display duration</Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Other types of message">
              <Space>
                <Button onClick={success}>Success</Button>
                <Button onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
              </Space>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Loading">
              <Button onClick={loadingSuccess}>Display a loading indicator</Button>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Messages;
