import Styled from 'styled-components';
import { Modal } from 'antd';
import theme from '../../../config/theme/customize-antd';

const ModalStyled = Styled(Modal)`    
  
`;

const ModalStyledColord = Styled(Modal)`    

  .ant-modal-content, .ant-modal-header {
    background-color: ${({ type }) => type !== 'default' && theme[type + '-color']} !important;
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
