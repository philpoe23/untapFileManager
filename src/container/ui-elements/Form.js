import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { CardHeadLessFrame } from '../../components/cards/frame/cards-frame';
import { InlineLoginForm, LogInForm } from '../../components/form/form';

const Form = () => {
  return (
    <Fragment>
      <PageHeader title="Form" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Inline Log In Form" caption="The simplest use of Form">
              <InlineLoginForm />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Log In Form" caption="The simplest use of Form">
              <LogInForm />
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Form;
