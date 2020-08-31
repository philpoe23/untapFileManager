import Styled from 'styled-components';

const ChatWrapper = Styled.div`
  .create-action{
    padding: 0 25px;
    margin: 25px 0 18px;
    @media only screen and (max-width: 379px){
      padding: 0 20px;
    }
    .btn-add{
      width: 100%;
      height: 44px;
      text-align: center;
      border: 1px solid ${({ theme }) => theme['border-color-light']};
      background: ${({ theme }) => theme['bg-color-light']};
      color: ${({ theme }) => theme['gray-color']};
      svg,
      img,
      i{
        margin-right: 4px;
      }
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
    margin: 0;
    &:before{
      content: '';
      position: absolute;
      width: calc(100% + 20px);
      height: 100%;
      background: #fff;
      right: -10px;
      left: -10px;
      box-shadow: 0 15px 50px ${({ theme }) => theme['light-color']}20;
      border-radius: 4px;
      visibility: hidden;
      opacity: 0;
      transition: 0.3s ease;
      z-index: 1;
    }
    &:hover:before{
      visibility: visible;
      opacity: 1;
    }
    a{
      display: flex;
      padding: 16px 24px;
      position: relative;
      z-index: 1;
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
        color: ${({ theme }) => theme['dark-color']};
      }
      .author-chatText{
        color: ${({ theme }) => theme['light-color']};
      }
    }
    .author-chatMeta{
      flex: .16;
      @media (max-width: 991px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      span{
        float: right;
        font-size: 12px;
        color: ${({ theme }) => theme['light-color']};
      }
      .ant-badge{
        margin-top: 8px;
        span{
          color: #fff;
        }
      }
    }
  }
`;

const BlockSpan = Styled.span`
  display: block;
`;

const SingleChatWrapper = Styled.div`
  margin-bottom: 40px;
  &.group-chat{
    .chatbox-reply-form{
      input{
        background: #fff !important;
        box-shadow: 0 5px 30px ${({ theme }) => theme['light-color']}15;
      }
    }
  }
  .ant-card-head{
    padding: 0 30px !important;
    box-shadow: 0 10px 20px ${({ theme }) => theme['extra-light-color']}15;
    border: 0 none;
    .ant-card-extra{
      .ant-dropdown-trigger{
        margin-left: 0;
      }
    }
    .ant-card-head-title{
      h1{
        font-weight: 500;
        margin-bottom: 6px;
      }
      p{
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 0;
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
      display: flex;
      justify-content: center;
      align-items: center;
      a{
        :not(:last-child){
          margin-right: 4px;
        }
      }
      img{
        max-width: 30px;
      }
      .show-more,
      .add-more{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        span{
          margin: 0;
        }
      }
      .show-more{
        background-color: ${({ theme }) => theme['primary-color']};
        span{
          font-size: 10px;
          font-weight: 500;
          color: #fff;
        }
      }
      .add-more{
        border: 1px dashed ${({ theme }) => theme['border-color-deep']};
        span{
          line-height: .4;
        }
      }
    }
  }

  .atbd-chatbox{
    .time-connector{
      position: relative;
      z-index: 10;
      margin: -14px 0 15px;
      &:after{
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: ${({ theme }) => theme['border-color-light']};
        content: '';
        z-index: -1;
      }
      span{
        text-transform: capitalize;
        font-size: 13px;
        padding: 0 24px;
        background-color: #fff;
        color: ${({ theme }) => theme['light-color']};
      }
    }
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
      text-align: right;
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
    position: relative;
    margin-top: 35px;
    align-items: center;
    .smile-icon{
      position: absolute;
      left: 25px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      @media only screen and (max-width: 575px){
        top: 26px;
      }
      svg,
      i{
        color: ${({ theme }) => theme['extra-light-color']};
      }
    }
    @media only screen and (max-width: 575px){
      flex-flow: column;
    }
    .chatbox-reply-input{
      width: 100%;
      margin-right: 8px;
      input{
        padding: 0 25px 0 70px;
        height: 70px;
        border: 0 none;
        border-radius: 35px;
        background: ${({ theme }) => theme['bg-color-normal']};
        &::placeholder{
          font-size: 14px;
          color: ${({ theme }) => theme['gray-color']};
        }
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
      align-items: center;
      a{
        span{
          display: block;
        }
      }
      .btn-send{
        box-shadow: 0 8px 13px #5F63F220;
      }
      .ant-upload-select,
      button{
        min-width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        span{
          margin-right: 0;
          color: #fff;
        }
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
  margin-bottom: 40px;
  min-height: 935px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 20px #9299B803;
  @media only screen and (max-width: 575px){
    min-height: 580px;
  }
  .ant-card-body{
    padding: 28px 0 !important;
  }
  .chatbox-search{
    padding: 0 25px;
    @media only screen and (max-width: 379px){
      padding: 0 20px;
    }
    .ant-select-selection-search{
      width: 100% !important;
    }
  }
  .ant-select-selector{
    height: auto !important;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-search-input{
    border-radius: 23px;
    background: ${({ theme }) => theme['bg-color-normal']};
    border: 0 none;
    input{
      background: ${({ theme }) => theme['bg-color-normal']};
      height: 46px !important;
    }
  }
  nav{
    padding: 0 25px;
    @media only screen and (max-width: 379px){
      padding: 0 20px;
    }
    ul{
      margin: 0 0 12px 0;
      padding: 30px 0 0 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
      @media (max-width: 480px){
        flex-direction: column;
      }
      li{
        padding: 0;
        a{
          position: relative;
          display: block;
          padding: 0 0 18px;
          font-weight: 400;
          color: ${({ theme }) => theme['light-color']};
          &:after{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            content: '';
            opacity: 0;
            visibility: hidden;
            background: ${({ theme }) => theme['primary-color']};
          }
          &.active{
            font-weight: 500;
            color: ${({ theme }) => theme['primary-color']};
            &:after{
              opacity: 1;
              visibility: visible;
            }
          }
          .ant-badge{
            margin-left: 6px;
          }
          @media (max-width: 480px){
            padding-bottom: 10px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;

export { ChatWrapper, UL, Content, BlockSpan, MessageList, Footer, ChatSidebar, SingleChatWrapper };
