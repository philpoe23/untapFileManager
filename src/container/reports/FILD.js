import { Button, PageHeader, Table } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardToolbox, Main, TableWrapper } from '../styled';
import FeatherIcon from 'feather-icons-react';
import AssetTable from '../viewInformation/table';

const FILD = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Arrival Date',
      dataIndex: 'arrival_date',
      key: 'arrival_date',
    },
    {
      title: 'Submitted By',
      dataIndex: 'submitted_by',
      key: 'submitted_by',
    },
    {
      title: 'Airline',
      dataIndex: 'airline',
      key: 'airline',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];
  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Fuel Issue and Landing Record Docket"
          subTitle={
            <div>
              <Button className="btn-add_new" size="default" key="1" type="primary">
                <Link to="/admin/fuellandingrecord/new">
                  <FeatherIcon icon="plus" size={14} /> New Docket
                </Link>
              </Button>
            </div>
          }
        />
      </CardToolbox>
      <Main>
        <TableWrapper className="table-data-view table-responsive">
          <Table rowSelection={true} columns={columns} />
        </TableWrapper>
      </Main>
    </>
  );
};

export default FILD;
