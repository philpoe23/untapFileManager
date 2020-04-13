import React, { useState, Fragment, useEffect } from 'react';
import { TableStyled } from './style';
import Topbar from './Topbar';
import { AutoComplete } from '../../../components/autoComplete/autoComplete';
import FeatherIcon from 'feather-icons-react';
import Title from '../../../components/heading/heading';
import { textRefactor } from '../../../Helper';
import moment from 'moment';

const EmailContent = ({ searchData, email }) => {
  const [state, setState] = useState({
    selectedRowKeys: [],
    notdata: searchData,
    emails: email,
  });
  let { selectedRowKeys, notdata, emails } = state;

  useEffect(() => {
    setState({
      emails: email,
    });
  }, [email]);

  const patternSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const refreshState = e => {
    e.preventDefault();
    setState({
      ...state,
      emails: email,
    });
  };

  const data = [];
  emails !== undefined &&
    emails.map((inbox, index) => {
      const { id, type, email, userName, status, img, subject, body } = inbox;
      const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
      return data.push({
        key: id,
        name: (
          <div>
            <FeatherIcon icon="star" size={18} />
            <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} src={img} alt={'image' + index} />
            <Title label={5}>{userName}</Title>
          </div>
        ),
        email: email,
        status: status,
        content: (
          <div>
            <Title label={5}>
              {subject} <span>{type}</span>
            </Title>
            <p>{textRefactor(body, 10)}</p>
          </div>
        ),
        time: same ? moment(id).format('hh:mm A') : moment(id).format('LL'),
      });
    });

  const handleChange = (pagination, filters, sorter) => {
    setState({
      ...state,
      sortedInfo: sorter,
    });
  };

  const onSelectChange = selectedRowKeys => {
    setState({ ...state, selectedRowKeys });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [
      {
        key: 'all',
        text: 'All',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          const read = emails.filter(email => {
            return email.status;
          });
          const id = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            id.push(read[index] !== undefined && read[index]['id']);
            if (id.includes(key)) {
              return true;
            }
            return false;
          });
          setState({ ...state, selectedRowKeys: newSelectedRowKeys });
        },
      },
      {
        key: 'read',
        text: 'Read',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          const read = emails.filter(email => {
            return email.status === 'read';
          });
          const id = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            id.push(read[index] !== undefined && read[index]['id']);
            if (id.includes(key)) {
              return true;
            }
            return false;
          });
          setState({ ...state, selectedRowKeys: newSelectedRowKeys });
        },
      },
      {
        key: 'unread',
        text: 'Unread',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          const read = emails.filter(email => {
            return email.status === 'unread';
          });
          const id = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            id.push(read[index] !== undefined && read[index]['id']);
            if (id.includes(key)) {
              return true;
            }
            return false;
          });
          setState({ ...state, selectedRowKeys: newSelectedRowKeys });
        },
      },
      {
        key: 'stared',
        text: 'Stared',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          const read = emails.filter(email => {
            return email.stared;
          });
          const id = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            id.push(read[index] !== undefined && read[index]['id']);
            if (id.includes(key)) {
              return true;
            }
            return false;
          });
          setState({ ...state, selectedRowKeys: newSelectedRowKeys });
        },
      },
      {
        key: 'unstared',
        text: 'Unstared',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          const read = emails.filter(email => {
            return !email.stared;
          });
          const id = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            id.push(read[index] !== undefined && read[index]['id']);
            if (id.includes(key)) {
              return true;
            }
            return false;
          });
          setState({ ...state, selectedRowKeys: newSelectedRowKeys });
        },
      },
    ],
  };

  const columns = [
    {
      title: <Topbar refreshState={refreshState} />,
      dataIndex: 'name',
    },
    {
      title: <AutoComplete onSearch={patternSearch} dataSource={notdata} width="80%" patterns />,
      dataIndex: 'content',
    },
    {
      title: (
        <Fragment>
          <FeatherIcon icon="sliders" size={18} />
          <FeatherIcon icon="more-vertical" size={18} />
        </Fragment>
      ),
      dataIndex: 'time',
      key: 'time',
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
