import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import {
  Complete,
  Customize,
  CustomizComponent,
  AutoCompletes,
  LookupPatterns,
  LookupPatternsWithIcon,
} from '../../components/autoComplete/autoComplete';

const AutoComplete = () => {
  return (
    <Fragment>
      <PageHeader title="AutoComplete" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of AutoComplete">
              <Complete />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Customize" caption="The simplest use of AutoComplete">
              <Customize />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Customize Components" caption="The simplest use of AutoComplete">
              <CustomizComponent />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Auto Complete" caption="The simplest use of AutoComplete">
              <AutoCompletes />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Lookup-Patterns" caption="The simplest use of AutoComplete">
              <LookupPatterns />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Lookup-Patterns with Icon" caption="The simplest use of AutoComplete">
              <LookupPatternsWithIcon />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default AutoComplete;
