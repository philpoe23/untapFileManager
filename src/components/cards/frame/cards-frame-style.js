import Styled from 'styled-components';
const CardWraper = Styled.div`
    margin-bottom: 15px;
    .ant-card.ant-card-bordered {
        border-radius: 15px;
        overflow: hidden;
    }
`;

const CardTabWraper = Styled.div`
    .ant-card-head {
      display: flex;
      justify-content: space-evenly;
      .ant-card-head-wrapper{
        width: 100%;
      }
      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{
        width: 100%;
        display: block;
        
      }
      .ant-tabs-nav-scroll {
        display: flex;
        justify-content: flex-end;
      }
    }

    .ant-tabs-nav .ant-tabs-tab {
      margin: 0px;      
    }

`;

const CardTabBtnWraper = Styled.div`
    .ant-card-head {
      display: flex;
      justify-content: space-evenly;
      .ant-card-head-wrapper{
        width: 100%;
      }
      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{
        width: 100%;
        display: block;
        
      }
      .ant-tabs-nav-scroll {
        display: flex;
        justify-content: flex-end;
      }
      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
        display: none !important;
      }
      .ant-tabs-nav .ant-tabs-tab {     
        border-radius: 1px;
        height: 30px;
        margin: 0px;
        margin-left: -1px;
        display: inline-flex;
        align-items: center;
        border: 1px solid #ddd;
        background: #fff;
      }
      .ant-tabs-nav .ant-tabs-tab-active {
        color: #5F63F2;
        font-weight: 500;
        border: 1px solid #5F63F2;
        background: #5F63F2;
        color: #fff;
        border-radius: 1px;
        height: 30px;
        margin: 0px;
        display: inline-flex;
        align-items: center;
      }
      .ant-tabs-bar {
        border: none;
      }
      .ant-tabs-nav-wrap {
        margin-bottom: 0px;
        overflow: hidden;
    }
    }
    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {
      width: 100%;
      display: block;
      justify-content: flex-end;
      height: 73px;
      padding-top: 8px;
  }
`;

export { CardWraper, CardTabWraper, CardTabBtnWraper };
