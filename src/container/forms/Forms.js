import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main, FormGroupWrapper } from '../styled';
import SignIn from '../profile/authentication/overview/SignIn';
import Signup from '../profile/authentication/overview/Signup';
import ForgotPasswrod from '../profile/authentication/overview/ForgotPasswrod';

const Forms = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Forms" />
      <Main>
        <FormGroupWrapper>
          <Row gutter={15}>
            <Col xs={24}>
              <Cards title="Login Form">
                <SignIn />
              </Cards>
            </Col>
            <Col xs={24}>
              <Cards title="Register Form">
                <Signup />
              </Cards>
            </Col>
            <Col xs={24}>
              <Cards title="Forget Password">
                <ForgotPasswrod />
              </Cards>
            </Col>
          </Row>
        </FormGroupWrapper>
      </Main>
    </Fragment>
  );
};

export default Forms;
