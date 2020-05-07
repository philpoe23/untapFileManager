import React from 'react';
import { TabBasic, Child } from './style';
import { Icon } from 'antd';

const Tab = props => {
  const { data, tabPosition, color } = props;

  return (
    <TabBasic color={color && color} defaultActiveKey="1" tabPosition={tabPosition !== undefined ? tabPosition : 'top'}>
      {data.map((item, key) => {
        const { title, content, icon, tabTitle } = item;

        return (
          <Child
            color={color && color}
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
          </Child>
        );
      })}
    </TabBasic>
  );
};

export { Tab };
