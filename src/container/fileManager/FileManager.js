import React from 'react';
import { Row, Col, Input, Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import SideNav from './overview/SideNav';
// import RecentFileTable from './overview/RecentFileTable';
import { FileManagerContentWrap } from './Style';
// import MainContent from './overview/MainContent';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const FileManager = () => {
  const columns = [
    {
      title: 'File Name',
      dataIndex: 'file_name',
      key: 'file_name',
    },
    {
      title: 'Uploaded',
      dataIndex: 'uploaded',
      key: 'uploaded',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
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
      <PageHeader
        title="File Manager"
        buttons={[
          <div key="1" className="page-header-actions">
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col sm={5} xs={24}>
            {/* <SideNav /> */}
          </Col>
          <Col md={24}>
            <Cards headless>
              <TableWrapper className="table-data-view table-responsive">
                <Table rowSelection={true} columns={columns} />
              </TableWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

FileManager.propTypes = {};

export default FileManager;
