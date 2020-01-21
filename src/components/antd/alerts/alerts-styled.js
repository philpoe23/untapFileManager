import Styled from 'styled-components';
import { Alert } from 'antd';
import theme from '../../../config/theme/customize-antd';

const AlertStyled = Styled(Alert)`    
  background: ${({ type }) => theme[type + '-color']} !important;
  border: 1px solid ${({ type }) => theme[type + '-color']} !important;
  color: #ffffff !important;
  border-radius: ${({ shape }) => (!shape ? '4px' : '40px')} !important;
  margin: 15px 0 !important;
  padding: 15px 15px !important;
  .ant-alert-message, .ant-alert-message {
    color: #ffffff !important;  
  }

  button {
    top: 12px !important;
  }
  
  &:hover, &:focus, &:active {
      background: ${({ type }) => theme[type + '-color']}90 !important;
      border: 1px solid ${({ type }) => theme[type + '-color']}90 !important;              
  }
`;

const AlertStyledIcon = Styled(Alert)`    
  background: ${({ type }) => theme[type + '-color']} !important;
  // border: 1px solid ${({ type }) => theme[type + '-color']} !important;
  color: #ffffff !important;
  border-radius: ${({ shape }) => (!shape ? '4px' : '40px')} !important;
  margin: 15px 0 !important;
  padding: 15px 15px !important;
  padding-left: 60px !important;
  .ant-alert-message, .ant-alert-message {
    color: #ffffff !important;  
  }
  i.ant-alert-icon {
    color: ${({ type }) => theme[type + '-color']} !important;
    background: #ffffff80 !important;
    // border: 1px solid #ffffff70 !important;
    height: 100%;
    width: 50px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    top: 12px !important;
  }

  &:hover, &:focus, &:active {
      background: ${({ type }) => theme[type + '-color']}90 !important;
      border: 1px solid ${({ type }) => theme[type + '-color']}90 !important;              
  }
`;

const AlertStyledOutLine = Styled(Alert)`    
  background: transparent !important;
  border: 1px solid ${({ type }) => theme[type + '-color']} !important;
  color: ${({ type }) => theme[type + '-color']} !important;
  border-radius: ${({ shape }) => (!shape ? '4px' : '40px')} !important;
  margin: 15px 0 !important;
  padding: 15px 15px !important;
  padding-left: 60px !important;
  .ant-alert-message, .ant-alert-message {
    color: ${({ type }) => theme[type + '-color']} !important; 
  }
  i.ant-alert-icon {
    color: #ffffff80 !important;
    background: ${({ type }) => theme[type + '-color']} !important;;
    // border: 1px solid #ffffff90 !important;
    height: 100%;
    width: 50px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    top: 12px !important;
  }
  &:hover, &:focus, &:active {
      background: ${({ type }) => theme[type + '-color']}90 !important;
      border: 1px solid ${({ type }) => theme[type + '-color']}90 !important; 
      .ant-alert-message, .ant-alert-message {
        color: #ffffff !important; 
      }             
  }
`;


export { AlertStyled, AlertStyledIcon, AlertStyledOutLine };
