import Styled from 'styled-components';
import { Table } from 'antd';

const Style = Styled(Table)`
  .ant-table{
    border-radius: 10px;
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
        .email-top-right{
          justify-content: flex-end;
          a{
            color: ${({theme})=>theme['gray-solid']};
            &:not(:last-child){
              margin-right: 25px;
            }
          }
        }
      }
    }
  }
  
  .ant-table-tbody{
    >tr{
      &:hover{
        box-shadow: 0 15px 40px ${({theme})=>theme['gray-solid']}15;
        >td{
          background: #fff !important;
        }
      }
      >td{
        &:last-child{
          text-align: right;
        }
        .email-time{
          font-size: 13px;
          font-weight: 500;
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
  .header {
    padding: 20px;
    color: #fff;
    border-radius: 10px 10px 0 0;
    display: flex;
    algn-items: center;
    justify-content: space-between;
    background: ${({theme})=>theme["dark-color"]};
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
      input,
      .react-tagsinput{
        border: 0 none;
        border-bottom: 1px solid ${({theme})=>theme["border-color-light"]};
      }
      .react-tagsinput{
        padding-left: 0;
        input{
          border: 0 none;
        }
      }
      input{
        padding: 15px 0;
        &:focus{
          box-shadow: 0 0;
        }
      }
      >div{
        box-shadow: 0 0;
        border: none;
      }
    }
    .RichTextEditor__editor___1QqIU .public-DraftEditor-content {
      height: 275px;
    }
  }
  .fotter {
    border-top: 1px solid ${({theme})=>theme["border-color-light"]};
    padding: 20px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
      button,
      a{
        margin-right: 20px;
        svg{
          color: ${({theme})=>theme['light-color']};
        }
      }
    }
    .right{
      a{
        color: ${({theme})=>theme['light-color']};
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
        color: ${({theme})=>theme["gray-color"]};
        svg{
          margin-right: 20px;
          color: ${({theme})=>theme["extra-light-color"]};
        }
      }

      &:hover{
        a{
          background: rgba(95,99,242,0.1);
          color: ${({theme})=>theme["primary-color"]};
        }
      }
      .add-label{
        box-shadow: 0 10px 40px rgba(146,153,184,0.2);
        padding: 25px 30px;
        width: 330px;
        margin-left: -45px;
        background: #fff;
        border-radius: 8px;
        h1{
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 16px;
          font-weight: 500;
        }
        input{
          height: 44px;
          border: 1px solid ${({theme})=>theme["border-color-light"]};
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
            color: ${({theme})=>theme["light-color"]};
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

const MessageAction = Styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
      color: ${({theme})=>theme['gray-solid']};
    }
    &:hover{
      background: rgba(95,99,242,0.05);
      svg{
        color: ${({theme})=>theme['primary-color']};
      }
    }
  }
`;

const EmailAuthor = Styled.div`
  display: flex;
  align-items: center;
  svg{
    color: ${({theme})=>theme['extra-light-color']};
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
    font-weight: 600;
    a{
      color: ${({theme})=>theme['dark-color']};
    }
  }
`;

const EmailHeader = Styled.div`
  h1{
    font-size: 14px;
    font-weight: 600;
  }
  p{
    margin: 0;
    color: ${({theme})=>theme['gray-color']};
  }
`;

const MessageDetails = Styled.div`
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
      color: ${({theme})=>theme["gray-solid"]};
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
    div{
      margin-left: 20px;
      h1{
        font-size: 16px;
        margin-bottom: 0;
      }
      a{
        display: flex;
        align-items: center;
        color: ${({theme})=>theme["gray-solid"]};
      }
    }

  }
  .message-excerpt{
    display: flex;
    align-items: center;
    margin: 0 -15px;
    span, a{
      display: block;
      padding: 0 15px;
      color: ${({theme})=>theme["gray-solid"]};
    }
    & > span{
      line-height:0;
      padding-left: 0;
    }
    svg{
      width: 16px;
    }
  }

  .message-body{
    padding-left: 82px;
    margin-top: 22px;
    p{
      color: ${({theme})=>theme["gray-color"]};
      font-size: 15px;
      margin-bottom: 40px;
    }
    h1{
      font-size: 15px;
      color: ${({theme})=>theme["gray-color"]};
      font-weight: normal;
      line-height: 30px;
    }
  }
  .message-attachments{
    margin: 44px -5px 0 -5px;
    padding-left: 82px;
    display: flex;
    flex-wrap: wrap;
    figure{
      border: 1px solid ${({theme})=>theme["border-color-light"]};
      border-radius: 10px;
      padding: 10px;
      margin: 0 5px;
      figcaption{
        margin-top: 10px;
        h1{
          font-size: 13px;
          margin: 0;
        }
        p{
          font-size: 12px;
          color: ${({theme})=>theme["gray-solid"]};
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
    background: ${({theme})=>theme["border-color-light"]};
  }
`;

const MessageReply = Styled.div`
  nav{
    margin-bottom: 30px;
    ul{
      display: flex;
      align-items: center;
      list-style:none;
      margin: 0 -5px;
      padding: 0;
      li{
        padding: 0 5px;
        a{
          border: 1px solid ${({theme})=>theme["border-color-light"]};
          line-height: 44px;
          display: inline-block;
          padding: 0 20px;
          font-size: 14px;
          font-weight: 600;
          color: ${({theme})=>theme["gray-color"]};
          border-radius: 4px;
          &:hover{
            color: ${({theme})=>theme["primary-color"]};
          }
        }
      }
    }
  }
  .RichTextEditor__root___2QXK-{
    border: 0 none;
    padding: 15px 30px;
    .public-DraftEditor-content{
      min-height: 120px;
    }
  }
  .reply-box{
    .fotter{
      margin: 15px 30px 0;
      padding-bottom: 15px;
    }
  }
`;

const MailRightAction = Styled.div`
  span{
    color: ${({theme})=>theme["light-color"]};
  }
`;

export { Style, MailBox, EmailNav, MessageAction, EmailAuthor, EmailHeader, MessageDetails, MessageReply, MailRightAction };
