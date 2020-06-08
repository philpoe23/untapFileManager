import Styled from 'styled-components';

const UL = Styled.ul`
  list-style-type: none;
  li {
    display: inline-block;
    padding: 5px;
  }
`;

const Content = Styled.div`

`;

const BlockSpan = Styled.span`
  display: block;
`;

const MessageList = Styled.li`
  display: block;
  max-width: 400px;
  padding: 10px;
  list-style-type: none;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme['border-color-light']};
  margin-bottom : 20px;
`;

const Footer = Styled.div`

`;

const ChatSidebar = Styled.div`
  .ant-select-selector{
    height: auto !important;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-search-input{
    border-radius: 23px;
    background: ${({theme})=>theme["bg-color-normal"]};
    border: 0 none;
    input{
      background: ${({theme})=>theme["bg-color-normal"]};
      height: 46px !important;
    }
  }
  nav{
    ul{
      margin: 0 0 25px 0;
      padding: 25px 0 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${({theme})=>theme['border-color-light']};
      li{
        a{
          color: ${({theme})=>theme['gray-solid']};
        }
        &.active{
          a{
            color: ${({theme})=>theme['primary-color']};
          }
        }
      }
    }
  }
`;

export { UL, Content, BlockSpan, MessageList, Footer, ChatSidebar };
