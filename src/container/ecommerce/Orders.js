import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { TopToolBox } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { orderFilter } from '../../redux/orders/actionCreator';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

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

  /**
   * @todo purpose
   * @todo ternary issue
   */
  useEffect(() => {
    if (orders) {
      setState({
        item: orders,
      });
    }
  }, [orders]);

  const handleSearch = searchText => {
    const data = searchData.filter(value => value.title.toUpperCase().startsWith(searchText.toUpperCase()));
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
    orders.map((value, key) => {
      const { status, orderId, customars, amount, date } = value;
      return dataSource.push({
        key: key + 1,
        id: <span className="order-id">{orderId}</span>,
        customar: <span className="customer-name">{customars}</span>,
        status: <span className="status">{status}</span>,
        amount: <span className="ordered-amount">{amount}</span>,
        date: <span className="ordered-date">{date}</span>,
        action: (
          <div className="table-actions">
            <>
              <Button className="btn-icon" type="primary" to="#" shape="circle">
                <FeatherIcon icon="eye" size={16} />
              </Button>
              <Button className="btn-icon" type="info" to="#" shape="circle">
                <FeatherIcon icon="edit" size={16} />
              </Button>
              <Button className="btn-icon" type="danger" to="#" shape="circle">
                <FeatherIcon icon="trash-2" size={16} />
              </Button>
            </>
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

  const onSelectChange = selectedRowKey => {
    setState({ ...state, selectedRowKey });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <PageHeader
        ghost
        title="Orders"
        buttons={[
          <div className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Cards headless>
          <Row gutter={15}>
            <Col md={24}>
              <TopToolBox>
                <Row gutter={15} className="justify-content-center">
                  <Col lg={5} xs={24}>
                    <div className="table-search-box">
                      <AutoComplete onSearch={handleSearch} dataSource={notdata} width="100%" patterns />
                    </div>
                  </Col>
                  <Col xxl={15} lg={13} xs={24}>
                    <div className="table-toolbox-menu">
                      Status:
                      <Radio.Group onChange={handleChangeForFilter} defaultValue={3}>
                        <Radio.Button value="">All</Radio.Button>
                        {item.length &&
                          [...new Set(filterKey)].map(value => {
                            return (
                              <Radio.Button key={value} value={value}>
                                {value}
                              </Radio.Button>
                            );
                          })}
                      </Radio.Group>
                    </div>
                  </Col>
                  <Col xxl={4} lg={6} xs={24}>
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
              <TableWrapper className="table-responsive">
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
    </>
  );
};

export default Orders;
