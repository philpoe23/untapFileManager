import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, message, Popconfirm } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Link } from 'react-router-dom';

const Confirme = () => {
  const confirm = e => {
    console.log(e);
    message.success('Click on Yes');
  };

  const cancel = e => {
    console.log(e);
    message.error('Click on No');
  };

  const text = 'Are you sure to delete this task?';
  const onConfirm = () => {
    message.info('Clicked on Yes.');
  };

  return (
    <Fragment>
      <PageHeader ghost title="Popconfirm" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic">
              <Popconfirm
                title="Are you sure delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Link to="#">Delete</Link>
              </Popconfirm>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Placement">
              <div className="demo">
                <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
                  <Popconfirm placement="topLeft" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>TL</Button>
                  </Popconfirm>
                  <Popconfirm placement="top" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>Top</Button>
                  </Popconfirm>
                  <Popconfirm placement="topRight" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>TR</Button>
                  </Popconfirm>
                </div>
                <div style={{ width: 70, float: 'left' }}>
                  <Popconfirm placement="leftTop" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>LT</Button>
                  </Popconfirm>
                  <Popconfirm placement="left" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>Left</Button>
                  </Popconfirm>
                  <Popconfirm placement="leftBottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>LB</Button>
                  </Popconfirm>
                </div>
                <div style={{ width: 70, marginLeft: 304 }}>
                  <Popconfirm placement="rightTop" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>RT</Button>
                  </Popconfirm>
                  <Popconfirm placement="right" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>Right</Button>
                  </Popconfirm>
                  <Popconfirm placement="rightBottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>RB</Button>
                  </Popconfirm>
                </div>
                <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
                  <Popconfirm placement="bottomLeft" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>BL</Button>
                  </Popconfirm>
                  <Popconfirm placement="bottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>Bottom</Button>
                  </Popconfirm>
                  <Popconfirm placement="bottomRight" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button>BR</Button>
                  </Popconfirm>
                </div>
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Confirme;
