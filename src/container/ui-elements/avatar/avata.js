import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col, Avatar, Icon, Badge } from 'antd';
import { Main } from '../../styled';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';
import { AvatarWraperStyle } from '../ui-elements-styled';

const Avatars = props => {
  return (
    <Fragment>
      <PageHeader title="Avatar" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of Avatar">
              <AvatarWraperStyle>
                <Avatar size={64} icon="user" />
                <Avatar size="large" icon="user" />
                <Avatar icon="user" />
                <Avatar size="small" icon="user" />
              </AvatarWraperStyle>
              <AvatarWraperStyle>
                <Avatar shape="square" size={64} icon="user" />
                <Avatar shape="square" size="large" icon="user" />
                <Avatar shape="square" icon="user" />
                <Avatar shape="square" size="small" icon="user" />
              </AvatarWraperStyle>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Type" caption="The simplest use of Avatar">
              <AvatarWraperStyle>
                <Avatar icon="user" />
                <Avatar icon={<Icon type="user" />} />
                <Avatar>U</Avatar>
                <Avatar>USER</Avatar>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              </AvatarWraperStyle>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="with badge" caption="The simplest use of Avatar">
              <AvatarWraperStyle>
                <span style={{ marginRight: 24 }}>
                  <Badge count={1}>
                    <Avatar shape="square" icon="user" />
                  </Badge>
                </span>
                <span>
                  <Badge dot>
                    <Avatar shape="square" icon="user" />
                  </Badge>
                </span>
              </AvatarWraperStyle>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Avatars;
