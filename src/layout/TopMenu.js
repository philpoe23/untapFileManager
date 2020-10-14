import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { TopMenuStyle } from './style';

const TopMenu = () => {
  const { path } = useRouteMatch();
  return (
    <TopMenuStyle>
      <div className="strikingDash-top-menu">
        <ul>
          <li className="has-subMenu">
            <NavLink to={`${path}`}>Dashboard</NavLink>
            <ul className="subMenu">
              <li>
                <NavLink to={`${path}`}>Social Media</NavLink>
              </li>
              <li>
                <NavLink to={`${path}`}>Site Perfomence</NavLink>
              </li>
              <li>
                <NavLink to={`${path}`}>Ecomerce</NavLink>
              </li>
              <li className="has-subMenu-left">
                <NavLink to={`${path}`}>Business</NavLink>
                <ul className="subMenu">
                  <li>
                    <NavLink to={`${path}`}>Social Media</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}`}>Site Perfomence</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}`}>Ecomerce</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}`}>Business</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to={`${path}`}>Apps</NavLink>
          </li>
          <li>
            <NavLink to={`${path}`}>eComerce</NavLink>
          </li>
          <li>
            <NavLink to={`${path}`}>Pages</NavLink>
          </li>
          <li>
            <NavLink to={`${path}`}>Components</NavLink>
          </li>
        </ul>
      </div>
    </TopMenuStyle>
  );
};

export default TopMenu;
