import React from 'react';
import { TabBasic, Child } from './style';
import FeatherIcon from 'feather-icons-react';

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
                  <FeatherIcon icon={icon} size={16} />
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
