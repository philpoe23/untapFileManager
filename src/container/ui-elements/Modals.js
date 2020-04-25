import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Modal, alertModal } from '../../components/modals/antd-modals';

const info = () => {
  alertModal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
};

const success = () => {
  alertModal.success({
    content: 'some messages...some messages...',
  });
};
const error = () => {
  alertModal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
};

const warning = () => {
  alertModal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
};

const selfDestroyed = () => {
  let secondsToGo = 5;
  const modal = alertModal.success({
    title: 'This is a notification message',
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });

  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};

const showConfirm = () => {
  alertModal.confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
};

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
            <Modal
              type={state.modalType}
              title="Basic Modal"
              visible={state.visible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <Cards headless title="Default Modal" size="large" caption="Default Ant Design Modal">
              <p>
                When requiring users to interact with the application, but without jumping to a new page and
                interrupting the user's workflow, you can use Modal to create a new floating layer over the current page
                to get user feedback or display information. Additionally
              </p>
              <Button onClick={showModal} type="primary">
                Primary
              </Button>
              <Button onClick={showModal} type="success">
                Success
              </Button>
              <Button onClick={showModal} type="danger">
                Danger
              </Button>
              <Button onClick={showModal} type="warning">
                Warning
              </Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Modal
              type={state.modalType}
              color
              title="Basic Modal"
              visible={state.colorModal}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <Cards headless title="Color Modal" size="large" caption="Color Ant Design Modal">
              <p>
                When requiring users to interact with the application, but without jumping to a new page and
                interrupting the user's workflow, you can use Modal to create a new floating layer over the current page
                to get user feedback or display information. Additionally
              </p>
              <Button onClick={showColorModal} type="primary">
                Primary
              </Button>
              <Button onClick={showColorModal} type="success">
                Success
              </Button>
              <Button onClick={showColorModal} type="danger">
                Danger
              </Button>
              <Button onClick={showColorModal} type="warning">
                Warning
              </Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Information Modal" size="large" caption="Notification Ant Design Modal">
              <p>
                When requiring users to interact with the application, but without jumping to a new page and
                interrupting the user's workflow, you can use Modal to create a new floating layer over the current page
                to get user feedback or display information. Additionally
              </p>
              <Button onClick={success} type="success">
                Success
              </Button>
              <Button onClick={error} type="error">
                Error
              </Button>
              <Button onClick={warning} type="warning">
                Warning
              </Button>
              <Button onClick={info} type="info">
                Info
              </Button>
              <Button onClick={selfDestroyed} type="primary">
                Modal Self Destroyed
              </Button>
              <Button onClick={showConfirm} type="primary">
                Confirm
              </Button>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Modals;
