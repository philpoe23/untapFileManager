import React, { useState, Fragment } from 'react';
import { Button, message } from 'antd';
import PropTypes from 'prop-types';
import { StepsStyle } from './style';
const { Step } = StepsStyle;

const Steps = ({
  size,
  current,
  direction,
  status,
  progressDot,
  steps,
  isswitch,
  navigation,
  onNext,
  onPrev,
  onChange,
  children,
  height,
}) => {
  const [state, setState] = useState({
    currents: current,
  });

  const next = () => {
    const currents = state.currents + 1;
    setState({ currents });
    onNext(currents);
  };

  const prev = () => {
    const currents = state.currents - 1;
    setState({ currents });
    onPrev(currents);
  };

  const { currents } = state;

  const stepStyle = {
    marginBottom: 60,
    boxShadow: '0px -1px 0 0 #e8e8e8 inset',
  };

  //console.log(steps);
  const onChanges = current => {
    // console.log('onChange:', current);
    setState({ currents: current });
    onChange && onChange(current);
  };

  return !isswitch ? (
    <StepsStyle
      type={navigation && 'navigation'}
      style={navigation && stepStyle}
      size={size}
      current={navigation ? currents : current}
      direction={direction}
      status={status}
      progressDot={progressDot}
      onChange={onChanges}
    >
      {children}
    </StepsStyle>
  ) : (
    <Fragment>
      <StepsStyle current={currents} direction={direction} status={status} progressDot={progressDot} size={size}>
        {steps !== undefined && steps.map(item => <Step key={item.title} title={item.title} />)}
      </StepsStyle>

      <div
        className="steps-content"
        style={{ minHeight: height, display: 'flex', justifyContent: 'center', marginTop: 100 }}
      >
        {steps[state.currents].content}
      </div>

      <div className="steps-action">
        {state.currents < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}

        {state.currents === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}

        {state.currents > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </Fragment>
  );
};

Steps.defaultProps = {
  current: 0,
  height: 150,
};

Steps.propTypes = {
  size: PropTypes.string,
  current: PropTypes.number,
  direction: PropTypes.string,
  status: PropTypes.string,
  progressDot: PropTypes.func,
  steps: PropTypes.arrayOf(PropTypes.object),
  isswitch: PropTypes.bool,
  navigation: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  onChange: PropTypes.func,
  height: PropTypes.number,
};

export { Step, Steps };
