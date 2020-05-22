import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Tag } from '../../components/tags/tags';

const Tags = () => {
  const log = e => {
    //console.log(e);
  };

  const checked = checked => {
    console.log(checked);
  };

  const preventDefault = e => {
    e.preventDefault();
    // console.log('Clicked! But prevent default.');
  };

  return (
    <Fragment>
      <PageHeader title="Tags" />
      <Main>
        <Row gutter={25}>
          <Col md={12}>
            <Cards title="Basic" caption="The simplest use of tags">
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
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Colorful Tag" caption="The simplest use of tags">
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
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Checkable Tag" caption="The simplest use of tags">
              <Tag checked onChange={checked}>
                Tag 1
              </Tag>
              <Tag checked onChange={checked}>
                Tag 2
              </Tag>
              <Tag checked onChange={checked}>
                Tag 3
              </Tag>
              <Tag checked onChange={checked}>
                Tag 4
              </Tag>
              <Tag checked onChange={checked}>
                Tag 5
              </Tag>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Hot Tag" caption="The simplest use of tags">
              <Tag hottags onChange={checked} data={['Movies', 'Books', 'Music', 'Sports']} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Animated Tag" caption="The simplest use of tags">
              <Tag animate onChange={checked} data={['Movies', 'Books', 'Music', 'Sports']} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Tags;
