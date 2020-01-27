import React from 'react';
import { TabOne, TabChildBasic, TabChildColor, TabTwo } from './tab-styled';
import { Icon } from 'antd';

const BasicTab = props => {
  const { data, tabPosition } = props;

  return (
    <TabOne defaultActiveKey="1" tabPosition={tabPosition !== undefined ? tabPosition : 'top'}>
      {data.map((item, key) => {
        const { title, content, icon, tabTitle } = item;
        return (
          <TabChildBasic
            tab={
              icon === undefined ? (
                tabTitle
              ) : (
                <span>
                  <Icon type={icon} />
                  {tabTitle}
                </span>
              )
            }
            key={key + 1}
          >
            <h2>{title}</h2>
            <p>{content}</p>
          </TabChildBasic>
        );
      })}
    </TabOne>
  );
};

const ColorTab = props => {
  const { data, color, tabPosition } = props;

  return (
    <TabTwo color={color} defaultActiveKey="1" tabPosition={tabPosition !== undefined ? tabPosition : 'top'}>
      {data.map((item, key) => {
        const { title, content, icon, tabTitle } = item;
        return (
          <TabChildColor
            color={color}
            tab={
              icon === undefined ? (
                tabTitle
              ) : (
                <span>
                  <Icon type={icon} />
                  {tabTitle}
                </span>
              )
            }
            key={key + 1}
          >
            <h2>{title}</h2>
            <p>{content}</p>
          </TabChildColor>
        );
      })}
    </TabTwo>
  );
};

export { BasicTab, ColorTab };
