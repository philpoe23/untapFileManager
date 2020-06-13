import React, { Fragment, useState, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Table } from 'antd';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { TopToolBox } from './Style';
import FeatherIcon from 'feather-icons-react';
import { orderFilter } from '../../redux/orders/actionCreator';

const Orders = () => {
  const dispatch = useDispatch();
  const { searchData, orders } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      orders: state.orders.data,
    };
  });

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
    dispatch(orderFilter('status', e.target.value));
  };

  const dataSource = [];
  orders.length &&
    orders.map((item, key) => {
      const { status, orderId, customars, amount, date } = item;
      return dataSource.push({
        key: key + 1,
        id: <span className="order-id">{orderId}</span>,
        customar: <span className="customer-name">{customars}</span>,
        status: <span className="status">{status}</span>,
        amount: <span className="ordered-amount">{amount}</span>,
        date: <span className="ordered-date">{date}</span>,
        action: (
          <div className="table-actions">
            <Fragment>
              <Button className="btn-icon" type="primary" to="#" shape="circle">
                <FeatherIcon icon="eye" size={16} />
              </Button>
              <Button className="btn-icon" type="info" to="#" shape="circle">
                <FeatherIcon icon="edit" size={16} />
              </Button>
              <Button className="btn-icon" type="danger" to="#" shape="circle">
                <FeatherIcon icon="trash-2" size={16} />
              </Button>
            </Fragment>
          </div>
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
            <Col md={24}>
              <TopToolBox>
                <Row gutter={15}>
                  <Col md={5}>
                    <div className="table-search-box">
                      <AutoComplete onSearch={handleSearch} dataSource={notdata} width="100%" patterns />
                    </div>
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
                    <div className="table-toolbox-actions">
                      <Button size="small" type="secondary" transparented>
                        Export
                      </Button>
                      <Button size="small" type="primary">
                        + Add Order
                      </Button>
                    </div>
                  </Col>
                </Row>
              </TopToolBox>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col md={24}>
              <TableWrapper>
                <Table
                  rowSelection={rowSelection}
                  dataSource={dataSource}
                  columns={columns}
                  pagination={{ pageSize: 7 }}
                />
              </TableWrapper>
            </Col>
          </Row>
        </Cards>
      </Main>
    </Fragment>
  );
};

export default Orders;
