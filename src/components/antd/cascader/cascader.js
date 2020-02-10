import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Cascader } from 'antd';

const BasicCascader = props => {
  const { data, defaultValue, trigger } = props;
  const options = data;
  const onChange = value => {
    console.log(value);
  };
  return <Cascader options={options} expandTrigger={trigger} defaultValue={defaultValue} onChange={onChange} placeholder="Please select" />;
};

const LazyOptions = props => {
  const { data, defaultValue, trigger } = props;
  const options = data;

  const [state, setState] = useState({
    options,
  });

  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  const loadData = selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setState({
        options: [...state.options],
      });
    }, 1000);
  };

  return <Cascader options={state.options} loadData={loadData} expandTrigger={trigger} defaultValue={defaultValue} onChange={onChange} changeOnSelect />;
};

const ShowSearch = props => {
  const { data, defaultValue, trigger } = props;
  const options = data;
  const onChange = value => {
    console.log(value);
  };
  const filter = (inputValue, path) => {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  };
  return <Cascader options={options} expandTrigger={trigger} defaultValue={defaultValue} onChange={onChange} showSearch={{ filter }} placeholder="Please select" />;
};

ShowSearch.propTypes = {
  data: PropTypes.array.isRequired,
  defaultValue: PropTypes.array,
  trigger: PropTypes.string,
};

LazyOptions.propTypes = {
  data: PropTypes.array.isRequired,
  defaultValue: PropTypes.array,
  trigger: PropTypes.string,
};

BasicCascader.propTypes = {
  data: PropTypes.array.isRequired,
  defaultValue: PropTypes.array,
  trigger: PropTypes.string,
};

export { BasicCascader, LazyOptions, ShowSearch };
