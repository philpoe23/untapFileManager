import React, { useState } from 'react';
import { AutoComplete, Input, Icon, Button } from 'antd';

const onSelect = value => {
  console.log('onSelect', value);
};

const Complete = props => {
  const [state, setState] = useState({
    value: '',
    dataSource: [],
  });

  const onSearch = searchText => {
    setState({
      dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
    });
  };

  const { dataSource } = state;
  return <AutoComplete dataSource={dataSource} style={{ width: 200 }} onSelect={onSelect} onSearch={onSearch} placeholder="input here" />;
};

const { Option } = AutoComplete;
const Customize = () => {
  const [state, setState] = useState({
    result: [],
  });

  const handleSearch = value => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    setState({ result });
  };

  const { result } = state;
  const children = result.map(email => <Option key={email}>{email}</Option>);
  return (
    <AutoComplete style={{ width: 200 }} onSearch={handleSearch} placeholder="input here">
      {children}
    </AutoComplete>
  );
};

const { TextArea } = Input;
const CustomizComponent = () => {
  const [state, setState] = useState({
    dataSource: [],
  });

  const handleSearch = value => {
    setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };

  const handleKeyPress = ev => {
    console.log('handleKeyPress', ev);
  };

  const { dataSource } = state;
  return (
    <AutoComplete dataSource={dataSource} style={{ width: 200 }} onSelect={onSelect} onSearch={handleSearch}>
      <TextArea placeholder="input here" className="custom" style={{ height: 50 }} onKeyPress={handleKeyPress} />
    </AutoComplete>
  );
};

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
const AutoCompletes = () => {
  return <AutoComplete style={{ width: 200 }} dataSource={dataSource} placeholder="try to type `b`" filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1} />;
};

const { OptGroup } = AutoComplete;

const dataSource2 = [
  {
    title: 'Libraries',
    children: [
      {
        title: 'AntDesign',
        count: 10000,
      },
      {
        title: 'AntDesign UI',
        count: 10600,
      },
    ],
  },
  {
    title: 'Solutions',
    children: [
      {
        title: 'AntDesign UI',
        count: 60100,
      },
      {
        title: 'AntDesign',
        count: 30010,
      },
    ],
  },
  {
    title: 'Articles',
    children: [
      {
        title: 'AntDesign design language',
        count: 100000,
      },
    ],
  },
];

function renderTitle(title) {
  return (
    <span>
      {title}
      <a style={{ float: 'right' }} href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
        more
      </a>
    </span>
  );
}

const options = dataSource2
  .map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
          <span className="certain-search-item-count">{opt.count} people</span>
        </Option>
      ))}
    </OptGroup>
  ))
  .concat([
    <Option disabled key="all" className="show-all">
      <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
        View all results
      </a>
    </Option>,
  ]);

const LookupPatterns = () => {
  return (
    <div className="certain-category-search-wrapper" style={{ width: 250 }}>
      <AutoComplete className="certain-category-search" dropdownClassName="certain-category-search-dropdown" dropdownMatchSelectWidth={false} dropdownStyle={{ width: 300 }} size="large" style={{ width: '100%' }} dataSource={options} placeholder="input here" optionLabelProp="value">
        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    </div>
  );
};

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          Found {item.query} on
          <a href={`https://s.taobao.com/search?q=${item.query}`} target="_blank" rel="noopener noreferrer">
            {item.category}
          </a>
        </span>
        <span className="global-search-item-count">{item.count} results</span>
      </div>
    </Option>
  );
}

const LookupPatternsWithIcon = () => {
  const [state, setState] = useState({
    dataSource: [],
  });

  const handleSearch = value => {
    setState({
      dataSource: value ? searchResult(value) : [],
    });
  };

  const { dataSource } = state;
  return (
    <div className="global-search-wrapper" style={{ width: 300 }}>
      <AutoComplete className="global-search" size="large" style={{ width: '100%' }} dataSource={dataSource.map(renderOption)} onSelect={onSelect} onSearch={handleSearch} placeholder="input here" optionLabelProp="text">
        <Input
          suffix={
            <Button className="search-btn" style={{ marginRight: -12 }} size="large" type="primary">
              <Icon type="search" />
            </Button>
          }
        />
      </AutoComplete>
    </div>
  );
};

export { Complete, Customize, CustomizComponent, AutoCompletes, LookupPatterns, LookupPatternsWithIcon };
