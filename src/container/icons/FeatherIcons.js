import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import FeatherIcon from 'feather-icons-react';
import { Icon, IconWrapper } from './IconStyled';
import { featherIcons } from '../../config/icon/icon.json';

const FeatherSvgIcons = () => {
  return (
    <Fragment>
      <PageHeader title="Feather Icons" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <IconWrapper>
              <Cards title="Simply beautiful open source icons" size="learge">
                <Row gutter={25}>
                  {featherIcons.map((icon, index) => {
                    return (
                      <Col lg={6} md={8} sm={12} xs={24} key={index + 1}>
                        <Icon className="icon-single">
                          <FeatherIcon icon={icon} size={18} />
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
    </Fragment>
  );
};

export default FeatherSvgIcons;
