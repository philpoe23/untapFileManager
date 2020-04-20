import React, { useState, Fragment } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { Slider } from '../../../../components/slider/slider';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { CheckboxGroup } from '../../../../components/checkbox/checkbox';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import { priceRange, filterByRating, filterByBrand, filterByCategory } from '../../../../redux/actions/products';

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
          <Rate allowHalf defaultValue={5} disabled />
          <span>25</span>
        </Fragment>
      ),
      value: 5,
    },
    {
      label: (
        <Fragment>
          <span>
            <Rate allowHalf defaultValue={4} disabled />
            and up
          </span>
          <span>25</span>
        </Fragment>
      ),
      value: 4,
    },
    {
      label: (
        <Fragment>
          <span>
            <Rate allowHalf defaultValue={3} disabled />
            and up
          </span>
          <span>25</span>
        </Fragment>
      ),
      value: 3,
    },
    {
      label: (
        <Fragment>
          <span>
            <Rate allowHalf defaultValue={2} disabled />
            and up
          </span>
          <span>25</span>
        </Fragment>
      ),
      value: 2,
    },
    {
      label: (
        <Fragment>
          <span>
            <Rate allowHalf defaultValue={1} disabled />
            and up
          </span>
          <span>25</span>
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
    <Cards
      title={
        <span>
          <FeatherIcon icon="sliders" size={14} />
          Filters
        </span>
      }
    >
      <Heading as="h5">Price Range</Heading>
      <Slider max={1500} onChange={onChange} range defaultValues={[min, max]} />
      <p>
        ${min} - ${max}
      </p>
      <Heading as="h5">Category</Heading>

      <nav>
        <ul>
          <li>
            <NavLink onClick={onChangeCategory} data-category="all" to="/category">
              All
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onChangeCategory} data-category="accessories" to="/category">
              Accessories <span>25</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onChangeCategory} data-category="furniture" to="/category">
              Furniture <span>25</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onChangeCategory} data-category="drinks" to="/category">
              Drinks <span>25</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="#">See more</NavLink>
      <Heading as="h5">Brands</Heading>
      <CheckboxGroup options={optionsBrand} onChange={onChangeBrand} />

      <NavLink to="#">See more</NavLink>
      <Heading as="h5">Ratings</Heading>
      <CheckboxGroup options={options} onChange={onChangeRating} />
    </Cards>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    priceRange: range => dispatch(priceRange(range)),
    filterByRating: range => dispatch(filterByRating(range)),
    filterByBrand: brand => dispatch(filterByBrand(brand)),
    filterByCategory: category => dispatch(filterByCategory(category)),
  };
};
export default connect(null, mapDispatchToProps)(Filters);
