import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { CardFreshFrame } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import FeatherIcon from 'feather-icons-react';
import { Icon } from './icon-styled';
import { featherIcons } from '../../config/icon/icon.json';

const FeatherSvgIcons = props => {
  return (
    <Fragment>
      <PageHeader title="Feather Icons" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <CardFreshFrame title="Simply beautiful open source icons" size="learge" more={false}>
              <Row gutter={15}>
                {featherIcons.map((icon, index) => {
                  return (
                    <Col md={6} key={index + 1}>
                      <Icon>
                        <FeatherIcon icon={icon} size={18} />
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
