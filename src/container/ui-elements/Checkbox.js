import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Checkbox } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { CheckAll } from '../../components/checkbox/checkbox';

const Checkboxs = () => {
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Fragment>
      <PageHeader title="Checkbox" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Checkbox">
              <Checkbox onChange={onChange}>Checkbox</Checkbox>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Disabled" caption="The simplest use of Checkbox">
              <Checkbox defaultChecked={false} disabled />
              <br />
              <Checkbox defaultChecked disabled />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="checkall" caption="The simplest use of Checkbox">
              <CheckAll item={['Apple', 'Pear', 'Orange']} defaultSelect={['Pear']} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Checkboxs;
