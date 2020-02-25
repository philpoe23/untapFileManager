import React, { Fragment, useState } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { CardHeadLessFrame } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { BasicModal, ColordModal, info, success, error, warning, selfDestroyed, showConfirm } from '../../components/modals/antd-modals';

const Modals = () => {
  const [state, setState] = useState({ visible: false, modalType: 'primary', colorModal: false });

  const showModal = e => {
    setState({
      visible: true,
      modalType: e.target.getAttribute('data'),
    });
  };

  const showColorModal = e => {
    setState({
      colorModal: true,
      modalType: e.target.getAttribute('data'),
    });
  };

  const handleOk = e => {
    setState({
      visible: false,
      colorModal: false,
    });
  };

  const handleCancel = e => {
    setState({
      visible: false,
      colorModal: false,
    });
  };

  return (
    <Fragment>
      <PageHeader title="Modals" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <BasicModal type={state.modalType} title="Basic Modal" visible={state.visible} onOk={handleOk} onCancel={handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </BasicModal>
            <CardHeadLessFrame title="Default Modal" size="large" caption="Default Ant Design Modal">
              <p>When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information. Additionally</p>
              <Button click={showModal} type="primary">
                Primary
              </Button>
              <Button click={showModal} type="success">
                Success
              </Button>
              <Button click={showModal} type="danger">
                Danger
              </Button>
              <Button click={showModal} type="warning">
                Warning
              </Button>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <ColordModal type={state.modalType} title="Basic Modal" visible={state.colorModal} onOk={handleOk} onCancel={handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </ColordModal>
            <CardHeadLessFrame title="Color Modal" size="large" caption="Color Ant Design Modal">
              <p>When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information. Additionally</p>
              <Button click={showColorModal} type="primary">
                Primary
              </Button>
              <Button click={showColorModal} type="success">
                Success
              </Button>
              <Button click={showColorModal} type="danger">
                Danger
              </Button>
              <Button click={showColorModal} type="warning">
                Warning
              </Button>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Information Modal" size="large" caption="Notification Ant Design Modal">
              <p>When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information. Additionally</p>
              <Button click={success} type="success">
                Success
              </Button>
              <Button click={error} type="error">
                Error
              </Button>
              <Button click={warning} type="warning">
                Warning
              </Button>
              <Button click={info} type="info">
                Info
              </Button>
              <Button click={selfDestroyed} type="primary">
                Modal Self Destroyed
              </Button>
              <Button click={showConfirm} type="primary">
                Confirm
              </Button>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Modals;
