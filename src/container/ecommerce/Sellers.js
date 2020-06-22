import React, { Fragment, useState, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { useSelector } from 'react-redux';
import { Row, Col, Table } from 'antd';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { TopToolBox } from './Style';
import FeatherIcon from 'feather-icons-react';

const Sellers = () => {
  const { searchData, sellers } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      sellers: state.sellers,
    };
  });

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
          <div className="seller-info">
            <Fragment>
              <img src={require('../../' + img)} alt="" />
              {name}
            </Fragment>
          </div>
        ),
        store: storeName,
        amount: amount,
        date: date,
        action: (
          <div className="table-actions">
            <Fragment>
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
            <Col md={24}>
              <TopToolBox>
                <Row gutter={15}>
                  <Col xxl={5} lg={10} xs={24}>
                    <div className="table-search-box">
                      <AutoComplete onSearch={handleSearch} dataSource={notdata} width="100%" patterns />
                    </div>
                  </Col>
                  <Col xxl={15} lg={5} xs={24}></Col>
                  <Col xxl={4} lg={9} xs={24}>
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
    </Fragment>
  );
};

export default Sellers;
