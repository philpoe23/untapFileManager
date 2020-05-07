import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Icon } from 'antd';
import { Main } from '../styled';
import { AnIcon } from './IconStyled';
import { antdIcons } from '../../config/icon/icon.json';

const FeatherSvgIcons = () => {
  return (
    <Fragment>
      <PageHeader title="Antd Icons" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards title="Simply beautiful open source icons" size="learge">
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
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default FeatherSvgIcons;
