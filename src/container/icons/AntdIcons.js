import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { AnIcon } from './IconStyled';
import * as Icons from '@ant-design/icons';

const FeatherSvgIcons = () => {
  const AntdIcons = { ...Icons };
  //console.log(AntdIcons);
  return (
    <Fragment>
      <PageHeader title="Antd Icons" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards title="Simply beautiful open source icons" size="learge">
              <Row gutter={15}>
                {/* {Object.values(Icons).map((Icon, index) => {
                  const CustomTag = Icon;
                  console.log(Icon);
                  return (
                    <Col md={6} key={index + 1}>
                      <CustomTag />
                      <span>{Icon}</span>
                    </Col>
                  );
                })} */}
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default FeatherSvgIcons;
