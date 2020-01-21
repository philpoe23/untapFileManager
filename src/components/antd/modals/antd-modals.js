import React from 'react';
import { ModalStyled, ModalStyledColord } from './modals-styled';
import PropTypes from 'prop-types';
import { BtnBasic } from '../buttons/antd-buttons';

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
// BasicModal.propTypes = {
//   type: PropTypes.string.isRequired,
//   message: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   showIcon: PropTypes.bool,
// };

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

export { BasicModal, ColordModal };
