import React from 'react';
import { Row, Col } from 'antd';
import { HorizontalForm } from './overview/HorizontalForm';
import { HorizontalIconForm } from './overview/HorizontalIconForm';
import { VerticalForm } from './overview/VerticalForm';
import { VerticalIconForm } from './overview/VerticalIconForm';
import { MultiColumnForm } from './overview/MultiColumnForm';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';

const FormLayout = () => {
  return (
    <>
      <PageHeader ghost title="Forms" />
      <Main>
        <Row gutter={25}>
          <Col lg={12}>
            <HorizontalForm />
          </Col>
          <Col lg={12}>
            <HorizontalIconForm />
          </Col>
          <Col lg={12}>
            <VerticalForm />
          </Col>
          <Col lg={12}>
            <VerticalIconForm />
          </Col>
          <Col xs={24}>
            <MultiColumnForm />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default FormLayout;
