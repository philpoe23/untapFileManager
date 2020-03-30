import React, { useState, Fragment, useEffect } from 'react';
import { TableStyled } from './style';
import Topbar from './Topbar';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import FeatherIcon from 'feather-icons-react';

const EmailContent = ({ searchData, email }) => {
  const [state, setState] = useState({
    selectedRowKeys: [],
    notdata: searchData,
    sortedInfo: null,
    emails: email,
  });
  let { selectedRowKeys, notdata, sortedInfo, emails } = state;

  useEffect(() => {
    setState({
      emails: email,
    });
  }, [email]);

  sortedInfo = sortedInfo || {};

  const patternSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const data = [];
  emails
    .filter(email => {
      return email.type === 'inbox';
    })
    .map((inbox, index) => {
      const { id, type, email, userName, status, stared, img } = inbox;
      return data.push({
        key: id,
        name: userName,
        email: email,
        address: `London, Park Lane no. ${index}`,
      });
    });

  const handleChange = (pagination, filters, sorter) => {
    setState({
      ...state,
      sortedInfo: sorter,
    });
  };

  const onSelectChange = selectedRowKeys => {
    setState({ selectedRowKeys });
  };

  const setAgeSort = () => {
    setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'address',
      },
    });
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
      dataIndex: 'email',
    },
    {
      title: (
        <Fragment>
          <FeatherIcon onClick={setAgeSort} icon="sliders" size={18} />
          <FeatherIcon icon="more-vertical" size={18} />
        </Fragment>
      ),
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      ellipsis: true,
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
