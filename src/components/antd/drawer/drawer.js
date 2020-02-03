import React, { Fragment, useState } from 'react';
import { Drawer, Button, Radio } from 'antd';
import PropTypes from 'prop-types';

const RadioGroup = Radio.Group;

const BasicDrawer = props => {
  const { title, placement, children } = props;
  const [state, setState] = useState({ visible: false });

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };
  return (
    <Fragment>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title={title} placement={placement} closable={false} onClose={onClose} visible={state.visible}>
        {children}
      </Drawer>
    </Fragment>
  );
};

const CustomPlacementDrawer = props => {
  const { title, children } = props;
  const [state, setState] = useState({ visible: false, placement: 'left' });

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

  const { placement, visible } = state;
  return (
    <Fragment>
      <RadioGroup style={{ marginRight: 8 }} defaultValue={placement} onChange={onChange}>
        <Radio value="top">top</Radio>
        <Radio value="right">right</Radio>
        <Radio value="bottom">bottom</Radio>
        <Radio value="left">left</Radio>
      </RadioGroup>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title={title} placement={placement} closable={false} onClose={onClose} visible={visible}>
        {children}
      </Drawer>
    </Fragment>
  );
};

const RenderDrawer = props => {
  const { title, placement, children } = props;
  const [state, setState] = useState({ visible: false });

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };
  return (
    <div
      style={{
        height: 200,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid #ebedf0',
        borderRadius: 2,
        padding: 48,
        textAlign: 'center',
        background: '#fafafa',
      }}
    >
      Render in this
      <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      <Drawer title={title} placement={placement} closable={false} onClose={onClose} visible={state.visible} getContainer={false} style={{ position: 'absolute' }}>
        {children}
      </Drawer>
    </div>
  );
};

const MultiLavelDrawer = props => {
  const { title, placement, children, childDrawer, childTitle } = props;
  const [state, setState] = useState({ visible: false, childrenDrawer: false });

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
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>

      <Drawer title={title} placement={placement} closable={false} onClose={onClose} visible={state.visible}>
        <Button type="primary" onClick={showChildrenDrawer}>
          Two-level drawer
        </Button>

        <Drawer title={childTitle} width={320} closable={false} onClose={onChildrenDrawerClose} visible={state.childrenDrawer}>
          {childDrawer}
        </Drawer>
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
      </Drawer>
    </Fragment>
  );
};

BasicDrawer.propTypes = {
  title: PropTypes.string,
  placement: PropTypes.string,
  children: PropTypes.array,
};

CustomPlacementDrawer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};

RenderDrawer.propTypes = {
  title: PropTypes.string,
  placement: PropTypes.string,
  children: PropTypes.array,
};

export { BasicDrawer, CustomPlacementDrawer, RenderDrawer, MultiLavelDrawer };
