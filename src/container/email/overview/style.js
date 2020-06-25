import Styled from 'styled-components';
import { Table } from 'antd';

const Style = Styled(Table)`
  
  @media only screen and (max-width: 991px){
    margin-bottom: 30px;   
  }
  .ant-table{
    border-radius: 10px;
    tr{
      th,
      td{
        &:first-child{
          padding-left: 30px;
        }
        &:last-child{
          padding-right: 30px;
        }
      }
    }
    .ant-table-selection-extra{
      right: -15px;   
    }
  }
  .ant-table-thead{
    >tr{
      >th{
        background: #fff;
        &:first-child{
          border-top-left-radius: 10px !important;
        }
        &:last-child{
          border-top-right-radius: 10px !important;
        }
        .email-top-search{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .ant-select{
            max-width: 350px;
          }
          .ant-select-selector{
            height: 46px !important;
          }
          .ant-select-selection-search{
            .ant-select-selection-search-input{
              border-radius: 24px;
              background: ${({ theme }) => theme['bg-color-normal']};
              border: 0 none;
              input{
                height: 44px !important;
                background: ${({ theme }) => theme['bg-color-normal']};
                &:placeholder{
                  color: ${({ theme }) => theme['extra-light-color']};
                }
              }
              .ant-input-suffix{
                margin-right: 0;
                .anticon-search{
                  svg{
                    color: ${({ theme }) => theme['gray-solid']};
                  }
                }
              }
            }
          }
        }
        .email-top-right{
          justify-content: flex-end;
          .email-extra{
            a{
              color: ${({ theme }) => theme['gray-solid']};
              &:not(:last-child){
                margin-right: 25px;
              }
            }
          }
          .page-number{
            display: inline-block
            font-size: 14px;
            color: ${({ theme }) => theme['light-color']};
          }
          .pagination-slider{
            margin: 0 20px 0 15px;
            .btn-paging{
              display: inline-flex;
              height: 30px;
              width: 30px;
              border-radius: 50%;
              align-items: center;
              justify-content: center;
              &:hover{
                background: ${({ theme }) => theme['primary-color']}10;
              }
              svg{
                color: ${({ theme }) => theme['light-color']};
              }
            }
          }
        }
      }
    }
  }
  
  .ant-table-tbody{
    .ant-table-cell{
      white-space: normal !important;
    }
    >tr{
      &:hover{
        box-shadow: 0 15px 40px ${({ theme }) => theme['gray-solid']}15;
        h1{
          color: ${({ theme }) => theme['dark-color']};
          a{
            color: ${({ theme }) => theme['dark-color']};
          }
        }
        .email-time{
          color: ${({ theme }) => theme['dark-color']};
        }
        >td{
          background: #fff !important;
        }
      }
      >td{
        vertical-align: top;
        &:last-child{
          text-align: right;
        }
        .ant-checkbox-wrapper{
          margin-top: 5px;
        }
        .email-time{
          font-size: 13px;
          font-weight: 500;
          color: ${({ theme }) => theme['gray-color']};
        }
      }
    }
  }
  .ant-table-thead > tr > th .ant-table-header-column {
    width: 100%;
  }
  .ant-table-thead > tr:first-child > th:last-child {
    border-top-right-radius: 4px;
    text-align: right;
  }
  .ant-pagination-item {
    display: none;
  }
  .ant-table-pagination.ant-pagination {
    position: absolute;
    z-index: 1;
    right: 0;
  }
`;

const small = () => {
  return `
  max-width: 600px;
  width: 100%;
  position: fixed;
  min-height: 600px;
  bottom: 75px;
  right: 15px;
`;
};

const big = () => {
  return `
  max-width: 1200px;
  width: 100%;
  position: fixed;
  min-height: 600px;
  bottom: 100px;
  right: 100px;
  `;
};

const MailBox = Styled.div`
  ${({ size }) => size === 'small' && small()}
  ${({ size }) => size === 'big' && big()}

  background: #fff;
  z-index: 111;
  border-radius: 10px;
  box-shadow: 0 10px 50px #9299B830;
  @media only screen and (max-width: 575px){
    right: 0;
  }
  input,
  .react-tagsinput{
    border: 0 none;
    border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
  }
  .react-tagsinput{
    padding-left: 0;
    border-bottom: 1px solid ${({ theme }) => theme['border-color-light']} !important;
    input{
      border: 0 none;
    }
    .react-tagsinput-tag{
      padding: 5px 16px;
      border: 0 none;
      border-radius: 16px;
      color: ${({ theme }) => theme['gray-color']};
      background: ${({ theme }) => theme['bg-color-normal']};
      .react-tagsinput-remove{
        margin-left: 8px;
        color: ${({ theme }) => theme['light-color']};
      }
    }
  }
  input{
    padding: 15px 0;
    &:focus{
      box-shadow: 0 0;
    }
    &:placeholder{
      color: ${({ theme }) => theme['light-color']};
    }
  }

  .header {
    padding: 20px;
    color: #fff;
    border-radius: 10px 10px 0 0;
    display: flex;
    algn-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme['dark-color']};
    p {
      margin: 0;
      padding: 0;
    }
    .icon-right {
      svg {
        cursor: pointer;
        opacity: .70;
      }
      svg:first-child {
        margin-right: 10px;
      }
    }
  }
  .body {
    .group {
      padding: 0px 30px;
      @media only screen and (max-width: 575px){
        padding: 0px 15px;
      }
      >div{
        box-shadow: 0 0;
        border: none;
      }
    }
    .RichTextEditor__editor___1QqIU .public-DraftEditor-content {
      height: 275px;
      @media only screen and (max-width: 575px){
        height: 240px
      }
    }
  }
  .fotter {
    border-top: 1px solid ${({ theme }) => theme['border-color-light']};
    padding: 20px 0 30px;
    margin: 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
      button,
      a{
        margin-right: 20px;
        svg{
          color: ${({ theme }) => theme['light-color']};
        }
      }
    }
    .right{
      a{
        color: ${({ theme }) => theme['light-color']};
      }
    }
  }
`;

const EmailNav = Styled.nav`
  ul{
    list-style: none;
    margin: 20px 0;
    padding: 0;
    li{
      position: relative;
      a{
        padding: 10px 15px;
        display: flex;
        align-items: center;
        transition: 0.3s ease;
        border-radius: 4px;
        color: ${({ theme }) => theme['gray-color']};
        svg{
          margin-right: 20px;
          color: ${({ theme }) => theme['extra-light-color']};
        }
        &.active{
          background: rgba(95,99,242,0.1);
          color: ${({theme})=>theme["primary-color"]};
        }
      }

      &:hover{
        a{
          background: rgba(95,99,242,0.1);
          color: ${({ theme }) => theme['primary-color']};
        }
      }
      .nav-text{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .add-label{
        box-shadow: 0 10px 40px rgba(146,153,184,0.2);
        padding: 25px 30px;
        width: 330px;
        margin-left: -25px;
        background: #fff;
        border-radius: 8px;
        @media only screen and (max-width: 1199px){
          width: 270px;
          padding: 15px;
        }
        h1{
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 16px;
          font-weight: 500;
          transition: .3s;
        }
        input{
          height: 44px;
          border: 1px solid ${({ theme }) => theme['border-color-light']};
        }
        .btn-group{
          margin-top: 15px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 10px -5px -5px;
          button{
            margin: 5px;
            height: 38px;
          }
          .ant-btn-default{
            padding: 0 12px;
            color: ${({ theme }) => theme['light-color']};
          }
        }
      }
    }
  }
  .nav-labels{
    margin-top: 30px;
    p{
      margin: 0;
      padding: 0 15px;
      color: #9299b8;
    }
    ul{
      margin-top: 6px;
      margin-bottom: 0;
    }
  }
`;

const MailDetailsWrapper = Styled.div`
  .ant-card-head-wrapper{
    @media only screen and (max-width: 767px){
      flex-flow: column;
      align-items: center;
    }
  }

  .ant-card-head {
    .ant-card-extra{
      @media only screen and (max-width: 767px){
        width: 100%;
        justify-content: center;
      }
    }
    .ant-card-head-title{
      @media only screen and (max-width: 767px){
        padding: 18px 0 0;
      }
    }
  }
`;
const MessageAction = Styled.div`
  display: flex;
  align-items: center;
  margin: 0 -5px;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin: 0 5px;
    transition: 0.3s ease;
    svg{
      color: ${({ theme }) => theme['gray-solid']};
    }
    &:hover{
      background: rgba(95,99,242,0.05);
      svg{
        color: ${({ theme }) => theme['primary-color']};
      }
    }
  }
`;

const EmailAuthor = Styled.div`
  display: flex;
  align-items: center;
  svg{
    color: ${({ theme }) => theme['extra-light-color']};
  }
  img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 20px;
    margin-right: 15px;
  }
  h1{
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    a{
      color: ${({ theme }) => theme['gray-color']};
      transition: .3s;
    }
  }
`;

const EmailHeader = Styled.div`
  min-width: 540px;
  h1{
    font-size: 14px;
    font-weight: 500;
    transition: .3s;
    color: ${({ theme }) => theme['gray-color']};
  }
  .mail-badge{
    display: inline-block;
    margin-left: 10px;
    font-size: 12px;
    font-weight: 500;
    height: 20px;
    padding: 0 12px;
    border-radius: 3px;
    background: ${({ theme }) => theme['primary-color']}10;
  }
  p{
    margin: 0;
    color: ${({ theme }) => theme['gray-color']};
  }
  .btn-attatchment{
    font-size: 13px;
    margin-top: 15px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    padding: 0 22px;
    border-radius: 15px;
    color: ${({ theme }) => theme['gray-solid']};
    background: ${({ theme }) => theme['bg-color-normal']};
    i,
    svg{
      margin-right: 6px;
    }
  }
  a + a{
    margin-left: 15px;
  }
`;

const MessageDetails = Styled.div`
  .message-box {
    @media only screen and (max-width: 767px){
      flex-flow: column;
      align-items: flex-start;
    }
  }
  .message-subject{
    h1{
      font-weight: 500;
    }
  }
  .message-action{
    display: flex;
    align-items: center;
    a{
      display: flex;
      align-items:center;
      justify-content: center;
      flex-direction: column;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      transition: 0.3s ease;
      color: ${({ theme }) => theme['gray-solid']};
      svg{
        margin: -3px 0;
      }
      &:hover{
        background: rgba(95,99,242,0.05);
      }
    }
  }
  .message-author{
    display: flex;
    align-items: center;
    margin-top: 20px;
    @media only screen and (max-width: 767px){
      margin-top: 14px;
    }
    div{
      margin-left: 20px;
      h1{
        font-size: 16px;
        margin-bottom: 0;
      }
      a{
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme['gray-solid']};
      }
    }

  }
  .message-excerpt{
    display: flex;
    align-items: center;
    margin: 0 -15px;
    @media only screen and (max-width: 767px){
      margin: 18px 0 0;
    }
    span, a{
      display: block;
      padding: 0 15px;
      color: ${({ theme }) => theme['gray-solid']};
      @media only screen and (max-width: 767px){
        padding: 0 8px;
      }
    }
    & > span{
      padding-left: 0;
      svg{
        margin-top: 6px;
      }
    }
    svg{
      width: 16px;
    }
  }

  .message-body{
    padding-left: 82px;
    margin-top: 22px;
    @media only screen and (max-width: 767px){
      padding-left: 0px;
      margin-top: 18px;
    }
    p{
      color: ${({ theme }) => theme['gray-color']};
      font-size: 15px;
      margin-bottom: 40px;
    }
    h1{
      font-size: 15px;
      color: ${({ theme }) => theme['gray-color']};
      font-weight: normal;
      line-height: 30px;
    }
  }
  .message-attachments{
    margin: 44px -5px 0 -5px;
    padding-left: 82px;
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 767px){
      margin: 30px 0 0;
      padding-left: 0px;
      justify-content: center;
    }
    figure{
      position: relative;
      border: 1px solid ${({ theme }) => theme['border-color-light']};
      border-radius: 10px;
      padding: 10px;
      margin: 0 5px;
      &:hover{
        box-shadow: 0 10px 20px ${({ theme }) => theme['gray-solid']}10;
        .attatchment-image{
          &:after{
            height: 100%;
            opacity: 1;
            visibility: visible;
          }
        }
        .attatchment-hover{
          opacity: 1;
          visibility: visible
        }
      }
      .attatchment-image{
        position: relative;
        &:after{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 0%;
          border-radius: 10px;
          content: '';
          opacity: 0;
          visibility: hidden;
          transition: .3s ease-in;
          background: ${({ theme }) => theme['dark-color']}50;
        }
      }
      .attatchment-hover{
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        visibility: hidden;
        transition: .35s;
        .btn-link{
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          &:after{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #fff;
            opacity: .20;
            content: '';
          }
          svg,
          img{
            width: 14.5px;
            color: #fff;
          }
        }
        .btn-link + .btn-link{
          margin-left: 10px;
        }
      }
      figcaption{
        margin-top: 10px;
        h1{
          font-size: 13px;
          margin: 0;
        }
        p{
          font-size: 12px;
          color: ${({ theme }) => theme['gray-solid']};
          margin:0;
        }
      }
    }
  }
  hr{
    margin-top: 30px;
    margin-bottom: 30px;
    border: 0 none;
    height: 1px;
    background: ${({ theme }) => theme['border-color-light']};
  }
`;

const MessageReply = Styled.div`
  nav{
    margin-bottom: 30px;
    @media only screen and (max-width: 767px){
      margin-bottom: 0px;
    }
    ul{
      display: flex;
      align-items: center;
      list-style:none;
      margin: 0 -5px;
      padding: 0;
      li{
        padding: 0 5px;
        a{
          border: 1px solid ${({ theme }) => theme['border-color-light']};
          line-height: 44px;
          display: inline-block;
          padding: 0 20px;
          font-size: 14px;
          font-weight: 600;
          color: ${({ theme }) => theme['gray-color']};
          border-radius: 4px;
          &:hover{
            color: ${({ theme }) => theme['primary-color']};
          }
        }
      }
    }
  }
  .RichTextEditor__root___2QXK-{
    border: 0 none;
    padding: 15px 0px;
    @media only screen and (max-width: 575px){
      padding: 15px 0;
    }
    .public-DraftEditor-content{
      min-height: 120px;
    }
  }
  .reply-box{
    > div{
      border: 1px solid ${({ theme }) => theme['border-color-light']};
    }
    .fotter{
      margin: 0 30px 0;
      @media only screen and (max-width: 575px){
        margin: 0 15px 0
      }
    }
  }
`;

const MailRightAction = Styled.div`
  span{
    color: ${({ theme }) => theme['light-color']};
  }
`;

const EmailWrapper = Styled.div`
  .mail-sideabr{
    .ant-card{
      .ant-card-body{
        padding: 0px !important;
      }
    }
  }

  .mail-sidebar-top{
    padding: 30px 30px 0;
  }

  .mail-sidebar-bottom{
    padding: 0 15px 25px 15px;
  }
`;

const MailSideBar = Styled.div`
  display: ${({ collapsed }) => (!collapsed ? 'none' : 'block')}

`;

export {
  Style,
  MailBox,
  EmailNav,
  MessageAction,
  MailSideBar,
  EmailAuthor,
  EmailHeader,
  MailDetailsWrapper,
  MessageDetails,
  MessageReply,
  MailRightAction,
  EmailWrapper,
};
