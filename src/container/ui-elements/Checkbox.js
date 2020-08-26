import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Checkbox } from '../../components/checkbox/checkbox';

const Checkboxs = () => {
  const [state, setState] = useState({
    checkData: [],
    checked: null,
  });

  const multipleChange = childData => {
    setState({ ...state, checkData: childData });
  };

  const onChange = checked => {
    setState({ ...state, checked });
  };

  return (
    <>
      <PageHeader title="Checkbox" />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="Basic">
              <Checkbox onChange={onChange}>Checkbox</Checkbox>
            </Cards>
            <Cards title="Basic">
              <Checkbox onChange={onChange}>Checkbox</Checkbox>
            </Cards>
            <Cards title="Check all">
              <Checkbox
                multiple
                onChangeTriger={multipleChange}
                item={['Apple', 'Pear', 'Orange']}
                defaultSelect={['Pear']}
              />
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Disabled">
              <Checkbox defaultChecked={false} disabled />
              <br />
              <Checkbox defaultChecked disabled />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Checkboxs;
