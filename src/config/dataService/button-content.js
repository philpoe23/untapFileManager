import React, { Fragment } from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';

const content = (
  <Fragment>
    <NavLink to="#">
      <FeatherIcon size={16} icon="check" />
      <span>Btn Dropdown one</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="check" />
      <span>Btn Dropdown two</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="check" />
      <span>Btn Dropdown three</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="check" />
      <span>Btn Dropdown four</span>
    </NavLink>
  </Fragment>
);

export { content };
