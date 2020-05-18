import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import * as Line from 'react-line-awesome';
import { Icon } from './IconStyled';

const FeatherSvgIcons = props => {
  console.log(Line);
  return (
    <Fragment>
      <PageHeader title="Line Awesome Icons" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards title="Simply beautiful open source icons" size="learge">
              <Row gutter={15}>
                {Object.keys(Line).map((icon, index) => {
                  const CustomTag = Line[icon];
                  console.log(Line);
                  return (
                    <Col md={6} key={index + 1}>
                      <Icon>
                        <CustomTag className="custom-class" component="span" />
                        <span>{icon}</span>
                      </Icon>
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
