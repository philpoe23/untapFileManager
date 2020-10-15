import React, { useLayoutEffect } from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';
import { TopMenuStyle } from './style';

const TopMenu = () => {
  const { path } = useRouteMatch();

  useLayoutEffect(() => {
    const active = document.querySelector('.subMenu a.active');

    active.closest('ul').previousSibling.classList.add('active');
  }, []);

  function addParentActive(event) {
    document.querySelectorAll('.parent').forEach(element => {
      element.classList.remove('active');
    });
    event.currentTarget.closest('ul').previousSibling.classList.add('active');
  }
  return (
    <TopMenuStyle>
      <div className="strikingDash-top-menu">
        <ul>
          <li className="has-subMenu">
            <Link className="parent">Dashboard</Link>
            <ul className="subMenu">
              <li>
                <NavLink to={`${path}/components/alerts`} onClick={addParentActive}>
                  Social Media
                </NavLink>
              </li>
              <li>
                <NavLink to={`${path}/business`} onClick={addParentActive}>
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink to={`${path}/performance`} onClick={addParentActive}>
                  Site Perfomence
                </NavLink>
              </li>
              <li>
                <NavLink to={`${path}/ecommerce`} onClick={addParentActive}>
                  Ecomerce
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="has-subMenu">
            <Link className="parent">Fire Crud</Link>
            <ul className="subMenu">
              <li>
                <NavLink onClick={addParentActive} to={`${path}/firesore/fbView`}>
                  View all
                </NavLink>
              </li>
              <li>
                <NavLink onClick={addParentActive} to={`${path}/firestore/fbAdd`}>
                  Add new
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="has-subMenu">
            <Link className="parent">Apps</Link>
            <ul className="subMenu">
              <li>
                <NavLink onClick={addParentActive} to={`${path}/main/chat/private/rofiq@gmail.com`}>
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink onClick={addParentActive} to={`${path}/app/contact`}>
                  Contact
                </NavLink>
              </li>
              <li className="has-subMenu-left">
                <Link className="parent">eComerce</Link>
                <ul className="subMenu">
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/products`}>
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/productDetails/1`}>
                      Products Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/add-product`}>
                      Product Add
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/edit-product`}>
                      Product Edit
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/cart`}>
                      Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/orders`}>
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/sellers`}>
                      Sellers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/ecommerce/Invoice`}>
                      Invoices
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="has-subMenu-left">
                <Link className="parent">Email</Link>
                <ul className="subMenu">
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/email/inbox`}>
                      Inbox
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/email/single/1585118055048`}>
                      Read Email
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink onClick={addParentActive} to={`${path}/app/note/all`}>
                  Note
                </NavLink>
              </li>
              <li className="has-subMenu-left">
                <Link className="parent">Social App</Link>
                <ul className="subMenu">
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/profile/myProfile/overview`}>
                      My Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/profile/settings`}>
                      Settings
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink onClick={addParentActive} to={`${path}/app/to-do/`}>
                  To Do
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="mega-item has-subMenu">
            <Link className="parent">Pages</Link>
            <ul className="megaMenu-wrapper megaMenu-small">
              <li>
                <ul>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Project
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Project Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Create Project
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      User
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Add User
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      User Table
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Faqs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Search
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Maintenance
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      404
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="mega-item has-subMenu">
            <Link className="parent">Components</Link>
            <ul className="megaMenu-wrapper megaMenu-wide">
              <li>
                <span className="mega-title">Components</span>
                <ul>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/alerts`}>
                      Alert
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/auto-complete`}>
                      AutoComplete
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/avatar`}>
                      Avatar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/badge`}>
                      Badge
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/breadcrumb`}>
                      Breadcrumb
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/button`}>
                      Buttons
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/calendar`}>
                      Calendar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/cards`}>
                      Card
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/carousel`}>
                      Carousel
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/cascader`}>
                      Cascader
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={addParentActive} to={`${path}/components/checkbox`}>
                      Checkbox
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/collapse`}>Collapse</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <span className="mega-title">Components</span>
                <ul>
                  <li>
                    <NavLink to={`${path}/components/comments`}>Comments</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/base`}>Dashboard Base</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/date-picker`}>DataPicker</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/drag`}>Drag & Drop</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/drawer`}>Drawer</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/dropdown`}>Dropdown</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/empty`}>Empty</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/form`}>Form</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/grid`}>Grid</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/input`}>Input</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/list`}>List</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/menu`}>Menu</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <span className="mega-title">Components</span>
                <ul>
                  <li>
                    <NavLink to={`${path}/components/message`}>Message</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/modals`}>Modals</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/notification`}>Notifications</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/page-headers`}>Page Headers</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/pagination`}>Pagination</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/confirm`}>PopConfirm</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/popover`}>PopOver</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/alerts`}>Progress</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/radio`}>Radio</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/rate`}>Rate</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/result`}>Result</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/select`}>Select</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <span className="mega-title">Components</span>
                <ul>
                  <li>
                    <NavLink to={`${path}/components/skeleton`}>Skeleton</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/slider`}>Slider</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/spiner`}>Spiner</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/statistic`}>Statistics</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/steps`}>Steps</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/switch`}>Switch</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/tabs`}>Tabs</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/tags`}>Tags</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/timeline`}>Timeline</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/timepicker`}>TimePicker</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/tree-select`}>Tree Select</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/components/upload`}>Upload</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="has-subMenu">
            <Link>Features</Link>
            <ul className="subMenu">
              <li className="has-subMenu-left">
                <NavLink to={`${path}/components/alerts`}>Icons</NavLink>
                <ul className="subMenu">
                  <li>
                    <NavLink to={`${path}/icons/feathers`}>Feather Icons(svg)</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/icons/font-awesome`}>Font Awesome</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/icons/antd`}>Ant Design Icons</NavLink>
                  </li>
                </ul>
              </li>
              <li className="has-subMenu-left">
                <Link>Charts</Link>
                <ul className="subMenu">
                  <li>
                    <NavLink to={`${path}/charts/chartjs`}>Chart Js</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/charts/google-chart`}>Google Chart</NavLink>
                  </li>
                  <li className="has-subMenu-left">
                    <Link to={`${path}/components/alerts`}>Rechart</Link>
                    <ul className="subMenu">
                      <li>
                        <NavLink to={`${path}/charts/recharts/bar`}>Bar Chart</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/area`}>Area Charts</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/composed`}>Composed Charts</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/line`}>Line Charts</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/pie`}>Pie Charts</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/radar`}>Radar Charts</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/charts/recharts/radial`}>Radial Charts</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to={`${path}/charts/peity`}>Peity Chart</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={`${path}/tables`}>Table</NavLink>
              </li>
              <li>
                <NavLink to={`${path}/forms`}>Form</NavLink>
              </li>
              <li>
                <NavLink to={`${path}/components/alerts`}>Maps</NavLink>
                <ul className="subMenu">
                  <li>
                    <NavLink to={`${path}/charts/recharts/bar`}>Bar Chart</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/maps/google`}>Google Maps</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/maps/leaflet`}>Leaflet Maps</NavLink>
                  </li>
                  <li>
                    <NavLink to={`${path}/maps/Vector`}>Vector Maps</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </TopMenuStyle>
  );
};

export default TopMenu;
