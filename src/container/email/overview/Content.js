import React, { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min';
import propTypes from 'prop-types';
import { Style, EmailAuthor, EmailHeader } from './style';
import Topbar from './Topbar';
import { AutoComplete } from '../../../components/autoComplete/autoComplete';
import Heading from '../../../components/heading/heading';
import { textRefactor } from '../../../components/utilities/utilities';

const Content = ({ searchData, email }) => {
  const [state, setState] = useState({
    selectedRowKeys: [],
    notData: searchData,
    emails: email,
  });
  const { selectedRowKeys, notData, emails } = state;

  useEffect(() => {
    setState({
      emails: email,
    });
  }, [email]);

  const handleSearch = searchText => {
    const data =
      searchData !== undefined &&
      searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
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
  if (emails !== undefined)
    emails.map(inbox => {
      // eslint-disable-next-line no-shadow
      const { id, type, email, userName, status, img, subject, body, attach } = inbox;

      const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
      return data.push({
        key: id,
        name: (
          <EmailAuthor>
            <FeatherIcon icon="star" size={18} />
            <img src={img} alt="" />
            <Heading as="h5">
              <NavLink to={`/email/single/${id}`}>{userName}</NavLink>
            </Heading>
          </EmailAuthor>
        ),
        email,
        status,
        content: (
          <EmailHeader>
            <Heading as="h5">
              {subject} <span className="mail-badge">{type}</span>
            </Heading>
            <p>{textRefactor(body, 10)}</p>
            {attach.length
              ? attach.map(item => (
                  <a key={item} className="btn-attachment" download href={require(`../../../static/img/email/${item}`)}>
                    <FeatherIcon icon="paperclip" size={14} />
                    {item}
                  </a>
                ))
              : null}
          </EmailHeader>
        ),
        time: <span className="email-time">{same ? moment(id).format('hh:mm A') : moment(id).format('LL')}</span>,
      });
    });

  const handleChange = (pagination, filters, sorter) => {
    setState({
      ...state,
      sortedInfo: sorter,
    });
  };

  const onRowSelection = filterObj => {
    const { filter, byValue } = filterObj;

    const newSelectedRowKeys = emails
      .filter(value => {
        return value[filter] === byValue;
      })
      .map(item => item.id);

    setState({ ...state, selectedRowKeys: newSelectedRowKeys });
  };

  const onSelectChange = selectedRowKey => {
    setState({ ...state, selectedRowKey });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [
      {
        key: 'all',
        text: 'All',
        onSelect: () => {
          const newSelectedRowKeys = email.map(item => item.id);
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
      title: (
        <div className="email-top-search">
          <AutoComplete onSearch={handleSearch} dataSource={notData} width="80%" patterns />
        </div>
      ),
      dataIndex: 'content',
    },
    {
      title: (
        <>
          <div className="email-top-right d-flex align-items-center">
            <span className="page-number">1 - 50 of 235</span>
            <div className="pagination-slider">
              <Link className="btn-paging" to="#">
                <FeatherIcon icon="chevron-left" size={14} />
              </Link>
              <Link className="btn-paging" to="#">
                <FeatherIcon icon="chevron-right" size={14} />
              </Link>
            </div>
            <div className="email-extra">
              <NavLink to="/">
                <FeatherIcon icon="sliders" size={18} />
              </NavLink>
              <NavLink to="/">
                <FeatherIcon icon="more-vertical" size={18} />
              </NavLink>
            </div>
          </div>
        </>
      ),
      dataIndex: 'time',
      key: 'time',
    },
  ];

  return (
    <Style
      className="table-responsive"
      pagination={false}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      onChange={handleChange}
    />
  );
};

Content.propTypes = {
  searchData: propTypes.arrayOf(propTypes.object).isRequired,
  email: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Content;
