import Styled from 'styled-components';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const TabOne = Styled(Tabs)`
  margin-bottom: 30px !important;
`;

const TabChildBasic = Styled(TabPane)`
  // background : ${({ color }) => color !== 'default' && color};
  // color : ${({ color }) => (color !== 'default' && color !== '#ffffff' && color !== '#fff' && color !== 'white' ? '#ffffff' : '#000000')};

`;

const TabTwo = Styled(Tabs)`
  margin-bottom: 30px !important;
  .ant-tabs-bar {
    margin: 0;
  }
  .ant-tabs-nav .ant-tabs-tab{
    margin: 0;
  }
  .ant-tabs-nav .ant-tabs-tab:hover, .ant-tabs-nav .ant-tabs-tab:focus {
    //background : ${({ color }) => color !== 'default' && color};
    color : ${({ color }) => (color !== 'default' && color !== '#ffffff' && color !== '#fff' && color !== 'white' ? color : '#000000')};
  }
  .ant-tabs-nav .ant-tabs-tab-active.ant-tabs-tab {
    border: none;
    border-radius: 3px;
    background : ${({ color }) => color !== 'default' && color};
    color : ${({ color }) => (color !== 'default' && color !== '#ffffff' && color !== '#fff' && color !== 'white' ? '#ffffff' : '#000000')};
  }
  .ant-tabs-ink-bar {
    background: transparent
  }
`;

const TabChildColor = Styled(TabPane)`
  h1, h2, h3, h4, h5, h6, p, span, i {
    padding: 15px;
    background : ${({ color }) => color !== 'default' && color};
    color : ${({ color }) => (color !== 'default' && color !== '#ffffff' && color !== '#fff' && color !== 'white' ? '#ffffff' : '#000000')};
    margin: 0;
  }
  
`;

export { TabOne, TabChildBasic, TabTwo, TabChildColor };
