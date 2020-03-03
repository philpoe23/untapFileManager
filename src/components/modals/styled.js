import Styled from 'styled-components';
import { Modal } from 'antd';
const ModalStyled = Styled(Modal)`    
  ${({ theme, type }) => type && ModalStyledColord(type, theme)}
`;

const ModalStyledColord = (type, theme) => `
  .ant-modal-content, .ant-modal-header {
    background-color: ${type !== 'default' && theme[type + '-color']} !important;
  }
  .ant-modal-title {
    color: #fff;
  }
  .ant-modal-footer button {
    background: #fff;
    color: #999;
    border: 1px solid #ffff;
  }
`;

export { ModalStyled, ModalStyledColord };
