import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Popover } from '../../popup/popup';
import { Button } from '../buttons';

const ShareButtonPageHeader = () => {
  const content = (
    <Fragment>
      <NavLink to="#">
        <FeatherIcon size={16} icon="facebook" />
        <span>Facebook</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="twitter" />
        <span>Twitter</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="rss" />
        <span>Feed</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="linkedin" />
        <span>Linkedin</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="instagram" />
        <span>Instagram</span>
      </NavLink>
    </Fragment>
  );
  return (
    <Popover placement="bottomLeft" title="Share Link" content={content} trigger="click">
      <Button size="small" type="white" key="3">
        <FeatherIcon icon="share-2" size={14} />
        Share
      </Button>
    </Popover>
  );
};

export { ShareButtonPageHeader };
