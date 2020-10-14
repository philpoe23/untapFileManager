import React, { useState, useLayoutEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import CalenDar from 'react-calendar';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
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
    date: new Date(),
    container: null,
    currentLabel: moment().format('MMMM YYYY'),
    width: 0,
    defaultValue: moment().format('YYYY-MM-DD'),
  });

  const { date, container, currentLabel, defaultValue } = state;

  useLayoutEffect(() => {
    const button = document.querySelector('.left .react-calendar__navigation .react-calendar__navigation__label');
    const containers = document.querySelector('.left .react-calendar__viewContainer');
    const calenderDom = document.querySelectorAll('.ant-picker-calendar-date-content');
    calenderDom.forEach(element => {
      element.addEventListener('click', e => {
        if (e.target.classList[0] === 'ant-picker-calendar-date-content') {
          const getDate = moment(e.currentTarget.closest('td').getAttribute('title')).format('YYYY-MM-DD');
          setState({
            container: containers,
            date,
            currentLabel,
            defaultValue: getDate,
          });

          dispatch(eventVisible(true));
        }
      });
    });
    button.addEventListener('click', () => containers.classList.add('show'));

    setState({ container: containers, defaultValue, date, currentLabel });
  }, [date, currentLabel, defaultValue, dispatch]);

  const onChange = dt => setState({ ...state, date: dt });

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
          <CalenDar
            onClickMonth={() => {
              container.classList.remove('show');
            }}
            onActiveStartDateChange={({ activeStartDate }) =>
              setState({ ...state, currentLabel: moment(activeStartDate).format('MMMM YYYY') })
            }
            next2Label={null}
            prev2Label={null}
            nextLabel={<FeatherIcon icon="chevron-right" />}
            prevLabel={<FeatherIcon icon="chevron-left" />}
            onChange={onChange}
            value={state.date}
            showFixedNumberOfWeeks
          />
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
