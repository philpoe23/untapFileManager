import React, { Fragment } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';
import { MessageAction } from './style';

const Topbar = ({ refreshState }) => {
  return (
    <Fragment>
      <MessageAction>
        <Tooltip placement="bottom" title="Refresh">
          <NavLink onClick={refreshState} to="/refresh">
            <FeatherIcon icon="rotate-cw" size={18} />
          </NavLink>
        </Tooltip>
        <Tooltip placement="bottom" title="Archive">
          <NavLink to="/">
            <FeatherIcon icon="archive" size={18} />
          </NavLink>
        </Tooltip>
        <Tooltip placement="bottom" title="Info">
          <NavLink to="/">
            <FeatherIcon icon="alert-octagon" size={18} />
          </NavLink>
        </Tooltip>
        <Tooltip placement="bottom" title="Delete">
          <NavLink to="/">
            <FeatherIcon icon="trash" size={18} />
          </NavLink>
        </Tooltip>
        <Tooltip placement="bottom" title="Read">
          <NavLink to="/">
            <FeatherIcon icon="book-open" size={18} />
          </NavLink>
        </Tooltip>
        <Tooltip placement="bottom" title="Folder">
          <NavLink to="/">
            <FeatherIcon icon="folder" size={18} />
          </NavLink>
        </Tooltip>
      </MessageAction>
    </Fragment>
  );
};

export default Topbar;
