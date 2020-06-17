import Styled from 'styled-components';

const ChatWrapper = Styled.div`
  .create-action{
    padding: 0 25px;
    margin-bottom: 18px;
    @media only screen and (max-width: 379px){
      padding: 0 20px;
    }
    .btn-add{
      width: 100%;
      height: 44px;
      text-align: center;
      border: 1px solid ${({theme})=>theme["border-color-light"]};
      background: ${({theme})=>theme["bg-color-light"]};
    }
  }
`;

const UL = Styled.ul`
  list-style-type: none;
  li {
    display: inline-block;
    padding: 5px;
  }
`;

const Content = Styled.div`
  .chat-link-signle{
    position: relative;
    background: #fff;
    border-radius: 4px;
    width: 100%;
    margin: 8px 0;
    &:hover{
      right: -10px;
      left: -10px;
      width: calc(100% + 20px);
      filter: drop-shadow(0 15px 50px ${({theme})=>theme["light-color"]}20);
      a{
        padding: 18px 34px;
        @media only screen and (max-width: 379px){
          padding: 18px 30px;
        }
      }
    }
    a{
      display: flex;
      padding: 18px 24px;
      @media only screen and (max-width: 379px){
        padding: 18px 20px;
      }
    }
    .author-figure{
      margin-right: 15px;
      flex: .1;
    }
    .author-info{
      margin-right: 6px;
      flex: .76;
      .author-name{
        font-weight: 600;
        color: ${({theme})=>theme["dark-color"]};
      }
      .author-chatText{
        color: ${({theme})=>theme["light-color"]};
      }
    }
    .author-chatMeta{
      flex: .14;
      span{
        text-align: right;
        font-size: 12px;
        color: ${({theme})=>theme["light-color"]};
      }
    }
  }
`;

const BlockSpan = Styled.span`
  display: block;
`;

const SingleChatWrapper = Styled.div`
  .ant-card-head{
    box-shadow: 0 10px 20px ${({ theme }) => theme['extra-light-color']}15;
    border: 0 none;
    .ant-card-extra{
      .ant-dropdown-trigger{
        margin-left: 0;
      }
    }
    .ant-card-head-title{
      h1{
        margin-bottom: 6px;
      }
      p{
        font-size: 12px;
        color: ${({ theme }) => theme['light-color']};
      }
    }
  }

  .group-chat-header{
    align-items: center;
    width: 100%;
    text-align: center;
    @media only screen and (max-width: 479px){
      flex-flow: column;
    }
    h1{
      @media only screen and (max-width: 479px){
        margin-bottom: 15px !important;
      }
    }
    .members{
      width: 100%;
      a{
        :not(:last-child){
          margin-right: 4px;
        }
      }
      img{
        max-width: 30px;
      }
    }
  }

  .atbd-chatbox{
    .atbd-chatbox__single{
      &:not(:last-child){
        margin-bottom: 30px;
      }
      .left{
        display: flex;
        align-items: flex-start;
        img{
          border-radius: 50%;
          margin-right: 15px;
        }
        .atbd-chatbox__content{
          margin-top: -4px;
        }
        .message-box{
          background: ${({ theme }) => theme['primary-color']};
        }
      }
      .right{
        float: right;
        .atbd-chatbox__actions{
          margin: 0 15px 0 0;
        }
        .atbd-chatbox__name{
          text-align: right;
        }
        .message-box{
          background: ${({ theme }) => theme['bg-color-deep']};
          color: ${({ theme }) => theme['gray-color']};
        }
      }
    }
    .atbd-chatbox__name{
      font-size: 14px;
      font-weight: 600;
      span{
        font-size: 12px;
        font-weight: 400;
        margin-left: 15px;
        color: ${({ theme }) => theme['light-color']};
      }
    }
    .atbd-chatbox__contentInner{
      align-items: center;
      .message-box + .message-box{
        margin-top: 5px;
      }
    }
    .message-seen{
      margin-top: 10px;
      img{
        max-width: 20px;
        border-radius: 50%;
      }
      .message-seen__time{
        font-size: 12px;
        font-weight: 400;
        color: ${({ theme }) => theme['light-color']};
      }
    }
    .group-seen{
      margin-top: 5px;
      img{
        max-width: 20px;
        &:not(:last-child){
          margin-right: 3px;
        }
      }
    }
    .atbd-chatbox__actions{
      display: flex;
      margin-left: 15px;
      @media only screen and (max-width: 767px){
        flex-flow: column;
      }
      .ant-dropdown-trigger{
        color: ${({ theme }) => theme['light-color']};
        &{
          + .ant-dropdown-trigger{
            margin-left: 12px;
            @media only screen and (max-width: 767px){
              margin: 10px 0 0;
            }
          }
        }
      }
    }
  }
`;

const MessageList = Styled.div`
  display: block;
  max-width: 670px;
  font-size: 15px;
  border-radius: 0 15px 15px;
  padding: 18px 20px;
  line-height: 1.67;
  color: #fff;
`;

const Footer = Styled.div`
  .chatbox-reply-form{
    margin-top: 35px;
    align-items: center;
    @media only screen and (max-width: 575px){
      flex-flow: column;
    }
    .chatbox-reply-input{
      width: 100%;
      margin-right: 8px;
      input{
        padding: 0 25px;
        height: 70px;
        border: 0 none;
        border-radius: 35px;
        background: ${({ theme }) => theme['bg-color-normal']};
        &:focus{
          border: 0 none;
        }
        @media only screen and (max-width: 575px){
          height: 50px;
          margin-bottom: 20px;
        }
      }
    }
    input,
    span{
      margin-right: 8px;
    }
    .chatbox-reply-action{
      .ant-upload-select,
      button{
        min-width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .ant-upload-select {
        background: ${({ theme }) => theme['bg-color-normal']};
        .ant-upload{
          margin-right: 0;
          svg{
            margin-top: 5px;
            color: ${({ theme }) => theme['light-color']};
          }
        }
      }
      button{
        padding: 0;
        background: ${({ theme }) => theme['primary-color']};
      }
    }
  }
`;


const ChatSidebar = Styled.div`
  .ant-card-body{
    padding: 25px 0 !important;
  }
  .chatbox-search{
    padding: 0 25px;
    @media only screen and (max-width: 379px){
      padding: 0 20px;
    }
  }
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
    padding: 0 25px;
    @media only screen and (max-width: 379px){
      padding: 0 20px;
    }
    ul{
      margin: 0 0 30px 0;
      padding: 25px 0 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${({theme})=>theme['border-color-light']};
      li{
        padding: 0;
        a{
          position: relative;
          display: block;
          padding: 0 0 18px;
          font-weight: 500;
          color: ${({theme})=>theme['gray-solid']};
          &:after{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            content: '';
            opacity: 0;
            visibility: 0;
            background: ${({theme})=>theme['primary-color']};
          }
        }
        &.active{
          a{
            color: ${({theme})=>theme['primary-color']};
            &:after{
              opacity: 1;
              visibility: visible;
            }
          }
        }
      }
    }
  }
`;

export { ChatWrapper, UL, Content, BlockSpan, MessageList, Footer, ChatSidebar, SingleChatWrapper };
