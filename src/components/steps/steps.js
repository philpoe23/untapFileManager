import React, { useState, Fragment } from 'react';
import { Steps, Button, message } from 'antd';
import PropTypes from 'prop-types';
const { Step } = Steps;

const SwitchStep = props => {
  const { steps } = props;
  const [state, setState] = useState({
    current: 0,
  });

  const next = () => {
    const current = state.current + 1;
    setState({ current });
  };

  const prev = () => {
    const current = state.current - 1;
    setState({ current });
  };
  const { current } = state;

  return (
    <Fragment>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content" style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {steps[state.current].content}
      </div>
      <div className="steps-action">
        {state.current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {state.current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {state.current > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </Fragment>
  );
};
SwitchStep.defaultProps = {
  steps: [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },

    {
      title: 'Last',
      content: 'Last-content',
    },
  ],
};
SwitchStep.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const NavigationStep = props => {
  const [state, setState] = useState({
    current: 0,
  });

  const stepStyle = {
    marginBottom: 60,
    boxShadow: '0px -1px 0 0 #e8e8e8 inset',
  };

  const onChange = current => {
    // console.log('onChange:', current);
    setState({ current });
  };
  const { current } = state;

  return (
    <Fragment>
      <Steps type="navigation" current={current} onChange={onChange} style={stepStyle}>
        {props.children}
      </Steps>
    </Fragment>
  );
};

export { SwitchStep, NavigationStep };
