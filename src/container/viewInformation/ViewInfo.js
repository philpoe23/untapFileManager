import { Button } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../styled';
import FeatherIcon from 'feather-icons-react';
import AssetTable from './table';

const ViewInformation = () => {
  return (
    <>
      <PageHeader
        title="View Information"
        buttons={[
          <div>
            <Button className="btn-add_new" size="default" key="1" type="primary">
              <Link to="">
                <FeatherIcon icon="plus" size={14} /> Add New
              </Link>
            </Button>
          </div>,
        ]}
      />
      <Main>
        <AssetTable />
      </Main>
    </>
  );
};

export default ViewInformation;
