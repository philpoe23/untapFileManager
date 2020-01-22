import React, { Fragment, useState } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../../styled';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';
import { BtnBasic } from '../../../components/antd/buttons/antd-buttons';
import { BasicModal, ColordModal, info, success, error, warning, selfDestroyed, showConfirm } from '../../../components/antd/modals/antd-modals';

const Modals = props => {
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
              <BtnBasic click={showModal} type="primary">
                Primary
              </BtnBasic>
              <BtnBasic click={showModal} type="success">
                Success
              </BtnBasic>
              <BtnBasic click={showModal} type="danger">
                Danger
              </BtnBasic>
              <BtnBasic click={showModal} type="warning">
                Warning
              </BtnBasic>
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
              <BtnBasic click={showColorModal} type="primary">
                Primary
              </BtnBasic>
              <BtnBasic click={showColorModal} type="success">
                Success
              </BtnBasic>
              <BtnBasic click={showColorModal} type="danger">
                Danger
              </BtnBasic>
              <BtnBasic click={showColorModal} type="warning">
                Warning
              </BtnBasic>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Information Modal" size="large" caption="Notification Ant Design Modal">
              <p>When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information. Additionally</p>
              <BtnBasic click={success} type="success">
                Success
              </BtnBasic>
              <BtnBasic click={error} type="error">
                Error
              </BtnBasic>
              <BtnBasic click={warning} type="warning">
                Warning
              </BtnBasic>
              <BtnBasic click={info} type="info">
                Info
              </BtnBasic>
              <BtnBasic click={selfDestroyed} type="primary">
                Modal Self Destroyed
              </BtnBasic>
              <BtnBasic click={showConfirm} type="primary">
                Confirm
              </BtnBasic>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Modals;
