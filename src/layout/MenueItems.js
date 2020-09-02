import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeLayoutMode } from '../redux/themeLayout/actionCreator';

const { SubMenu } = Menu;

const MenueItems = ({ darkMode }) => {
  const pathArray = window.location.pathname.split('/');

  const dispatch = useDispatch();

  const modeChangeDark = () => {
    dispatch(changeLayoutMode(true));
  };

  const modeChangeLight = () => {
    dispatch(changeLayoutMode(false));
  };

  return (
    <Menu
      mode="inline"
      theme={darkMode && 'dark'}
      // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={[`${pathArray[1] === '' ? 'home' : pathArray.length === 2 ? pathArray[1] : pathArray[2]}`]}
      defaultOpenKeys={[`${pathArray[1] !== '' ? pathArray[1] : 'dashboard'}`]}
    >
      <SubMenu key="dashboard" icon={<FeatherIcon icon="home" />} title="Dashboard">
        <Menu.Item key="home">
          <NavLink to="/admin">Google Analytics Social Media</NavLink>
        </Menu.Item>
        <Menu.Item key="business">
          <NavLink to="/admin/business">Fintech / Business Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="performance">
          <NavLink to="/admin/performance">Site Performance Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="ecommerce">
          <NavLink to="/admin/ecommerce">Ecommerce</NavLink>
        </Menu.Item>
        <Menu.Item key="base">
          <NavLink to="/admin/base">Dashbord Base</NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="email" icon={<FeatherIcon icon="mail" />} title="Email">
        <Menu.Item key="inbox">
          <NavLink to="/admin/email/inbox">Inbox</NavLink>
        </Menu.Item>
        <Menu.Item key="single">
          <NavLink to="/admin/email/single/1585118055048">Read Email</NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item icon={<FeatherIcon icon="message-square" />} key="chat">
        <NavLink to="/admin/chat/private/rofiq@gmail.com">Chat</NavLink>
      </Menu.Item>

      <SubMenu key="ecommerce" icon={<FeatherIcon icon="shopping-cart" />} title="eCommerce">
        <Menu.Item key="products">
          <NavLink to="/admin/ecommerce/products">Products</NavLink>
        </Menu.Item>
        <Menu.Item key="productDetails">
          <NavLink to="/admin/ecommerce/productDetails/1">Product detail</NavLink>
        </Menu.Item>

        <Menu.Item key="add-product">
          <NavLink to="/admin/ecommerce/add-product">Product Add</NavLink>
        </Menu.Item>

        <Menu.Item key="edit-product">
          <NavLink to="/admin/ecommerce/edit-product">Product Edit</NavLink>
        </Menu.Item>
        <Menu.Item key="cart">
          <NavLink to="/admin/ecommerce/cart">Cart</NavLink>
        </Menu.Item>
        <Menu.Item key="orders">
          <NavLink to="/admin/ecommerce/orders">Orders</NavLink>
        </Menu.Item>
        {/* <Menu.Item key="15">Credit Card</Menu.Item> */}
        <Menu.Item key="sellers">
          <NavLink to="/admin/ecommerce/sellers">Sellers</NavLink>
        </Menu.Item>
        <Menu.Item key="Invoice">
          <NavLink to="/admin/ecommerce/Invoice">Invoices</NavLink>
        </Menu.Item>
        {/* <Menu.Item key="18">Transactions</Menu.Item> */}
      </SubMenu>

      {/* <Menu.Item key="calendar">
        <NavLink to="/calendar">
          <FeatherIcon icon="calendar" />
          <span>Calendar</span>
        </NavLink>
      </Menu.Item> */}

      <Menu.Item icon={<FeatherIcon icon="target" />} key="project">
        <NavLink to="/admin/project">Project</NavLink>
      </Menu.Item>

      <SubMenu key="sub4" icon={<FeatherIcon icon="layout" />} title="Layouts">
        {/* <Menu.Item key="20">Sidebar with User</Menu.Item> */}
        <Menu.Item key="21">
          <NavLink to="#" onClick={modeChangeLight}>
            Light Sidebar
          </NavLink>
        </Menu.Item>
        <Menu.Item key="22">
          <NavLink to="#" onClick={modeChangeDark}>
            Dark Sidebar
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="23">Light Topbar</Menu.Item>
        <Menu.Item key="24">Dark Topbar</Menu.Item>
        <Menu.Item key="25">Sidebar Collapsed</Menu.Item> */}
      </SubMenu>

      <SubMenu key="profile" icon={<FeatherIcon icon="user" />} title="Profile">
        {/* <Menu.Item key="26">Profile</Menu.Item> */}
        <Menu.Item key="settings">
          <NavLink to="/admin/settings">Settings</NavLink>
        </Menu.Item>
        {/* <Menu.Item key="28">Login</Menu.Item>
        <Menu.Item key="29">Register</Menu.Item>
        <Menu.Item key="30">Forgot Password</Menu.Item> */}
      </SubMenu>

      <SubMenu key="pages" icon={<FeatherIcon icon="folder" />} title="Pages">
        <Menu.Item key="team">
          <NavLink to="/admin/pages/team">Team</NavLink>
        </Menu.Item>
        <Menu.Item key="users">
          <NavLink to="/admin/pages/users">Users</NavLink>
        </Menu.Item>
        <Menu.Item key="dataTable">
          <NavLink to="/admin/pages/dataTable">Users Table</NavLink>
        </Menu.Item>
        <Menu.Item key="gallery">
          <NavLink to="/admin/pages/gallery">Gallery</NavLink>
        </Menu.Item>
        <Menu.Item key="pricing">
          <NavLink to="/admin/pages/pricing">Pricing</NavLink>
        </Menu.Item>
        <Menu.Item key="faq">
          <NavLink to="/admin/pages/faq">Faq`s</NavLink>
        </Menu.Item>
        <Menu.Item key="search">
          <NavLink to="/admin/pages/search">Search Results</NavLink>
        </Menu.Item>
        <Menu.Item key="maintenance">
          <NavLink to="/admin/pages/maintenance">Coming Soon</NavLink>
        </Menu.Item>
        <Menu.Item key="404">
          <NavLink to="/admin/pages/404">404</NavLink>
        </Menu.Item>
      </SubMenu>
      <p className="sidebar-nav-title">Components</p>

      <SubMenu key="components" icon={<FeatherIcon icon="layers" />} title="UI Elements">
        <Menu.Item key="alerts">
          <NavLink to="/admin/components/alerts">Alerts</NavLink>
        </Menu.Item>
        <Menu.Item key="auto-complete">
          <NavLink to="/admin/components/auto-complete">AutoComplete</NavLink>
        </Menu.Item>
        <Menu.Item key="avatar">
          <NavLink to="/admin/components/avatar">Avatar</NavLink>
        </Menu.Item>
        <Menu.Item key="badge">
          <NavLink to="/admin/components/badge">Badge</NavLink>
        </Menu.Item>
        <Menu.Item key="breadcrumb">
          <NavLink to="/admin/components/breadcrumb">Breadcrumb</NavLink>
        </Menu.Item>
        <Menu.Item key="button">
          <NavLink to="/admin/components/button">Button</NavLink>
        </Menu.Item>
        <Menu.Item key="calendar">
          <NavLink to="/admin/components/calendar">Calendar</NavLink>
        </Menu.Item>
        <Menu.Item key="cards">
          <NavLink to="/admin/components/cards">Cards</NavLink>
        </Menu.Item>
        <Menu.Item key="carousel">
          <NavLink to="/admin/components/carousel">Carousel</NavLink>
        </Menu.Item>
        <Menu.Item key="cascader">
          <NavLink to="/admin/components/cascader">Cascader</NavLink>
        </Menu.Item>
        <Menu.Item key="checkbox">
          <NavLink to="/admin/components/checkbox">Checkbox</NavLink>
        </Menu.Item>
        <Menu.Item key="collapse">
          <NavLink to="/admin/components/collapse">Collapse</NavLink>
        </Menu.Item>
        <Menu.Item key="comments">
          <NavLink to="/admin/components/comments">Comments</NavLink>
        </Menu.Item>
        <Menu.Item key="date-picker">
          <NavLink to="/admin/components/date-picker">DatePicker</NavLink>
        </Menu.Item>
        <Menu.Item key="drag">
          <NavLink to="/components/drag">Drag & Drop</NavLink>
        </Menu.Item>
        <Menu.Item key="drawer">
          <NavLink to="/admin/components/drawer">Drawer</NavLink>
        </Menu.Item>
        <Menu.Item key="dropdown">
          <NavLink to="/admin/components/dropdown">Dropdown</NavLink>
        </Menu.Item>
        <Menu.Item key="empty">
          <NavLink to="/admin/components/empty">Empty</NavLink>
        </Menu.Item>
        <Menu.Item key="form">
          <NavLink to="/admin/components/form">Form</NavLink>
        </Menu.Item>
        <Menu.Item key="grid">
          <NavLink to="/admin/components/grid">Grid</NavLink>
        </Menu.Item>
        <Menu.Item key="input">
          <NavLink to="/admin/components/input">Input</NavLink>
        </Menu.Item>
        <Menu.Item key="list">
          <NavLink to="/admin/components/list">List</NavLink>
        </Menu.Item>
        <Menu.Item key="menu">
          <NavLink to="/admin/components/menu">Menu</NavLink>
        </Menu.Item>
        <Menu.Item key="message">
          <NavLink to="/admin/components/message">Message</NavLink>
        </Menu.Item>
        <Menu.Item key="modals">
          <NavLink to="/admin/components/modals">Modals</NavLink>
        </Menu.Item>
        <Menu.Item key="notification">
          <NavLink to="/admin/components/notification">Notification</NavLink>
        </Menu.Item>
        <Menu.Item key="page-headers">
          <NavLink to="/admin/components/page-headers">Page Headers</NavLink>
        </Menu.Item>
        <Menu.Item key="pagination">
          <NavLink to="/admin/components/pagination">Paginations</NavLink>
        </Menu.Item>
        <Menu.Item key="confirme">
          <NavLink to="/admin/components/confirme">Popconfirme</NavLink>
        </Menu.Item>
        <Menu.Item key="popover">
          <NavLink to="/admin/components/popover">Popover</NavLink>
        </Menu.Item>
        <Menu.Item key="progress">
          <NavLink to="/admin/components/progress">Progress</NavLink>
        </Menu.Item>
        <Menu.Item key="radio">
          <NavLink to="/admin/components/radio">Radio</NavLink>
        </Menu.Item>
        <Menu.Item key="rate">
          <NavLink to="/admin/components/rate">Rate</NavLink>
        </Menu.Item>
        <Menu.Item key="result">
          <NavLink to="/admin/components/result">Result</NavLink>
        </Menu.Item>
        <Menu.Item key="select">
          <NavLink to="/admin/components/select">Select</NavLink>
        </Menu.Item>
        <Menu.Item key="skeleton">
          <NavLink to="/admin/components/skeleton">Skeleton </NavLink>
        </Menu.Item>
        <Menu.Item key="slider">
          <NavLink to="/admin/components/slider">Slider</NavLink>
        </Menu.Item>
        <Menu.Item key="spiner">
          <NavLink to="/admin/components/spiner">Spiner</NavLink>
        </Menu.Item>
        <Menu.Item key="statistic">
          <NavLink to="/admin/components/statistic">Statistic</NavLink>
        </Menu.Item>
        <Menu.Item key="steps">
          <NavLink to="/admin/components/steps">Steps</NavLink>
        </Menu.Item>
        <Menu.Item key="switch">
          <NavLink to="/admin/components/switch">Switch</NavLink>
        </Menu.Item>
        <Menu.Item key="tabs">
          <NavLink to="/admin/components/tabs">Tabs</NavLink>
        </Menu.Item>
        <Menu.Item key="tags">
          <NavLink to="/admin/components/tags">Tags</NavLink>
        </Menu.Item>
        <Menu.Item key="timeline">
          <NavLink to="/admin/components/timeline">Timeline</NavLink>
        </Menu.Item>
        <Menu.Item key="timepicker">
          <NavLink to="/admin/components/timepicker">Timepicker</NavLink>
        </Menu.Item>
        <Menu.Item key="tree-select">
          <NavLink to="/admin/components/tree-select">TreeSelect</NavLink>
        </Menu.Item>
        <Menu.Item key="upload">
          <NavLink to="/admin/components/upload">Upload</NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="icon" icon={<FeatherIcon icon="grid" />} title="Icons">
        <Menu.Item key="feathers">
          <NavLink to="/admin/icons/feathers">Feather icons (svg)</NavLink>
        </Menu.Item>
        <Menu.Item key="font-awesome">
          <NavLink to="/admin/icons/font-awesome">Font Awesome</NavLink>
        </Menu.Item>
        <Menu.Item key="line-awesome">
          <NavLink to="/admin/icons/line-awesome">Line Awesome</NavLink>
        </Menu.Item>
        <Menu.Item key="antd">
          <NavLink to="/admin/icons/antd">Ant Design icons</NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="charts" icon={<FeatherIcon icon="bar-chart-2" />} title="Charts">
        <Menu.Item key="chartjs">
          <NavLink to="/admin/charts/chartjs">Chart Js</NavLink>
        </Menu.Item>
        <Menu.Item key="google-chart">
          <NavLink to="/admin/charts/google-chart">Google Charts</NavLink>
        </Menu.Item>

        <SubMenu key="recharts" icon={<FeatherIcon icon="bar-chart" />} title="Recharts">
          <Menu.Item key="bar">
            <NavLink to="/admin/charts/recharts/bar">Bar Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="area">
            <NavLink to="/admin/charts/recharts/area">Area Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="composed">
            <NavLink to="/admin/charts/recharts/composed">Composed Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="line">
            <NavLink to="/admin/charts/recharts/line">Line Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="pie">
            <NavLink to="/admin/charts/recharts/pie">Pie Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="radar">
            <NavLink to="/admin/charts/recharts/radar">Radar Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="radial">
            <NavLink to="/admin/charts/recharts/radial">Radial Charts</NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="peity">
          <NavLink to="/admin/charts/peity">Peity Charts</NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item icon={<FeatherIcon icon="cpu" />} key="tables">
        <NavLink to="/admin/tables">Table</NavLink>
      </Menu.Item>

      <Menu.Item icon={<FeatherIcon icon="disc" />} key="forms">
        <NavLink to="/admin/forms">Forms</NavLink>
      </Menu.Item>

      <SubMenu key="maps" icon={<FeatherIcon icon="map" />} title="Maps">
        <Menu.Item key="google">
          <NavLink to="/admin/maps/google">Google Maps</NavLink>
        </Menu.Item>
        <Menu.Item key="leaflet">
          <NavLink to="/admin/maps/leaflet">Leaflet Maps</NavLink>
        </Menu.Item>
        <Menu.Item key="Vector">
          <NavLink to="/admin/maps/Vector">Vector Maps</NavLink>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

MenueItems.propTypes = {
  darkMode: propTypes.bool,
};

MenueItems.defaultProps = {
  darkMode: false,
};

export default MenueItems;
