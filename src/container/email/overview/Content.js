import React, { useState, Fragment, useEffect } from 'react';
import { Style } from './style';
import Topbar from './Topbar';
import { AutoComplete } from '../../../components/autoComplete/autoComplete';
import FeatherIcon from 'feather-icons-react';
import Heading from '../../../components/heading/heading';
import { textRefactor } from '../../../Helper';
import moment from 'moment';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { TableResponsive } from '../../styled';
import { EmailAuthor, EmailHeader } from './style';

const Content = ({ searchData, email }) => {
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

  const handleSearch = searchText => {
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
          <EmailAuthor>
            <FeatherIcon icon="star" size={18} />
            <img src={img} alt={'image' + index} />
            <Heading as="h5">
              <NavLink to={'/email/single/' + id}>{userName}</NavLink>
            </Heading>
          </EmailAuthor>
        ),
        email: email,
        status: status,
        content: (
          <EmailHeader>
            <Heading as="h5">
              {subject} <span>{type}</span>
            </Heading>
            <p>{textRefactor(body, 10)}</p>
          </EmailHeader>
        ),
        time: (
          <span className="email-time">
            {same ? moment(id).format('hh:mm A') : moment(id).format('LL')}
          </span>
        )
      });
    });

  const handleChange = (pagination, filters, sorter) => {
    setState({
      ...state,
      sortedInfo: sorter,
    });
  };

  const onRowSelection = (filterObj, changableRowKeys) => {
    const { filter, byValue } = filterObj;

    const newSelectedRowKeys = emails
      .filter(email => {
        return email[filter] == byValue;
      })
      .map(item => item.id);

    setState({ ...state, selectedRowKeys: newSelectedRowKeys });
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
          let newSelectedRowKeys = email.map(item => item.id);
          setState({ ...state, selectedRowKeys: newSelectedRowKeys });
        },
      },
      {
        key: 'read',
        text: 'Read',
        onSelect: onRowSelection.bind(null, { filter: 'status', byValue: 'read' }),
      },
      {
        key: 'unread',
        text: 'Unread',
        onSelect: onRowSelection.bind(null, { filter: 'status', byValue: 'unread' }),
      },
      {
        key: 'stared',
        text: 'Stared',
        onSelect: onRowSelection.bind(null, { filter: 'stared', byValue: true }),
      },
      {
        key: 'unstared',
        text: 'Unstared',
        onSelect: onRowSelection.bind(null, { filter: 'status', byValue: false }),
      },
    ],
  };

  const columns = [
    {
      title: <Topbar refreshState={refreshState} />,
      dataIndex: 'name',
    },
    {
      title: <AutoComplete onSearch={handleSearch} dataSource={notdata} width="80%" patterns />,
      dataIndex: 'content',
    },
    {
      title: (
        <Fragment>
          <div className="email-top-right d-flex align-items-center">
            <NavLink to='/'>
              <FeatherIcon icon="sliders" size={18} />
            </NavLink>
            <NavLink to='/'>
              <FeatherIcon icon="more-vertical" size={18} />
            </NavLink>
          </div>
        </Fragment>
      ),
      dataIndex: 'time',
      key: 'time',
    },
  ];

  return (
    <TableResponsive>
      <Style
        pagination={false}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        onChange={handleChange}
      />
    </TableResponsive>
  );
};

export default Content;
