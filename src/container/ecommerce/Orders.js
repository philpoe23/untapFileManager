import React, { Fragment, useState, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { Row, Col, Radio, Table } from 'antd';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import FeatherIcon from 'feather-icons-react';
import { orderFilter } from '../../redux/orders/actionCreator';

const Orders = ({ searchData, orders, orderFilter, isloading }) => {
  const [state, setState] = useState({
    notdata: searchData,
    item: orders,
    selectedRowKeys: [],
  });

  const { notdata, item, selectedRowKeys } = state;
  const filterKey = ['Shipped', 'Awaiting Shipment', 'Canceled'];

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        item: orders,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [orders]);

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const handleChangeForFilter = e => {
    orderFilter('status', e.target.value);
  };

  const dataSource = [];
  orders.length &&
    orders.map((item, key) => {
      const { status, orderId, customars, amount, date } = item;
      return dataSource.push({
        key: key + 1,
        id: orderId,
        customar: customars,
        status: status,
        amount: amount,
        date: date,
        action: (
          <Fragment>
            <NavLink to="#">
              <FeatherIcon icon="eye" size={16} />
            </NavLink>
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
      title: 'Order Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Customar',
      dataIndex: 'customar',
      key: 'customar',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Date',
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
      <PageHeader ghost title="Orders" />
      <Main>
        <Cards headless>
          <Row gutter={15}>
            <Col md={5}>
              <AutoComplete onSearch={handleSearch} dataSource={notdata} width="100%" patterns />
            </Col>
            <Col md={15}>
              Status:
              <Radio.Group onChange={handleChangeForFilter} defaultValue={3}>
                <Radio.Button value="">All</Radio.Button>
                {item.length &&
                  [...new Set(filterKey)].map((item, key) => {
                    return (
                      <Radio.Button key={key + 1} value={item}>
                        {item}
                      </Radio.Button>
                    );
                  })}
              </Radio.Group>
            </Col>
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
const mapDispatchToProps = dispatch => {
  return {
    orderFilter: (column, value) => dispatch(orderFilter(column, value)),
  };
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
    orders: state.orders.data,
    isloading: state.gallery.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
