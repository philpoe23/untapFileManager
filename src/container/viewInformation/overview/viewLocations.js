import { Button, Divider } from 'antd';
import React from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';

import FeatherIcon from 'feather-icons-react';
import { Main } from '../../styled';
import AssetTable from '../../viewAssets/table';
import { Link } from 'react-router-dom';

const viewLocations = () => {
  return (
    <>
      <PageHeader
        title="View Information"
        subTitle={[
          <div
            style={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Divider type="vertical" style={{ height: '50px' }} />
            <h1 style={{ fontSize: '20px', marginTop: '0.6em' }}>View Locations</h1>
          </div>,
        ]}
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

export default viewLocations;
