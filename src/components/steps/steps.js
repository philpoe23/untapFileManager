import React, { useState } from 'react';
import { Row, Col, Button, message } from 'antd';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { StepsStyle, ActionWrapper } from './style';

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
  onDone,
  onChange,
  children,
  height,
  isfinished,
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

  // console.log(steps);
  const onChanges = curr => {
    // console.log('onChange:', current);
    setState({ currents: curr });
    if (onChange) onChange(curr);
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
    <>
      <StepsStyle current={currents} direction={direction} status={status} progressDot={progressDot} size={size}>
        {steps !== undefined && steps.map(item => <Step key={item.title} title={item.title} />)}
      </StepsStyle>

      <div
        className="steps-content"
        style={{ minHeight: height, display: 'flex', justifyContent: 'center', marginTop: 100 }}
      >
        {steps[state.currents].content}
      </div>

      {!isfinished && (
        <ActionWrapper>
          {/* <Row justify="center">
              <Col sm={17} xs={24}> */}
          <div className="step-action-wrap">
            <div className="step-action-inner">
              <Row>
                <Col xs={24}>
                  <div className="steps-action">
                    {state.currents > 0 && (
                      <Button className="btn-prev" type="light" onClick={() => prev()}>
                        <FeatherIcon icon="arrow-left" size={16} />
                        Previous
                      </Button>
                    )}

                    {state.currents < steps.length - 1 && (
                      <Button className="btn-next" type="primary" onClick={() => next()}>
                        Save & Next
                        <FeatherIcon icon="arrow-right" size={16} />
                      </Button>
                    )}

                    {state.currents === steps.length - 1 && (
                      <Button type="primary" onClick={onDone}>
                        Done
                      </Button>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          {/* </Col>
            </Row> */}
        </ActionWrapper>
      )}
    </>
  );
};

Steps.defaultProps = {
  current: 0,
  height: 150,
  onDone: () => message.success('Processing complete!'),
  isfinished: false,
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
  isfinished: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  onDone: PropTypes.func,
  onChange: PropTypes.func,
  height: PropTypes.number,
  children: PropTypes.object,
};

export { Step, Steps };
