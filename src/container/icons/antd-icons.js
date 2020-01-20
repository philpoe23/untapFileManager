import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { CardFreshFrame } from '../../components/cards/frame/cards-frame';
import { Row, Col, Icon } from 'antd';
import { Main } from '../styled';
import { AnIcon } from './icon-styled';
import { antdIcons } from '../../config/icon/icon.json';

const FeatherSvgIcons = props => {
  return (
    <Fragment>
      <PageHeader title="Antd Icons" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <CardFreshFrame title="Simply beautiful open source icons" size="learge" more={false}>
              <Row gutter={15}>
                {antdIcons.map((icon, index) => {
                  return (
                    <Col md={6} key={index + 1}>
                      <AnIcon>
                        <Icon type={icon} size={18} />
                        <span>{icon}</span>
                      </AnIcon>
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
