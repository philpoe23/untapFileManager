import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { SidebarNavWrap } from '../../style';

const SideNav = () => {
  return (
    <SidebarNavWrap>
      <div className="knowledge-sidebar">
        <h4 className="knowledge-sidebar__title">Plugins</h4>
        <ul>
          <li>
            <Link>
              <FeatherIcon icon="chevron-down" size={14} /> Introduction to Plugin
            </Link>
            <ul className="submenu">
              <li>
                <Link>Switch between accounts</Link>
              </li>
              <li>
                <Link>Installing vendor marketplace lorem vendor marketplace </Link>
              </li>
              <li>
                <Link>Stop getting emails from lorem</Link>
              </li>
              <li>
                <Link>Threads to organize discussions</Link>
              </li>
              <li>
                <Link>Understand your actions in lorem</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>
              <FeatherIcon icon="chevron-down" size={14} /> Introduction to Plugin
            </Link>
            <ul className="submenu">
              <li>
                <Link>Switch between accounts</Link>
              </li>
              <li>
                <Link>Installing vendor marketplace lorem vendor marketplace </Link>
              </li>
              <li>
                <Link>Stop getting emails from lorem</Link>
              </li>
              <li>
                <Link>Threads to organize discussions</Link>
              </li>
              <li>
                <Link>Understand your actions in lorem</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>
              <FeatherIcon icon="chevron-down" size={14} /> Introduction to Plugin
            </Link>
            <ul className="submenu">
              <li>
                <Link>Switch between accounts</Link>
              </li>
              <li>
                <Link>Installing vendor marketplace lorem vendor marketplace </Link>
              </li>
              <li>
                <Link>Stop getting emails from lorem</Link>
              </li>
              <li>
                <Link>Threads to organize discussions</Link>
              </li>
              <li>
                <Link>
                  <FeatherIcon icon="chevron-down" size={14} /> Introduction to PluginUnderstand your actions in lorem
                </Link>
                <ul className="submenu">
                  <li>
                    <Link>Understand your actions in lorem</Link>
                  </li>
                  <li>
                    <Link>Understand your actions in lorem</Link>
                  </li>
                  <li>
                    <Link>Understand your actions in lorem</Link>
                  </li>
                  <li>
                    <Link>Understand your actions in lorem</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </SidebarNavWrap>
  );
};

export default SideNav;
