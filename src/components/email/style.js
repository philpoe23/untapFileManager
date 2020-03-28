import Styled from 'styled-components';
import { Table } from 'antd';

const TableStyled = Styled(Table)`
.ant-table-thead > tr > th .ant-table-header-column {  
  width: 100%;
}
.ant-table-container table > thead > tr:first-child th:last-child {  
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

export { TableStyled, MailBox };
