import React from 'react';
import { Input, Button } from 'antd';
import { AutoCompleteStyled } from './style';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = AutoCompleteStyled;
const onSelect = value => {
  console.log('onSelect', value);
};

const AutoComplete = props => {
  const { customComponent, patterns, patternButtons, width, onSearch, dataSource } = props;

  const content =
    dataSource !== undefined &&
    dataSource.length !== undefined &&
    dataSource.length > 0 &&
    dataSource.map(group => {
      const { title, count, id } = group;
      return (
        <Option key={id} value={title}>
          {title}
          <span className="certain-search-item-count">{count} people</span>
        </Option>
      );
    });

  const onSearching = searchText => {
    onSearch(searchText);
  };

  return customComponent ? (
    <AutoCompleteStyled dataSource={dataSource} style={{ width: width }} onSelect={onSelect} onSearch={onSearching}>
      {customComponent}
    </AutoCompleteStyled>
  ) : patterns ? (
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
      onSearch={onSearching}
    >
      <Input
        suffix={
          patternButtons ? (
            <Button className="search-btn" style={{ marginRight: -12 }} size="large" type="primary">
              <SearchOutlined />
            </Button>
          ) : (
            <SearchOutlined />
          )
        }
      />
    </AutoCompleteStyled>
  ) : (
    <AutoCompleteStyled
      dataSource={dataSource}
      style={{ width: width }}
      onSelect={onSelect}
      onSearch={onSearching}
      placeholder="input here"
    />
  );
};

AutoComplete.defaultProps = {
  width: '200px',
};

AutoComplete.propTypes = {
  customComponent: PropTypes.object,
  patterns: PropTypes.bool,
  patternButtons: PropTypes.bool,
  width: PropTypes.string,
};

export { AutoComplete };
