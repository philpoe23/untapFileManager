import React, { Fragment, useState } from 'react';
import { Button, Radio } from 'antd';
import PropTypes from 'prop-types';
import { DrawerStyle } from './style';
const RadioGroup = Radio.Group;

const Drawer = props => {
  const { title, placement, children, customPlacement, render, childDrawer, childTitle } = props;
  const [state, setState] = useState({
    visible: false,
    placement: placement ? placement : 'right',
    childrenDrawer: false,
  });

  const showDrawer = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      ...state,
      visible: false,
    });
  };
  const onChange = e => {
    setState({
      ...state,
      placement: e.target.value,
    });
  };

  const showChildrenDrawer = () => {
    setState({
      ...state,
      childrenDrawer: true,
    });
  };

  const onChildrenDrawerClose = () => {
    setState({
      ...state,
      childrenDrawer: false,
    });
  };

  return (
    <Fragment>
      {customPlacement && (
        <RadioGroup style={{ marginRight: 8 }} defaultValue={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </RadioGroup>
      )}

      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <DrawerStyle
        title={title}
        placement={state.placement}
        closable={false}
        onClose={onClose}
        visible={state.visible}
        getContainer={!render ? true : false}
        style={{ position: !render ? 'fixed' : 'absolute' }}
      >
        {!childDrawer ? (
          children
        ) : (
          <Fragment>
            <Button type="primary" onClick={showChildrenDrawer}>
              Two-level drawer
            </Button>

            <DrawerStyle
              title={childTitle}
              width={320}
              closable={false}
              onClose={onChildrenDrawerClose}
              visible={state.childrenDrawer}
            >
              {childDrawer}
            </DrawerStyle>
            {children}

            <div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e8e8e8',
                padding: '10px 16px',
                textAlign: 'right',
                left: 0,
                background: '#fff',
                borderRadius: '0 0 4px 4px',
              }}
            >
              <Button
                style={{
                  marginRight: 8,
                }}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </div>
          </Fragment>
        )}
      </DrawerStyle>
    </Fragment>
  );
};

Drawer.propTypes = {
  title: PropTypes.string,
  placement: PropTypes.string,
  children: PropTypes.array,
  customPlacement: PropTypes.bool,
  render: PropTypes.bool,
  childDrawer: PropTypes.object,
  childTitle: PropTypes.string,
};

export { Drawer };
