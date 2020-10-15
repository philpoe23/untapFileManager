import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from 'antd';
import AddNewEvent from './AddNewEvent';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import './style.css';
import { eventVisible, addNewEvents } from '../../../redux/calendar/actionCreator';
import { Modal } from '../../../components/modals/antd-modals';

const WeekCalendar = () => {
  const dispatch = useDispatch();
  const { events, isVisible } = useSelector(state => {
    return {
      events: state.Calender.events,
      isVisible: state.Calender.eventVisible,
    };
  });
  const [state, setState] = useState({
    currentWeek: moment().week(),
    maxWeek: moment('12-31-2020', 'MM-DD-YYYY').isoWeek(),
    minWeek: 0,
    defaultValue: moment().format('YYYY-MM-DD'),
  });

  const { currentWeek, maxWeek, minWeek, defaultValue } = state;

  const onIncrement = () => {
    return (
      currentWeek < maxWeek &&
      setState({
        ...state,
        currentWeek: currentWeek + 1,
      })
    );
  };

  const onDecrement = () => {
    return (
      currentWeek >= minWeek &&
      setState({
        ...state,
        currentWeek: currentWeek - 1,
      })
    );
  };

  const option = [];
  for (let i = minWeek; i <= maxWeek; i += 1) {
    option.push(
      <Select.Option key={i} value={i}>
        {i}
      </Select.Option>,
    );
  }

  const handleCancel = () => {
    dispatch(eventVisible(false));
  };

  const addNew = event => {
    const arrayData = [];
    events.map(data => {
      return arrayData.push(data.id);
    });
    const max = Math.max(...arrayData);
    dispatch(addNewEvents([...events, { ...event, id: max + 1 }]));
    dispatch(eventVisible(false));
  };

  return (
    <Cards headless>
      <Modal footer={null} type="primary" title="Create Event" visible={isVisible} onCancel={handleCancel}>
        <AddNewEvent onHandleAddEvent={addNew} defaultValue={defaultValue} />
      </Modal>
      <div className="calenderHeader">
        <div className="left">
          <Button type="white" outlined>
            <NavLink to="./today">Today</NavLink>
          </Button>
          <Button onClick={onDecrement} type="white" outlined>
            <FeatherIcon icon="chevron-left" />
          </Button>
          <span>
            {`${moment(
              moment()
                .day('Sunday')
                .year('2020')
                .week(currentWeek)
                .toDate(),
            ).format('MMM DD')} - ${
              parseInt(
                moment(
                  moment()
                    .day('Sunday')
                    .year('2020')
                    .week(currentWeek)
                    .toDate(),
                ).format('DD'),
                10,
              ) +
                6 <=
              moment(
                moment()
                  .day('Sunday')
                  .year('2020')
                  .week(currentWeek)
                  .toDate(),
              ).daysInMonth()
                ? moment(
                    moment()
                      .day('Sunday')
                      .year('2020')
                      .week(currentWeek)
                      .toDate(),
                  ).format('MMM')
                : moment(
                    moment()
                      .day('Sunday')
                      .year('2020')
                      .week(currentWeek + 1)
                      .toDate(),
                  ).format('MMM')
            } ${
              parseInt(
                moment(
                  moment()
                    .day('Sunday')
                    .year('2020')
                    .week(currentWeek)
                    .toDate(),
                ).format('DD'),
                10,
              ) +
                6 <=
              moment(
                moment()
                  .day('Sunday')
                  .year('2020')
                  .week(currentWeek)
                  .toDate(),
              ).daysInMonth()
                ? parseInt(
                    moment(
                      moment()
                        .day('Sunday')
                        .year('2020')
                        .week(currentWeek)
                        .toDate(),
                    ).format('DD'),
                    10,
                  ) + 6
                : parseInt(
                    moment(
                      moment()
                        .day('Sunday')
                        .year('2020')
                        .week(currentWeek)
                        .toDate(),
                    ).format('DD'),
                    10,
                  ) +
                  6 -
                  parseInt(
                    moment(
                      moment()
                        .day('Sunday')
                        .year('2020')
                        .week(currentWeek)
                        .toDate(),
                    ).daysInMonth(),
                    10,
                  )
            }, ${moment(
              moment()
                .day('Sunday')
                .year('2020')
                .week(currentWeek)
                .toDate(),
            ).format('YYYY')}`}
          </span>
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
      {/* <Calendar
        headerRender={() => {
          return <></>;
        }}
        mode="month"
        dateCellRender={dateCellRender}
      /> */}
    </Cards>
  );
};

export default WeekCalendar;
