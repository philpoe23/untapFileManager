import { Button, Divider } from 'antd';
import React, { useState } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';

import FeatherIcon from 'feather-icons-react';
import { Main } from '../../styled';
import AssetTable from '../../viewAssets/table';
import { Link } from 'react-router-dom';
import Modal from 'antd/lib/modal/Modal';

const assetTypes = () => {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleVisible = () => {
    setVisible(true);
  };

  return (
    <>
      <Modal
        className="addEvent-modal"
        footer={null}
        type="primary"
        title="New Visit"
        visible={visible}
        onCancel={handleCancel}
      ></Modal>
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
            <h1 style={{ fontSize: '20px', marginTop: '0.6em' }}>View Asset Types</h1>
          </div>,
        ]}
        buttons={[
          <div>
            <Button className="btn-add_new" size="default" key="1" type="primary" onClick={handleVisible}>
              <FeatherIcon icon="plus" size={14} /> Add New
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

export default assetTypes;
