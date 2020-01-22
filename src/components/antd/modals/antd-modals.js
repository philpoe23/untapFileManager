import React from 'react';
import { ModalStyled, ModalStyledColord } from './modals-styled';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { BtnBasic } from '../buttons/antd-buttons';
const { confirm } = Modal;
const BasicModal = props => {
  const { onCancel, onOk, visible, title, type } = props;
  return (
    <ModalStyled
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <BtnBasic type="secondary" key="back" click={onCancel}>
          Cancel
        </BtnBasic>,
        <BtnBasic type={type} key="submit" click={onOk}>
          Save Change
        </BtnBasic>,
      ]}
    >
      {props.children}
    </ModalStyled>
  );
};
BasicModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
};

const ColordModal = props => {
  const { onCancel, onOk, visible, title, type } = props;
  return (
    <ModalStyledColord
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      type={type}
      footer={[
        <BtnBasic type="secondary" key="back" click={onCancel}>
          Cancel
        </BtnBasic>,
        <BtnBasic type={type} key="submit" click={onOk}>
          Save Change
        </BtnBasic>,
      ]}
    >
      {props.children}
    </ModalStyledColord>
  );
};
ColordModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
};

const info = () => {
  Modal.info({
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
  Modal.success({
    content: 'some messages...some messages...',
  });
};
const error = () => {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
};

const warning = () => {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
};

const selfDestroyed = () => {
  let secondsToGo = 5;
  const modal = Modal.success({
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
  confirm({
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

export { BasicModal, ColordModal, info, success, error, warning, selfDestroyed, showConfirm };
