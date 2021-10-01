import { Button, PageHeader, Row, Switch } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardToolbox, Main } from '../../styled';
import AssetTable from '../../viewAssets/table';
import FeatherIcon from 'feather-icons-react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const PrevChecklist = () => {
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
        <AssetTable />
      </Main>
    </>
  );
};

export default PrevChecklist;
