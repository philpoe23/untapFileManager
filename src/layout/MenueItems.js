import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeLayoutMode } from '../redux/themeLayout/actionCreator';

const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed, rtl }) => {
  const { path } = useRouteMatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

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
      defaultSelectedKeys={[
        `${mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]}`,
      ]}
      defaultOpenKeys={[`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`]}
    >
      <SubMenu key="dashboard" icon={<FeatherIcon icon="home" />} title="Dashboard">
        <Menu.Item key="home">
          <NavLink onClick={toggleCollapsed} to="/admin">
            Social Media
          </NavLink>
        </Menu.Item>
        <Menu.Item key="business">
          <NavLink onClick={toggleCollapsed} to="/admin/business">
            Fintech / Business
          </NavLink>
        </Menu.Item>
        <Menu.Item key="performance">
          <NavLink onClick={toggleCollapsed} to="/admin/performance">
            Site Performance
          </NavLink>
        </Menu.Item>
        <Menu.Item key="ecommerce">
          <NavLink onClick={toggleCollapsed} to="/admin/ecommerce">
            Ecommerce
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="email" icon={<FeatherIcon icon="mail" />} title="Email">
        <Menu.Item key="inbox">
          <NavLink onClick={toggleCollapsed} to="/admin/email/inbox">
            Inbox
          </NavLink>
        </Menu.Item>
        <Menu.Item key="single">
          <NavLink onClick={toggleCollapsed} to="/admin/email/single/1585118055048">
            Read Email
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item icon={<FeatherIcon icon="message-square" />} key="chat">
        <NavLink onClick={toggleCollapsed} to="/admin/main/chat/private/rofiq@gmail.com">
          Chat
        </NavLink>
      </Menu.Item>

      <SubMenu key="ecommerce" icon={<FeatherIcon icon="shopping-cart" />} title="eCommerce">
        <Menu.Item key="products">
          <NavLink onClick={toggleCollapsed} to="/admin/ecommerce/products">
            Products
          </NavLink>
        </Menu.Item>
        <Menu.Item key="productDetails">
          <NavLink onClick={toggleCollapsed} to="/admin/ecommerce/productDetails/1">
            Product detail
          </NavLink>
        </Menu.Item>

        <Menu.Item key="add-product">
          <NavLink onClick={toggleCollapsed} to="/admin/ecommerce/add-product">
            Product Add
          </NavLink>
        </Menu.Item>

        <Menu.Item key="edit-product">
          <NavLink onClick={toggleCollapsed} to="/admin/ecommerce/edit-product">
            Product Edit
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cart">
          <NavLink onClick={toggleCollapsed} to="/admin/ecommerce/cart">
            Cart
          </NavLink>
        </Menu.Item>
        <Menu.Item key="orders">
          <NavLink onClick={toggleCollapsed} to="/admin/ecommerce/orders">
            Orders
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="15">Credit Card</Menu.Item> */}
        <Menu.Item key="sellers">
          <NavLink onClick={toggleCollapsed} to="/admin/ecommerce/sellers">
            Sellers
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Invoice">
          <NavLink onClick={toggleCollapsed} to="/admin/ecommerce/Invoice">
            Invoices
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="18">Transactions</Menu.Item> */}
      </SubMenu>

      <SubMenu key="project" icon={<FeatherIcon icon="target" />} title="Project">
        <Menu.Item key="view">
          <NavLink onClick={toggleCollapsed} to="/admin/project/view">
            Project
          </NavLink>
        </Menu.Item>
        <Menu.Item key="projectDetails">
          <NavLink onClick={toggleCollapsed} to="/admin/project/projectDetails/1">
            Project Details
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="sub4" icon={<FeatherIcon icon="layout" />} title="Layouts">
        <Menu.Item key="21">
          <NavLink
            to="#"
            onClick={() => {
              modeChangeLight();
              toggleCollapsed();
            }}
          >
            Light Sidebar
          </NavLink>
        </Menu.Item>
        <Menu.Item key="22">
          <NavLink
            to="#"
            onClick={() => {
              modeChangeDark();
              toggleCollapsed();
            }}
          >
            Dark Sidebar
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="profile" icon={<FeatherIcon icon="user" />} title="Profile">
        <Menu.Item key="settings">
          <NavLink onClick={toggleCollapsed} to="/admin/profile/settings">
            Settings
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="pages" icon={<FeatherIcon icon="folder" />} title="Pages">
        <Menu.Item key="team">
          <NavLink onClick={toggleCollapsed} to="/admin/pages/team">
            Team
          </NavLink>
        </Menu.Item>
        <Menu.Item key="users">
          <NavLink onClick={toggleCollapsed} to="/admin/pages/users">
            Users
          </NavLink>
        </Menu.Item>
        <Menu.Item key="dataTable">
          <NavLink onClick={toggleCollapsed} to="/admin/pages/dataTable">
            Users Table
          </NavLink>
        </Menu.Item>
        <Menu.Item key="gallery">
          <NavLink onClick={toggleCollapsed} to="/admin/pages/gallery">
            Gallery
          </NavLink>
        </Menu.Item>
        <Menu.Item key="pricing">
          <NavLink onClick={toggleCollapsed} to="/admin/pages/pricing">
            Pricing
          </NavLink>
        </Menu.Item>
        <Menu.Item key="faq">
          <NavLink onClick={toggleCollapsed} to="/admin/pages/faq">
            Faq`s
          </NavLink>
        </Menu.Item>
        <Menu.Item key="search">
          <NavLink onClick={toggleCollapsed} to="/admin/pages/search">
            Search Results
          </NavLink>
        </Menu.Item>
        <Menu.Item key="maintenance">
          <NavLink onClick={toggleCollapsed} to="/admin/pages/maintenance">
            Maintenance
          </NavLink>
        </Menu.Item>
        <Menu.Item key="404">
          <NavLink onClick={toggleCollapsed} to="/admin/pages/404">
            404
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <p className="sidebar-nav-title">Components</p>

      <SubMenu key="components" icon={<FeatherIcon icon="layers" />} title="UI Elements">
        <Menu.Item key="alerts">
          <NavLink onClick={toggleCollapsed} to="/admin/components/alerts">
            Alerts
          </NavLink>
        </Menu.Item>
        <Menu.Item key="auto-complete">
          <NavLink onClick={toggleCollapsed} to="/admin/components/auto-complete">
            AutoComplete
          </NavLink>
        </Menu.Item>
        <Menu.Item key="avatar">
          <NavLink onClick={toggleCollapsed} to="/admin/components/avatar">
            Avatar
          </NavLink>
        </Menu.Item>
        <Menu.Item key="badge">
          <NavLink onClick={toggleCollapsed} to="/admin/components/badge">
            Badge
          </NavLink>
        </Menu.Item>
        <Menu.Item key="breadcrumb">
          <NavLink onClick={toggleCollapsed} to="/admin/components/breadcrumb">
            Breadcrumb
          </NavLink>
        </Menu.Item>
        <Menu.Item key="button">
          <NavLink onClick={toggleCollapsed} to="/admin/components/button">
            Button
          </NavLink>
        </Menu.Item>
        <Menu.Item key="calendar">
          <NavLink onClick={toggleCollapsed} to="/admin/components/calendar">
            Calendar
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cards">
          <NavLink onClick={toggleCollapsed} to="/admin/components/cards">
            Cards
          </NavLink>
        </Menu.Item>
        <Menu.Item key="carousel">
          <NavLink onClick={toggleCollapsed} to="/admin/components/carousel">
            Carousel
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cascader">
          <NavLink onClick={toggleCollapsed} to="/admin/components/cascader">
            Cascader
          </NavLink>
        </Menu.Item>
        <Menu.Item key="checkbox">
          <NavLink onClick={toggleCollapsed} to="/admin/components/checkbox">
            Checkbox
          </NavLink>
        </Menu.Item>
        <Menu.Item key="collapse">
          <NavLink onClick={toggleCollapsed} to="/admin/components/collapse">
            Collapse
          </NavLink>
        </Menu.Item>
        <Menu.Item key="comments">
          <NavLink onClick={toggleCollapsed} to="/admin/components/comments">
            Comments
          </NavLink>
        </Menu.Item>
        <Menu.Item key="base">
          <NavLink onClick={toggleCollapsed} to="/admin/base">
            Dashboard Base
          </NavLink>
        </Menu.Item>
        <Menu.Item key="date-picker">
          <NavLink onClick={toggleCollapsed} to="/admin/components/date-picker">
            DatePicker
          </NavLink>
        </Menu.Item>
        <Menu.Item key="drawer">
          <NavLink onClick={toggleCollapsed} to="/admin/components/drawer">
            Drawer
          </NavLink>
        </Menu.Item>
        <Menu.Item key="dropdown">
          <NavLink onClick={toggleCollapsed} to="/admin/components/dropdown">
            Dropdown
          </NavLink>
        </Menu.Item>
        <Menu.Item key="empty">
          <NavLink onClick={toggleCollapsed} to="/admin/components/empty">
            Empty
          </NavLink>
        </Menu.Item>
        <Menu.Item key="form">
          <NavLink onClick={toggleCollapsed} to="/admin/components/form">
            Form
          </NavLink>
        </Menu.Item>
        <Menu.Item key="grid">
          <NavLink onClick={toggleCollapsed} to="/admin/components/grid">
            Grid
          </NavLink>
        </Menu.Item>
        <Menu.Item key="input">
          <NavLink onClick={toggleCollapsed} to="/admin/components/input">
            Input
          </NavLink>
        </Menu.Item>
        <Menu.Item key="list">
          <NavLink onClick={toggleCollapsed} to="/admin/components/list">
            List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="menu">
          <NavLink onClick={toggleCollapsed} to="/admin/components/menu">
            Menu
          </NavLink>
        </Menu.Item>
        <Menu.Item key="message">
          <NavLink onClick={toggleCollapsed} to="/admin/components/message">
            Message
          </NavLink>
        </Menu.Item>
        <Menu.Item key="modals">
          <NavLink onClick={toggleCollapsed} to="/admin/components/modals">
            Modals
          </NavLink>
        </Menu.Item>
        <Menu.Item key="notification">
          <NavLink onClick={toggleCollapsed} to="/admin/components/notification">
            Notification
          </NavLink>
        </Menu.Item>
        <Menu.Item key="page-headers">
          <NavLink onClick={toggleCollapsed} to="/admin/components/page-headers">
            Page Headers
          </NavLink>
        </Menu.Item>
        <Menu.Item key="pagination">
          <NavLink onClick={toggleCollapsed} to="/admin/components/pagination">
            Paginations
          </NavLink>
        </Menu.Item>
        <Menu.Item key="confirme">
          <NavLink onClick={toggleCollapsed} to="/admin/components/confirme">
            Popconfirme
          </NavLink>
        </Menu.Item>
        <Menu.Item key="popover">
          <NavLink onClick={toggleCollapsed} to="/admin/components/popover">
            Popover
          </NavLink>
        </Menu.Item>
        <Menu.Item key="progress">
          <NavLink onClick={toggleCollapsed} to="/admin/components/progress">
            Progress
          </NavLink>
        </Menu.Item>
        <Menu.Item key="radio">
          <NavLink onClick={toggleCollapsed} to="/admin/components/radio">
            Radio
          </NavLink>
        </Menu.Item>
        <Menu.Item key="rate">
          <NavLink onClick={toggleCollapsed} to="/admin/components/rate">
            Rate
          </NavLink>
        </Menu.Item>
        <Menu.Item key="result">
          <NavLink onClick={toggleCollapsed} to="/admin/components/result">
            Result
          </NavLink>
        </Menu.Item>
        <Menu.Item key="select">
          <NavLink onClick={toggleCollapsed} to="/admin/components/select">
            Select
          </NavLink>
        </Menu.Item>
        <Menu.Item key="skeleton">
          <NavLink onClick={toggleCollapsed} to="/admin/components/skeleton">
            Skeleton{' '}
          </NavLink>
        </Menu.Item>
        <Menu.Item key="slider">
          <NavLink onClick={toggleCollapsed} to="/admin/components/slider">
            Slider
          </NavLink>
        </Menu.Item>
        <Menu.Item key="spiner">
          <NavLink onClick={toggleCollapsed} to="/admin/components/spiner">
            Spiner
          </NavLink>
        </Menu.Item>
        <Menu.Item key="statistic">
          <NavLink onClick={toggleCollapsed} to="/admin/components/statistic">
            Statistic
          </NavLink>
        </Menu.Item>
        <Menu.Item key="steps">
          <NavLink onClick={toggleCollapsed} to="/admin/components/steps">
            Steps
          </NavLink>
        </Menu.Item>
        <Menu.Item key="switch">
          <NavLink onClick={toggleCollapsed} to="/admin/components/switch">
            Switch
          </NavLink>
        </Menu.Item>
        <Menu.Item key="tabs">
          <NavLink onClick={toggleCollapsed} to="/admin/components/tabs">
            Tabs
          </NavLink>
        </Menu.Item>
        <Menu.Item key="tags">
          <NavLink onClick={toggleCollapsed} to="/admin/components/tags">
            Tags
          </NavLink>
        </Menu.Item>
        <Menu.Item key="timeline">
          <NavLink onClick={toggleCollapsed} to="/admin/components/timeline">
            Timeline
          </NavLink>
        </Menu.Item>
        <Menu.Item key="timepicker">
          <NavLink onClick={toggleCollapsed} to="/admin/components/timepicker">
            Timepicker
          </NavLink>
        </Menu.Item>
        <Menu.Item key="tree-select">
          <NavLink onClick={toggleCollapsed} to="/admin/components/tree-select">
            TreeSelect
          </NavLink>
        </Menu.Item>
        <Menu.Item key="upload">
          <NavLink onClick={toggleCollapsed} to="/admin/components/upload">
            Upload
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="icons" icon={<FeatherIcon icon="grid" />} title="Icons">
        <Menu.Item key="feathers">
          <NavLink onClick={toggleCollapsed} to="/admin/icons/feathers">
            Feather icons (svg)
          </NavLink>
        </Menu.Item>
        <Menu.Item key="font-awesome">
          <NavLink onClick={toggleCollapsed} to="/admin/icons/font-awesome">
            Font Awesome
          </NavLink>
        </Menu.Item>
        <Menu.Item key="antd">
          <NavLink onClick={toggleCollapsed} to="/admin/icons/antd">
            Ant Design icons
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="charts" icon={<FeatherIcon icon="bar-chart-2" />} title="Charts">
        <Menu.Item key="chartjs">
          <NavLink onClick={toggleCollapsed} to="/admin/charts/chartjs">
            Chart Js
          </NavLink>
        </Menu.Item>
        <Menu.Item key="google-chart">
          <NavLink onClick={toggleCollapsed} to="/admin/charts/google-chart">
            Google Charts
          </NavLink>
        </Menu.Item>

        <SubMenu key="recharts" icon={<FeatherIcon icon="bar-chart" />} title="Recharts">
          <Menu.Item key="bar">
            <NavLink onClick={toggleCollapsed} to="/admin/charts/recharts/bar">
              Bar Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="area">
            <NavLink onClick={toggleCollapsed} to="/admin/charts/recharts/area">
              Area Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="composed">
            <NavLink onClick={toggleCollapsed} to="/admin/charts/recharts/composed">
              Composed Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="line">
            <NavLink onClick={toggleCollapsed} to="/admin/charts/recharts/line">
              Line Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="pie">
            <NavLink onClick={toggleCollapsed} to="/admin/charts/recharts/pie">
              Pie Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="radar">
            <NavLink onClick={toggleCollapsed} to="/admin/charts/recharts/radar">
              Radar Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="radial">
            <NavLink onClick={toggleCollapsed} to="/admin/charts/recharts/radial">
              Radial Charts
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="peity">
          <NavLink onClick={toggleCollapsed} to="/admin/charts/peity">
            Peity Charts
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item icon={<FeatherIcon icon="cpu" />} key="tables">
        <NavLink onClick={toggleCollapsed} to="/admin/tables">
          Table
        </NavLink>
      </Menu.Item>

      <Menu.Item icon={<FeatherIcon icon="disc" />} key="forms">
        <NavLink onClick={toggleCollapsed} to="/admin/forms">
          Forms
        </NavLink>
      </Menu.Item>

      <SubMenu key="maps" icon={<FeatherIcon icon="map" />} title="Maps">
        <Menu.Item key="google">
          <NavLink onClick={toggleCollapsed} to="/admin/maps/google">
            Google Maps
          </NavLink>
        </Menu.Item>
        <Menu.Item key="leaflet">
          <NavLink onClick={toggleCollapsed} to="/admin/maps/leaflet">
            Leaflet Maps
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Vector">
          <NavLink onClick={toggleCollapsed} to="/admin/maps/Vector">
            Vector Maps
          </NavLink>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
