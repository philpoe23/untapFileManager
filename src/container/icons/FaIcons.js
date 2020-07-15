import React from 'react';
import { Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import { Icon, IconWrapper } from './IconStyled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { faIcons } from '../../config/icon/icon.json';

const FeatherSvgIcons = () => {
  return (
    <>
      <PageHeader title="Font Awesome Icons" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <IconWrapper>
              <Cards title="Simply beautiful open source icons" size="learge">
                <Row gutter={25}>
                  {faIcons.map(icon => {
                    return (
                      <Col lg={6} md={12} xs={24} key={icon}>
                        <Icon className="icon-single">
                          <FontAwesome
                            className="super-crazy-colors"
                            name={icon}
                            size="2x"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                          />
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
