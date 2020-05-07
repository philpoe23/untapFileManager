import React, { Fragment, useState, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Checkbox } from '../../components/checkbox/checkbox';

const Checkboxs = () => {
  const [state, setState] = useState({
    checkdata: [],
  });

  const multipleChange = childData => {
    setState({ checkdata: childData });
  };

  useEffect(() => {
    let unmount = false;
    if (!unmount) {
      console.log(state);
    }
    return () => {
      unmount = true;
    };
  });

  const onChange = (checked, value) => {
    console.log(`checked = ${checked}`);
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
              <Checkbox
                multiple
                onChangeTriger={multipleChange}
                item={['Apple', 'Pear', 'Orange']}
                defaultSelect={['Pear']}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Checkboxs;
