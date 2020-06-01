import Styled from 'styled-components';
import { Table } from 'antd';

const Style = Styled(Table)`
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
  right: 60px;
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
    background: #000;
    color: #fff;
    border-radius: 10px 10px 0 0;
    display: flex;
    algn-items: center;
    justify-content: space-between;
    p {
      margin: 0;
      padding: 0;
    }
    .icon-right {
      svg {
        cursor: pointer;
      }
      svg:first-child {
        margin-right: 10px;
      }
    }
  }
  .body {
    .group {
      padding: 5px 15px;
    }
    .RichTextEditor__editor___1QqIU .public-DraftEditor-content {
      height: 267px;
    }
  }
  .fotter {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
        h1{
          font-size: 16px;
          line-height: 20px;
        }
        .btn-group{
          margin-top: 15px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 10px -5px -5px;
          button{
            margin: 5px;
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

export { Style, MailBox, EmailNav, MessageAction };
