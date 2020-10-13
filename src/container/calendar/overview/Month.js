import React, { useState, useRef, useLayoutEffect } from 'react';
import { Badge, Calendar } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import CalenDar from 'react-calendar';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';

const MonthCalendar = () => {
  const [state, setState] = useState({
    date: new Date(),
    // currentYear: new Date().getFullYear(),
    // maxYear: 2025,
    // minYear: 2018,
  });

  const rcCalendar = useRef();

  useLayoutEffect(() => {
    const button = document.querySelector('.left .react-calendar__navigation .react-calendar__navigation__label');
    const container = document.querySelector('.left .react-calendar__viewContainer');
    button.addEventListener('click', () => container.classList.add('show'));
  }, [rcCalendar]);

  const onChange = date => setState({ date });

  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Cards headless>
      <div className="calenderHeader">
        <div className="left">
          <Button type="white" outlined>
            <NavLink to="./today">Today</NavLink>
          </Button>
          <CalenDar ref={rcCalendar} next2Label={null} prev2Label={null} onChange={onChange} value={state.date} />
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
        mode="month"
        dateCellRender={dateCellRender}
      />
    </Cards>
  );
};

export default MonthCalendar;
