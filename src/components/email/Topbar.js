import React, { Fragment } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Tooltip } from 'antd';

const Topbar = () => {
  return (
    <Fragment>
      <Tooltip placement="bottom" title="Refresh">
        <FeatherIcon icon="rotate-cw" size={18} />
      </Tooltip>
      <Tooltip placement="bottom" title="Archive">
        <FeatherIcon icon="archive" size={18} />
      </Tooltip>
      <Tooltip placement="bottom" title="Info">
        <FeatherIcon icon="alert-octagon" size={18} />
      </Tooltip>
      <Tooltip placement="bottom" title="Delete">
        <FeatherIcon icon="trash" size={18} />
      </Tooltip>
      <Tooltip placement="bottom" title="Read">
        <FeatherIcon icon="book-open" size={18} />
      </Tooltip>
      <Tooltip placement="bottom" title="Folder">
        <FeatherIcon icon="folder" size={18} />
      </Tooltip>
    </Fragment>
  );
};

export default Topbar;
