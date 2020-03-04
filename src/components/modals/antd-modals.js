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
export { Modal, alertModal };
