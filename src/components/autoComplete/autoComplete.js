import React from 'react';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';
import { AutoCompleteStyled } from './style';

const onSelect = () => {
  // console.log('onSelect', value);
};

const renderItem = (title, count) => {
  return {
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
        {count}
      </div>
    ),
  };
};

const AutoComplete = props => {
  const { customComponent, patterns, patternButtons, width, onSearch, dataSource } = props;

  const content =
    dataSource?.length > 0 &&
    dataSource.map(group => {
      const { title, count } = group;
      return {
        options: [renderItem(title, <span className="certain-search-item-count">{count} people</span>)],
      };
    });

  const onSearching = searchText => {
    onSearch(searchText);
  };

  return customComponent ? (
    <AutoCompleteStyled dataSource={dataSource} style={{ width }} onSelect={onSelect} onSearch={onSearching}>
      {customComponent}
    </AutoCompleteStyled>
  ) : patterns ? (
    <AutoCompleteStyled
      className="certain-category-search"
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={false}
      dropdownStyle={{ width: 300 }}
      style={{ width }}
      options={content}
      placeholder="input here"
      onSearch={onSearching}
    >
      <Input
        suffix={
          patternButtons ? (
            <Button className="search-btn" style={{ marginRight: -20 }} type="primary">
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
      style={{ width }}
      onSelect={onSelect}
      onSearch={onSearching}
      placeholder="input here"
    />
  );
};

AutoComplete.defaultProps = {
  width: '350px',
};

AutoComplete.propTypes = {
  customComponent: PropTypes.object,
  patterns: PropTypes.bool,
  patternButtons: PropTypes.bool,
  width: PropTypes.string,
  onSearch: PropTypes.func,
  dataSource: PropTypes.array,
};

export { AutoComplete };
