import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { InlineLoginForm, LogInForm } from '../../components/form/form';

const Form = () => {
  return (
    <Fragment>
      <PageHeader title="Form" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Inline Log In Form" caption="The simplest use of Form">
              <InlineLoginForm />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Log In Form" caption="The simplest use of Form">
              <LogInForm />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Form;
