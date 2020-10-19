import React, { useState } from 'react';
import { Calendar, Select } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';

const YearCalendar = () => {
  const [state, setState] = useState({
    currentYear: new Date().getFullYear(),
    maxYear: 2025,
    minYear: 2018,
  });

  const { currentYear, maxYear, minYear } = state;

  function getMonthData(value) {
    // console.log(value.year());
    if (value.month() === 8) {
      return 1394;
    }
    return false;
  }

  const onIncrement = () => {
    return (
      currentYear < maxYear &&
      setState({
        ...state,
        currentYear: currentYear + 1,
      })
    );
  };

  const onDecrement = () => {
    return (
      currentYear > minYear &&
      setState({
        ...state,
        currentYear: currentYear - 1,
      })
    );
  };

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  const option = [];
  for (let i = minYear; i <= maxYear; i += 1) {
    option.push(
      <Select.Option key={i} value={i}>
        {i}
      </Select.Option>,
    );
  }

  return (
    <Cards headless>
      <div className="calenderHeader">
        <div className="left">
          <Button type="white" outlined>
            <NavLink to="./day">Today</NavLink>
          </Button>
          <Button onClick={onDecrement} type="white" outlined>
            <FeatherIcon icon="chevron-left" />
          </Button>
          <Select
            onChange={value => setState({ ...state, currentYear: value })}
            defaultValue={currentYear}
            value={currentYear}
            style={{ width: '100px' }}
          >
            {option}
          </Select>
          <Button onClick={onIncrement} type="white" outlined>
            <FeatherIcon icon="chevron-right" />
          </Button>
        </div>
        <div className="right">
          <ul>
            <li>
              <NavLink to="./day">Day</NavLink>
            </li>
            <li>
              <NavLink to="./week">Week</NavLink>
            </li>
            <li>
              <NavLink to="./month">Month</NavLink>
            </li>
            <li>
              <NavLink to="./year">Year</NavLink>
            </li>
          </ul>
          <NavLink to="./schedule">
            <FeatherIcon icon="list" />
            Schedule
          </NavLink>
        </div>
      </div>
      <Calendar
        headerRender={() => {
          return <></>;
        }}
        mode="year"
        monthCellRender={monthCellRender}
      />
    </Cards>
  );
};

export default YearCalendar;
