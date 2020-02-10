import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;

const SidebarItem = props => {
  const pathArray = window.location.pathname.split('/');

  return (
    <Menu mode="inline" defaultSelectedKeys={[`${pathArray.length > 2 ? pathArray[2] : 'home'}`]} defaultOpenKeys={[`${pathArray.length > 2 ? pathArray[1] : 'dashboard'}`]}>
      <SubMenu
        key="dashboard"
        title={
          <span>
            <Icon type="home" />
            <span>Dashboard</span>
          </span>
        }
      >
        <Menu.Item key="home">
          <NavLink to="/">Google Analytics Social Media</NavLink>
        </Menu.Item>
        <Menu.Item key="2">Fintech / Business Dashboard</Menu.Item>
        <Menu.Item key="3">Site Performance Dashboard</Menu.Item>
        <Menu.Item key="4">Ecommerce</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="mail" />
            <span>Email</span>
          </span>
        }
      >
        <Menu.Item key="5">Inbox</Menu.Item>
        <Menu.Item key="6">Read Email</Menu.Item>
        <Menu.Item key="7">Compose Email</Menu.Item>
      </SubMenu>
      <Menu.Item key="8">
        <Icon type="message" />
        <span>Chat</span>
      </Menu.Item>

      <SubMenu
        key="sub3"
        title={
          <span>
            <Icon type="shopping-cart" />
            <span>eCommerce</span>
          </span>
        }
      >
        <Menu.Item key="9">Products grid</Menu.Item>
        <Menu.Item key="10">Products list</Menu.Item>
        <Menu.Item key="11">Product edit</Menu.Item>
        <Menu.Item key="12">Product detail</Menu.Item>
        <Menu.Item key="13">Cart</Menu.Item>
        <Menu.Item key="14">Orders</Menu.Item>
        <Menu.Item key="15">Credit Card</Menu.Item>
        <Menu.Item key="16">Sellers</Menu.Item>
        <Menu.Item key="17">Invoices</Menu.Item>
        <Menu.Item key="18">Transactions</Menu.Item>
      </SubMenu>
      <Menu.Item key="19">
        <Icon type="calendar" />
        <span>Calendar</span>
      </Menu.Item>
      <SubMenu
        key="sub4"
        title={
          <span>
            <Icon type="layout" />
            <span>Layouts</span>
          </span>
        }
      >
        <Menu.Item key="20">Sidebar with User</Menu.Item>
        <Menu.Item key="21">Light Sidebar</Menu.Item>
        <Menu.Item key="22">Dark Sidebar</Menu.Item>
        <Menu.Item key="23">Light Topbar</Menu.Item>
        <Menu.Item key="24">Dark Topbar</Menu.Item>
        <Menu.Item key="25">Sidebar Collapsed</Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub5"
        title={
          <span>
            <Icon type="user" />
            <span>Profile</span>
          </span>
        }
      >
        <Menu.Item key="26">Profile</Menu.Item>
        <Menu.Item key="27">Settings</Menu.Item>
        <Menu.Item key="28">Login</Menu.Item>
        <Menu.Item key="29">Register</Menu.Item>
        <Menu.Item key="30">Forgot Password</Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub6"
        title={
          <span>
            <Icon type="folder" />
            <span>Pages</span>
          </span>
        }
      >
        <Menu.Item key="31">Team</Menu.Item>
        <Menu.Item key="32">Users</Menu.Item>
        <Menu.Item key="33">Gallery</Menu.Item>
        <Menu.Item key="34">Pricing</Menu.Item>
        <Menu.Item key="35">Faq`s</Menu.Item>
        <Menu.Item key="36">Search Results</Menu.Item>
        <Menu.Item key="37">Coming Soon</Menu.Item>
        <Menu.Item key="38">404</Menu.Item>
      </SubMenu>
      <p>Components</p>
      <SubMenu
        key="components"
        title={
          <span>
            <Icon type="ant-design" />
            <span>UI Elements</span>
          </span>
        }
      >
        <Menu.Item key="alerts">
          <NavLink to="/components/alerts">Alerts</NavLink>
        </Menu.Item>
        <Menu.Item key="auto-complete">
          <NavLink to="/components/auto-complete">AutoComplete</NavLink>
        </Menu.Item>
        <Menu.Item key="avatar">
          <NavLink to="/components/avatar">Avatar</NavLink>
        </Menu.Item>
        <Menu.Item key="badge">
          <NavLink to="/components/badge">Badge</NavLink>
        </Menu.Item>
        <Menu.Item key="breadcrumb">
          <NavLink to="/components/breadcrumb">Breadcrumb</NavLink>
        </Menu.Item>
        <Menu.Item key="button">
          <NavLink to="/components/button">Button</NavLink>
        </Menu.Item>
        <Menu.Item key="calendar">
          <NavLink to="/components/calendar">Calendar</NavLink>
        </Menu.Item>
        <Menu.Item key="cards">
          <NavLink to="/components/cards">Cards</NavLink>
        </Menu.Item>
        <Menu.Item key="carousel">
          <NavLink to="/components/carousel">Carousel</NavLink>
        </Menu.Item>
        <Menu.Item key="cascader">
          <NavLink to="/components/cascader">Cascader</NavLink>
        </Menu.Item>
        <Menu.Item key="checkbox">
          <NavLink to="/components/checkbox">Checkbox</NavLink>
        </Menu.Item>
        <Menu.Item key="collapse">
          <NavLink to="/components/collapse">Collapse</NavLink>
        </Menu.Item>
        <Menu.Item key="comments">
          <NavLink to="/components/comments">Comments</NavLink>
        </Menu.Item>
        <Menu.Item key="date-picker">
          <NavLink to="/components/date-picker">DatePicker</NavLink>
        </Menu.Item>
        <Menu.Item key="drawer">
          <NavLink to="/components/drawer">Drawer</NavLink>
        </Menu.Item>
        <Menu.Item key="dropdown">
          <NavLink to="/components/dropdown">Dropdown</NavLink>
        </Menu.Item>
        <Menu.Item key="empty">
          <NavLink to="/components/empty">Empty</NavLink>
        </Menu.Item>
        <Menu.Item key="form">
          <NavLink to="/components/form">Form</NavLink>
        </Menu.Item>
        <Menu.Item key="grid">
          <NavLink to="/components/grid">Grid</NavLink>
        </Menu.Item>
        <Menu.Item key="modals">
          <NavLink to="/components/modals">Modals</NavLink>
        </Menu.Item>
        <Menu.Item key="notification">
          <NavLink to="/components/notification">Notification</NavLink>
        </Menu.Item>
        <Menu.Item key="page-headers">
          <NavLink to="/components/page-headers">Page Headers</NavLink>
        </Menu.Item>
        <Menu.Item key="pagination">
          <NavLink to="/components/pagination">Paginations</NavLink>
        </Menu.Item>
        <Menu.Item key="popover">
          <NavLink to="/components/popover">Popover</NavLink>
        </Menu.Item>
        <Menu.Item key="progress">
          <NavLink to="/components/progress">Progress</NavLink>
        </Menu.Item>
        <Menu.Item key="radio">
          <NavLink to="/components/radio">Radio</NavLink>
        </Menu.Item>
        <Menu.Item key="rate">
          <NavLink to="/components/rate">Rate</NavLink>
        </Menu.Item>
        <Menu.Item key="result">
          <NavLink to="/components/result">Result</NavLink>
        </Menu.Item>
        <Menu.Item key="select">
          <NavLink to="/components/select">Select</NavLink>
        </Menu.Item>
        <Menu.Item key="skeleton">
          <NavLink to="/components/skeleton">Skeleton </NavLink>
        </Menu.Item>
        <Menu.Item key="slider">
          <NavLink to="/components/slider">Slider</NavLink>
        </Menu.Item>
        <Menu.Item key="spiner">
          <NavLink to="/components/spiner">Spiner</NavLink>
        </Menu.Item>
        <Menu.Item key="statistic">
          <NavLink to="/components/statistic">Statistic</NavLink>
        </Menu.Item>
        <Menu.Item key="steps">
          <NavLink to="/components/steps">Steps</NavLink>
        </Menu.Item>
        <Menu.Item key="switch">
          <NavLink to="/components/switch">Switch</NavLink>
        </Menu.Item>
        <Menu.Item key="tabs">
          <NavLink to="/components/tabs">Tabs</NavLink>
        </Menu.Item>
        <Menu.Item key="tags">
          <NavLink to="/components/tags">Tags</NavLink>
        </Menu.Item>
        <Menu.Item key="timeline">
          <NavLink to="/components/timeline">Timeline</NavLink>
        </Menu.Item>
        <Menu.Item key="timepicker">
          <NavLink to="/components/timepicker">Timepicker</NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="icon"
        title={
          <span>
            <Icon type="appstore" />
            <span>Icons</span>
          </span>
        }
      >
        <Menu.Item key="feathers">
          <NavLink to="/icon/feathers">Feather icons (svg)</NavLink>
        </Menu.Item>
        <Menu.Item key="font-awesome">
          <NavLink to="/icon/font-awesome">Font Awesome</NavLink>
        </Menu.Item>
        <Menu.Item key="line-awesome">
          <NavLink to="/icon/line-awesome">Line Awesome</NavLink>
        </Menu.Item>
        <Menu.Item key="antd">
          <NavLink to="/icon/antd">Ant Design icons</NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="charts"
        title={
          <span>
            <Icon type="bar-chart" />
            <span>Charts</span>
          </span>
        }
      >
        <Menu.Item key="chartjs">
          <NavLink to="/charts/chartjs">Chart Js</NavLink>
        </Menu.Item>
        <Menu.Item key="google-chart">
          <NavLink to="/charts/google-chart">Google Charts</NavLink>
        </Menu.Item>

        <SubMenu
          key="recharts"
          title={
            <span>
              <Icon type="area-chart" />
              <span>Recharts</span>
            </span>
          }
        >
          <Menu.Item key="bar">
            <NavLink to="/charts/recharts/bar">Bar Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="area">
            <NavLink to="/charts/recharts/area">Area Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="composed">
            <NavLink to="/charts/recharts/composed">Composed Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="line">
            <NavLink to="/charts/recharts/line">Line Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="pie">
            <NavLink to="/charts/recharts/pie">Pie Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="radar">
            <NavLink to="/charts/recharts/radar">Radar Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="radial">
            <NavLink to="/charts/recharts/radial">Radial Charts</NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="peity">
          <NavLink to="/charts/peity">Paity Charts</NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub10"
        title={
          <span>
            <Icon type="table" />
            <span>Table</span>
          </span>
        }
      ></SubMenu>

      <SubMenu
        key="sub11"
        title={
          <span>
            <Icon type="form" />
            <span>Forms</span>
          </span>
        }
      ></SubMenu>
      <SubMenu
        key="maps"
        title={
          <span>
            <Icon type="heat-map" />
            <span>Maps</span>
          </span>
        }
      >
        <Menu.Item key="google">
          <NavLink to="/maps/google">Google Maps</NavLink>
        </Menu.Item>
        <Menu.Item key="leaflet">
          <NavLink to="/maps/leaflet">Leaflet Maps</NavLink>
        </Menu.Item>
        <Menu.Item key="Vector">
          <NavLink to="/maps/Vector">Vector Maps</NavLink>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};
export default SidebarItem;
