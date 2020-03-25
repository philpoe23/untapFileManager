import React, { useState, Fragment } from 'react';
import { TableStyled } from './style';
import Topbar from './Topbar';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import FeatherIcon from 'feather-icons-react';

const EmailContent = ({ searchData }) => {
  const [state, setState] = useState({
    selectedRowKeys: [],
    notdata: searchData,
  });
  const { selectedRowKeys, notdata } = state;
  const patternSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setState({
      ...state,
      sortedInfo: sorter,
    });
  };

  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setState({ selectedRowKeys });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setState({ selectedRowKeys: newSelectedRowKeys });
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setState({ selectedRowKeys: newSelectedRowKeys });
        },
      },
    ],
  };

  const columns = [
    {
      title: <Topbar />,
      dataIndex: 'name',
    },
    {
      title: <AutoComplete onSearch={patternSearch} dataSource={notdata} width="100%" patterns />,
      dataIndex: 'age',
    },
    {
      title: (
        <Fragment>
          <FeatherIcon icon="sliders" size={18} />
          <FeatherIcon icon="more-vertical" size={18} />
        </Fragment>
      ),
      dataIndex: 'address',
    },
  ];

  return (
    <TableStyled
      pagination={{
        defaultPageSize: 10,
        total: data.length,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        position: 'top',
      }}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      onChange={handleChange}
    />
  );
};

export default EmailContent;
