import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../../styled';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';
import { Complete, Customize, CustomizComponent, AutoCompletes, LookupPatterns, LookupPatternsWithIcon } from '../../../components/antd/auto-complete/auto-complete';

const AutoComplete = props => {
  return (
    <Fragment>
      <PageHeader title="AutoComplete" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of AutoComplete">
              <Complete />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Customize" caption="The simplest use of AutoComplete">
              <Customize />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Customize Components" caption="The simplest use of AutoComplete">
              <CustomizComponent />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Auto Complete" caption="The simplest use of AutoComplete">
              <AutoCompletes />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Lookup-Patterns" caption="The simplest use of AutoComplete">
              <LookupPatterns />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Lookup-Patterns with Icon" caption="The simplest use of AutoComplete">
              <LookupPatternsWithIcon />
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default AutoComplete;
