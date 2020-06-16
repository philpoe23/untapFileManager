import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { AnIcon, IconWrapper } from './IconStyled';
import * as Icons from '@ant-design/icons';

const FeatherSvgIcons = () => {
  return (
    <Fragment>
      <PageHeader title="Antd Icons" />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <IconWrapper>
              <Cards title="Simply beautiful open source icons" size="learge">
                <Row gutter={15}>
                  {Object.keys(Icons)
                    .filter(
                      item =>
                        item !== 'default' &&
                        item !== 'setTwoToneColor' &&
                        item !== 'getTwoToneColor' &&
                        item !== 'createFromIconfontCN',
                    )
                    .map((icon, index) => {
                      const CustomTag = Icons[icon];
                      return (
                        <Col lg={6} md={12} xs={24} key={index}>
                          <AnIcon className="icon-single">
                            <CustomTag />
                            <span> {icon}</span>
                          </AnIcon>
                        </Col>
                      );
                    })}
                </Row>
              </Cards>
            </IconWrapper>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default FeatherSvgIcons;
