import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { Slider } from '../../../../components/slider/slider';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Checkbox } from '../../../../components/checkbox/checkbox';

const Filters = () => {
  const [state, setState] = useState({
    min: 0,
    max: 2000,
  });
  const { min, max } = state;
  const onChange = value => {
    setState({
      ...state,
      min: value[0],
      max: value[1],
    });
  };
  const onChangeCheckbox = (checkValue, value) => {
    console.log(`checked = ${value}`);
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
      <Slider max={3000} onChange={onChange} range defaultValues={[min, max]} />
      <p>
        ${min} - ${max}
      </p>
      <Heading as="h5">Category</Heading>

      <nav>
        <ul>
          <li>
            <NavLink to="#">
              Accessories <span>25</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Appliances <span>25</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Bags <span>25</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="#">See more</NavLink>
      <Heading as="h5">Brands</Heading>
      <nav>
        <ul>
          <li>
            <Checkbox value="bag" onChange={onChangeCheckbox}>
              Bags <span>25</span>
            </Checkbox>
          </li>
          <li>
            <Checkbox value="appliance" onChange={onChangeCheckbox}>
              Appliances <span>25</span>
            </Checkbox>
          </li>
        </ul>
      </nav>
      <NavLink to="#">See more</NavLink>
      <Heading as="h5">Ratings</Heading>
      <nav>
        <ul>
          <li>
            <Checkbox value="5" onChange={onChangeCheckbox}>
              <span>
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
              </span>
              <span>25</span>
            </Checkbox>
          </li>
          <li>
            <Checkbox value="4" onChange={onChangeCheckbox}>
              <span>
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#C6D0DC" color="#C6D0DC" size={14} />
                and up
              </span>
              <span>25</span>
            </Checkbox>
          </li>
          <li>
            <Checkbox value="3" onChange={onChangeCheckbox}>
              <span>
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#C6D0DC" color="#C6D0DC" size={14} />
                <FeatherIcon icon="star" fill="#C6D0DC" color="#C6D0DC" size={14} />
                and up
              </span>
              <span>25</span>
            </Checkbox>
          </li>
          <li>
            <Checkbox value="2" onChange={onChangeCheckbox}>
              <span>
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#C6D0DC" color="#C6D0DC" size={14} />
                <FeatherIcon icon="star" fill="#C6D0DC" color="#C6D0DC" size={14} />
                <FeatherIcon icon="star" fill="#C6D0DC" color="#C6D0DC" size={14} />
                and up
              </span>
              <span>25</span>
            </Checkbox>
          </li>
          <li>
            <Checkbox value="1" onChange={onChangeCheckbox}>
              <span>
                <FeatherIcon icon="star" fill="#FA8B0C" color="#FA8B0C" size={14} />
                <FeatherIcon icon="star" fill="#C6D0DC" color="#C6D0DC" size={14} />
                <FeatherIcon icon="star" fill="#C6D0DC" color="#C6D0DC" size={14} />
                <FeatherIcon icon="star" fill="#C6D0DC" color="#C6D0DC" size={14} />
                <FeatherIcon icon="star" fill="#C6D0DC" color="#C6D0DC" size={14} />
                and up
              </span>
              <span>25</span>
            </Checkbox>
          </li>
        </ul>
      </nav>
    </Cards>
  );
};

export default Filters;
