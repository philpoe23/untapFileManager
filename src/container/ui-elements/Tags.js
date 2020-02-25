import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Tag } from 'antd';
import { Main } from '../styled';
import { CardHeadLessFrame } from '../../components/cards/frame/cards-frame';
import { CheckedTag, HotTag, AnimatedTags } from '../../components/tags/tags';

const Tags = props => {
  const log = e => {
    // console.log(e);
  };

  const preventDefault = e => {
    e.preventDefault();
    // console.log('Clicked! But prevent default.');
  };

  return (
    <Fragment>
      <PageHeader title="Tags" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of tags">
              <Tag>Tag 1</Tag>
              <Tag>
                <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
              </Tag>
              <Tag closable onClose={log}>
                Tag 2
              </Tag>
              <Tag closable onClose={preventDefault}>
                Prevent Default
              </Tag>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Colorful Tag" caption="The simplest use of tags">
              <h4 style={{ marginBottom: 16 }}>Presets:</h4>
              <div>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
              </div>
              <h4 style={{ margin: '16px 0' }}>Custom:</h4>
              <div>
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
              </div>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Checkable Tag" caption="The simplest use of tags">
              <CheckedTag>Tag 1</CheckedTag>
              <CheckedTag>Tag 2</CheckedTag>
              <CheckedTag>Tag 3</CheckedTag>
              <CheckedTag>Tag 4</CheckedTag>
              <CheckedTag>Tag 5</CheckedTag>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Hot Tag" caption="The simplest use of tags">
              <HotTag data={['Movies', 'Books', 'Music', 'Sports']} />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Animated Tag" caption="The simplest use of tags">
              <AnimatedTags data={['Movies', 'Books', 'Music', 'Sports']} />
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Tags;
