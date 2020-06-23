import React, { useState, Fragment } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { Slider } from '../../../../components/slider/slider';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { CheckboxGroup } from '../../../../components/checkbox/checkbox';
import { Sidebar, SidebarSingle } from '../../Style';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import {
  filterByPriceRange,
  filterByRating,
  filterByBrand,
  filterByCategory,
} from '../../../../redux/product/actionCreator';

const Filters = ({ priceRange, filterByRating, filterByBrand, filterByCategory }) => {
  const [state, setState] = useState({
    min: 0,
    max: 1500,
  });
  const { min, max } = state;
  const onChange = value => {
    setState({
      ...state,
      min: value[0],
      max: value[1],
    });
    priceRange(value);
  };
  const onChangeRating = (checkValue, value) => {
    filterByRating([checkValue]);
  };
  const onChangeBrand = (checkValue, value) => {
    filterByBrand([checkValue]);
  };
  const options = [
    {
      label: (
        <Fragment>
          <span className="rating-left">
            <Rate allowHalf defaultValue={5} disabled />
          </span>
          <span className="rating-right">25</span>
        </Fragment>
      ),
      value: 5,
    },
    {
      label: (
        <Fragment>
          <span className="rating-left">
            <Rate allowHalf defaultValue={4} disabled />
            and up
          </span>
          <span className="rating-right">25</span>
        </Fragment>
      ),
      value: 4,
    },
    {
      label: (
        <Fragment>
          <span className="rating-left">
            <Rate allowHalf defaultValue={3} disabled />
            and up
          </span>
          <span className="rating-right">25</span>
        </Fragment>
      ),
      value: 3,
    },
    {
      label: (
        <Fragment>
          <span className="rating-left">
            <Rate allowHalf defaultValue={2} disabled />
            and up
          </span>
          <span className="rating-right">25</span>
        </Fragment>
      ),
      value: 2,
    },
    {
      label: (
        <Fragment>
          <span className="rating-left">
            <Rate allowHalf defaultValue={1} disabled />
            and up
          </span>
          <span className="rating-right">25</span>
        </Fragment>
      ),
      value: 1,
    },
  ];

  const optionsBrand = [
    {
      label: (
        <Fragment>
          Cup <span>25</span>
        </Fragment>
      ),
      value: 'cup',
    },
    {
      label: (
        <Fragment>
          Plate <span>25</span>
        </Fragment>
      ),
      value: 'plate',
    },
    {
      label: (
        <Fragment>
          Chair <span>25</span>
        </Fragment>
      ),
      value: 'chair',
    },
    {
      label: (
        <Fragment>
          Juice <span>25</span>
        </Fragment>
      ),
      value: 'juice',
    },
  ];

  const onChangeCategory = e => {
    e.preventDefault();
    filterByCategory(e.target.getAttribute('data-category'));
  };

  return (
    <Sidebar>
      <Cards
        title={
          <span>
            <FeatherIcon icon="sliders" size={14} />
            Filters
          </span>
        }
      >
        <SidebarSingle style={{ marginBottom: 32 }}>
          <Heading as="h5">Price Range</Heading>
          <Slider max={1500} onChange={onChange} range defaultValues={[min, max]} />
          <p>
            ${min} - ${max}
          </p>
        </SidebarSingle>
        <SidebarSingle style={{ marginBottom: 32 }}>
          <Heading as="h5">Category</Heading>

          <nav>
            <ul className="atbd-category-list">
              <li>
                <NavLink onClick={onChangeCategory} data-category="al;" to="/category">
                  <span>All</span>
                  <span className="category-count">25</span>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={onChangeCategory} data-category="accessories" to="/category">
                  <span>Accessories</span>
                  <span className="category-count">25</span>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={onChangeCategory} data-category="appliance" to="/category">
                  <span>Appliances</span>
                  <span className="category-count">25</span>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={onChangeCategory} data-category="bags" to="/category">
                  <span>Bags</span>
                  <span className="category-count">25</span>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={onChangeCategory} data-category="electronic" to="/category">
                  <span>Electronic</span>
                  <span className="category-count">25</span>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={onChangeCategory} data-category="entertainment" to="/category">
                  <span>Entertainment</span>
                  <span className="category-count">25</span>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={onChangeCategory} data-category="induction" to="/category">
                  <span>Induction</span>
                  <span className="category-count">25</span>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={onChangeCategory} data-category="mobile" to="/category">
                  <span>Mobile Phone</span>
                  <span className="category-count">25</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="sidebar-single__action">
            <NavLink className="btn-seeMore" to="#">
              See more
            </NavLink>
          </div>
        </SidebarSingle>

        <SidebarSingle style={{ marginBottom: 32 }}>
          <Heading as="h5">Brands</Heading>
          <CheckboxGroup options={optionsBrand} onChange={onChangeBrand} />

          <div className="sidebar-single__action">
            <NavLink className="btn-seeMore" to="#">
              See more
            </NavLink>
          </div>
        </SidebarSingle>

        <SidebarSingle>
          <Heading as="h5">Ratings</Heading>
          <CheckboxGroup options={options} onChange={onChangeRating} />
        </SidebarSingle>
      </Cards>
    </Sidebar>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    priceRange: range => dispatch(filterByPriceRange(range)),
    filterByRating: range => dispatch(filterByRating(range)),
    filterByBrand: brand => dispatch(filterByBrand(brand)),
    filterByCategory: category => dispatch(filterByCategory(category)),
  };
};
export default connect(null, mapDispatchToProps)(Filters);
