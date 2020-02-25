import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { CardFreshFrame } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import FontAwesome from 'react-fontawesome';
import { Icon } from './icon-styled';
import { faIcons } from '../../config/icon/icon.json';

const FeatherSvgIcons = props => {
  return (
    <Fragment>
      <PageHeader title="Font Awesome Icons" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <CardFreshFrame title="Simply beautiful open source icons" size="learge" more={false}>
              <Row gutter={15}>
                {faIcons.map((icon, index) => {
                  return (
                    <Col md={6} key={index + 1}>
                      <Icon>
                        <FontAwesome className="super-crazy-colors" name={icon} size="2x" style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
                        <span>{icon}</span>
                      </Icon>
                    </Col>
                  );
                })}
              </Row>
            </CardFreshFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default FeatherSvgIcons;
