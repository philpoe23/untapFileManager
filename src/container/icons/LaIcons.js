import React from 'react';
import { Row, Col } from 'antd';
import * as Line from 'react-line-awesome';
import { Icon, IconWrapper } from './IconStyled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const FeatherSvgIcons = () => {
  return (
    <>
      <PageHeader title="Line Awesome Icons" />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <IconWrapper>
              <Cards title="Simply beautiful open source icons" size="large">
                <Row gutter={15}>
                  {Object.keys(Line).map(icon => {
                    const CustomTag = Line[icon];
                    return (
                      <Col lg={6} md={12} xs={24} key={icon}>
                        <Icon className="icon-single">
                          <CustomTag className="custom-class" component="i" />
                          <span>{icon}</span>
                        </Icon>
                      </Col>
                    );
                  })}
                </Row>
              </Cards>
            </IconWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default FeatherSvgIcons;
