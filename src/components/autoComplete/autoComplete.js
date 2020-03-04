import React, { useState } from 'react';
import { Input, Icon, Button } from 'antd';
import { AutoCompleteStyled } from './style';
import PropTypes from 'prop-types';

const { Option } = AutoCompleteStyled;
const onSelect = value => {
  console.log('onSelect', value);
};

const AutoComplete = props => {
  const [state, setState] = useState({
    value: '',
    dataSource: [],
  });
  const { customComponent, pattarns, pattarnButtons, width, searchData } = props;

  const content = searchData ? (
    searchData.map(group => {
      const { title, count, id } = group;
      return (
        <Option key={id} value={title}>
          {title}
          <span className="certain-search-item-count">{count} people</span>
        </Option>
      );
    })
  ) : (
    <Option value="">Data Not found....</Option>
  );

  const onSearch = searchText => {
    let arrayData = [];
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    data.length ? data.map(item => arrayData.push(item.title)) : (arrayData = ['Data Not Found!']);
    setState({
      dataSource: !searchText ? [] : arrayData,
    });
  };

  const { dataSource } = state;
  return customComponent ? (
    <AutoCompleteStyled dataSource={dataSource} style={{ width: width }} onSelect={onSelect} onSearch={onSearch}>
      {customComponent}
    </AutoCompleteStyled>
  ) : pattarns ? (
    <AutoCompleteStyled
      className="certain-category-search"
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={false}
      dropdownStyle={{ width: 300 }}
      size="large"
      style={{ width: width }}
      dataSource={content}
      placeholder="input here"
      optionLabelProp="value"
    >
      <Input
        suffix={
          pattarnButtons ? (
            <Button className="search-btn" style={{ marginRight: -12 }} size="large" type="primary">
              <Icon type="search" />
            </Button>
          ) : (
            <Icon type="search" className="certain-category-icon" />
          )
        }
      />
    </AutoCompleteStyled>
  ) : (
    <AutoCompleteStyled
      dataSource={dataSource}
      style={{ width: width }}
      onSelect={onSelect}
      onSearch={onSearch}
      placeholder="input here"
    />
  );
};

AutoComplete.defaultProps = {
  width: '200px',
};

AutoComplete.propTypes = {
  customComponent: PropTypes.object,
  pattarns: PropTypes.bool,
  pattarnButtons: PropTypes.bool,
  width: PropTypes.string,
  searchData: PropTypes.arrayOf(PropTypes.object),
};

export { AutoComplete };
