import { Button, PageHeader, Row, Switch, Table, List, Avatar } from 'antd';
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

  const data = [
    {
      title: 'Form 4',
      date: '20/11/2021',
    },
    {
      title: 'Form 3',
      date: '20/11/2021',
    },
    {
      title: 'Form 2',
      date: '20/11/2021',
    },
    {
      title: 'Form 1',
      date: '19/11/2021',
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
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/truscottdev.appspot.com/o/pdf_format.pdf?alt=media&token=4c38a254-3d87-4535-bec7-e1301c1ae760"
                  download
                >
                  Download
                </a>,
                <a href="https://firebasestorage.googleapis.com/v0/b/truscottdev.appspot.com/o/pdf_format.pdf?alt=media&token=4c38a254-3d87-4535-bec7-e1301c1ae760">
                  View
                </a>,
              ]}
            >
              <List.Item.Meta title={item.title} description={<p>Submitted on: {item.date}</p>} />
            </List.Item>
          )}
        />
      </Main>
    </>
  );
};

export default PrevChecklist;
