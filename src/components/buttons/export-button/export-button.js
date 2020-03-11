import React, { Fragment } from 'react';
import { Icon, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Popover } from '../../popup/popup';

const ExportButtonPageHeader = () => {
  const content = (
    <Fragment>
      <NavLink to="#">
        <FeatherIcon size={16} icon="printer" />
        <span>Printer</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="book-open" />
        <span>PDF</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="file-text" />
        <span>Google Sheets</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="x" />
        <span>Excel (XLSX)</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="file" />
        <span>CSV</span>
      </NavLink>
    </Fragment>
  );
  return (
    <Popover placement="bottomLeft" title="Export With" content={content} trigger="click">
      <Button>
        <Icon type="download" />
        Export
      </Button>
    </Popover>
  );
};

export { ExportButtonPageHeader };
