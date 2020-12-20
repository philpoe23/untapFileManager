import React, { useState } from 'react';
import { Row, Col, Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useSelector, useDispatch } from 'react-redux';
import { CSVLink } from 'react-csv';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, ExportStyleWrap } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { contactSearchData } from '../../redux/contact/actionCreator';
import { alertModal } from '../../components/modals/antd-modals';

const Import = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => {
    return {
      users: state.Contact.data,
    };
  });
  const [state, setState] = useState({
    selectedRowKeys: 0,
    selectedRows: [],
  });

  const handleSearch = searchText => {
    dispatch(contactSearchData(searchText));
  };

  const usersTableData = [];
  const csvData = [['id', 'name', 'email', 'company', 'position']];

  users
    .sort((a, b) => {
      return b.time - a.time;
    })
    .map(user => {
      const { id, name, designation, email, company } = user;
      return usersTableData.push({
        key: id,
        user: name,
        email,
        company,
        position: designation,
      });
    });

  const usersTableColumns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setState({ ...state, selectedRowKeys, selectedRows });
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  state.selectedRows.map(member => {
    const { key, user, position, email, company } = member;
    return csvData.push([key, user, email, company, position]);
  });

  const warning = () => {
    alertModal.warning({
      title: 'Please Select your Required Rows!',
    });
  };

  return (
    <>
      <PageHeader
        title="Export"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <ExportStyleWrap>
              <Cards headless>
                <div className="sDash_export-box">
                  {state.selectedRows.length ? (
                    <CSVLink filename="react.csv" data={csvData}>
                      <Button className="btn-export" type="primary">
                        Export
                      </Button>
                    </CSVLink>
                  ) : (
                    <Button className="btn-export" onClick={warning} type="primary">
                      Export
                    </Button>
                  )}

                  <AutoComplete
                    onSearch={handleSearch}
                    // dataSource={notData}
                    placeholder="Search by Name"
                    width="100%"
                    patterns
                  />
                </div>
                <div className="sDash_export-file-table table-bordered table-responsive">
                  <Table
                    rowSelection={rowSelection}
                    dataSource={usersTableData}
                    columns={usersTableColumns}
                    pagination={{
                      defaultPageSize: 7,
                      total: usersTableData.length,
                      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                    }}
                  />
                </div>
              </Cards>
            </ExportStyleWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Import;
