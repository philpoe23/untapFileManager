import React from 'react';
import { ModalStyled } from './styled';
import PropTypes from 'prop-types';
import { Button } from '../buttons/buttons';

const Modal = props => {
  const { onCancel, onOk, visible, title, type, color } = props;
  return (
    <ModalStyled
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      type={color ? type : false}
      footer={[
        <Button type="secondary" key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button type={type} key="submit" onClick={onOk}>
          Save Change
        </Button>,
      ]}
    >
      {props.children}
    </ModalStyled>
  );
};

Modal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
};

const alertModal = ModalStyled;

/*
const info = () => {
  ModalStyled.info({
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
  ModalStyled.success({
    content: 'some messages...some messages...',
  });
};
const error = () => {
  ModalStyled.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
};

const warning = () => {
  ModalStyled.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
};

const selfDestroyed = () => {
  let secondsToGo = 5;
  const modal = ModalStyled.success({
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
  ModalStyled.confirm({
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
*/
export { Modal, alertModal };
