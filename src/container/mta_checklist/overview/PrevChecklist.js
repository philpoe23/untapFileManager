import { Button, PageHeader, Row, Switch, Table } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardToolbox, Main, TableWrapper } from '../../styled';
import AssetTable from '../../viewAssets/table';
import FeatherIcon from 'feather-icons-react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const PrevChecklist = () => {
  const columns = [
    {
      title: 'Reporting Officer',
      dataIndex: 'reporting_officer',
      key: 'reporting_officer',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Inspection',
      dataIndex: 'inspection',
      key: 'inspection',
    },
    {
      title: 'Submitted By',
      dataIndex: 'submitted_by',
      key: 'submitted_by',
    },
    {
      title: 'Reporting Officer',
      dataIndex: 'reporting_officer',
      key: 'reporting_officer',
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
          title="MTA Aerodome Inspection"
          subTitle={
            <div>
              <Button className="btn-add_new" size="default" key="1" type="primary">
                <Link to="/admin/MTACheckList/new">
                  <FeatherIcon icon="plus" size={14} /> New Checklist
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

export default PrevChecklist;
