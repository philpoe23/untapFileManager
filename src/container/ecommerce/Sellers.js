import React, { Fragment, useState, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { Row, Col, Table } from 'antd';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import FeatherIcon from 'feather-icons-react';

const Sellers = ({ searchData, sellers }) => {
  const [state, setState] = useState({
    notdata: searchData,
    item: sellers,
    selectedRowKeys: [],
  });
  const { notdata, selectedRowKeys, item } = state;

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        item: sellers,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [sellers]);

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const dataSource = [];
  sellers.length &&
    item.map(item => {
      const { storeName, id, name, amount, date, img } = item;
      return dataSource.push({
        key: id,
        name: (
          <Fragment>
            <img src={require('../../' + img)} alt="" />
            {name}
          </Fragment>
        ),
        store: storeName,
        amount: amount,
        date: date,
        action: (
          <Fragment>
            <NavLink to="#">
              <FeatherIcon icon="edit" size={16} />
            </NavLink>
            <NavLink to="#">
              <FeatherIcon icon="trash-2" size={16} />
            </NavLink>
          </Fragment>
        ),
      });
    });

  const columns = [
    {
      title: 'Sellers',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Store',
      dataIndex: 'store',
      key: 'store',
    },
    {
      title: 'Products',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Wallet Balance',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Create Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const onSelectChange = selectedRowKeys => {
    setState({ ...state, selectedRowKeys });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Fragment>
      <PageHeader ghost title="Sellers" />
      <Main>
        <Cards headless>
          <Row gutter={15}>
            <Col md={5}>
              <AutoComplete onSearch={handleSearch} dataSource={notdata} width="100%" patterns />
            </Col>
            <Col md={15}></Col>
            <Col md={4}>
              <Button type="default">Export</Button>
              <Button type="primary">+ Add Order</Button>
            </Col>
            <Col md={24}>
              <br />
              <br />
              <Table
                rowSelection={rowSelection}
                dataSource={dataSource}
                columns={columns}
                pagination={{ pageSize: 7 }}
              />
            </Col>
          </Row>
        </Cards>
      </Main>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
    sellers: state.sellers,
  };
};

export default connect(mapStateToProps)(Sellers);
