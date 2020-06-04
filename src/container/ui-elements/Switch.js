import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Switch, Icon } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const Switches = () => {
  return (
    <Fragment>
      <PageHeader title="Switch" />
      <Main>
        <Row gutter={25}>
          <Col md={12}>
            <Cards title="Basic" caption="The simplest use of Switch">
              <Switch defaultChecked />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Size" caption="The simplest use of Switch">
              <Switch defaultChecked style={{marginRight: 20}} />
              <Switch defaultChecked size="small" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Text and Icon" caption="The simplest use of Switch">
              <div>
                <Switch checkedChildren="a" unCheckedChildren="b" defaultChecked />
                <br />
                <Switch checkedChildren="1" unCheckedChildren="0" />
                <br />
                <Switch
                  checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />}
                  defaultChecked
                />
              </div>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Loading" caption="The simplest use of Switch">
              <div>
                <Switch loading defaultChecked />
                <br />
                <Switch size="small" loading />
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Switches;
