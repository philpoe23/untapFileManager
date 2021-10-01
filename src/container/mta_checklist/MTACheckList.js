import { Button, PageHeader, Row, Switch } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardToolbox, Main } from '../styled';
import AssetTable from '../viewAssets/table';
import newCheckList from './overview/NewCheckList';
import FeatherIcon from 'feather-icons-react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import PrevChecklist from './overview/PrevChecklist';

const MTACheckList = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <PrevChecklist />
    </>
  );
};

export default MTACheckList;
