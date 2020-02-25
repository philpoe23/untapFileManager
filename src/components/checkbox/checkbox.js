import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

const CheckAll = props => {
  const { item, defaultSelect } = props;
  const plainOptions = item;
  const [state, setState] = useState({
    checkedList: defaultSelect,
    indeterminate: true,
    checkAll: false,
  });

  const onChange = checkedList => {
    setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  const onCheckAllChange = e => {
    setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  return (
    <div>
      <div style={{ borderBottom: '1px solid #E9E9E9' }}>
        <Checkbox indeterminate={state.indeterminate} onChange={onCheckAllChange} checked={state.checkAll}>
          Check all
        </Checkbox>
      </div>
      <br />
      <CheckboxGroup options={plainOptions} value={state.checkedList} onChange={onChange} />
    </div>
  );
};

CheckAll.propTypes = {
  item: PropTypes.array.isRequired,
  defaultSelect: PropTypes.array.isRequired,
};
export { CheckAll };
