import React, { useState, useLayoutEffect, useRef } from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'antd';
import AddNewEvent from './AddNewEvent';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import './style.css';
import { eventVisible, addNewEvents } from '../../../redux/calendar/actionCreator';
import { Modal } from '../../../components/modals/antd-modals';

const ScheduleCalendar = () => {
  const dispatch = useDispatch();
  const { events, isVisible } = useSelector(state => {
    return {
      events: state.Calender.events,
      isVisible: state.Calender.eventVisible,
    };
  });
  const [state, setState] = useState({
    currentMonth: 0,
    defaultValue: moment().format('YYYY-MM-DD'),
  });

  const dataList = useRef();

  useLayoutEffect(() => {
    if (dataList.current.querySelector('tr') === null) {
      dataList.current.querySelector('.emptyData').style.display = 'block';
    } else {
      dataList.current.querySelector('.emptyData').style.display = 'none';
    }
  });

  const { currentMonth, defaultValue } = state;

  const onIncrement = () => {
    return setState({
      ...state,
      currentMonth: currentMonth + 1,
    });
  };

  const onDecrement = () => {
    setState({
      ...state,
      currentMonth: currentMonth - 1,
    });
  };

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

  const uniqueDate = [];

  return (
    <Cards headless>
      <Modal footer={null} type="primary" title="Create Event" visible={isVisible} onCancel={handleCancel}>
        <AddNewEvent onHandleAddEvent={addNew} defaultValue={defaultValue} />
      </Modal>
      <div className="calendar-header">
        <div className="calendar-header__left">
          <Button className="btn-today" type="white" outlined>
            <NavLink to="./day">Today</NavLink>
          </Button>
          <div className="calender-head__navigation">
            <Button onClick={onDecrement} className="btn-navigate" type="white" outlined>
              <FeatherIcon icon="chevron-left" />
            </Button>
            <span className="date-label">
              {`${moment()
                .add(currentMonth, 'month')
                .format('MMM YYYY')} - ${moment()
                .add(currentMonth + 1, 'month')
                .format('MMM YYYY')}`}
            </span>
            <Button onClick={onIncrement} className="btn-navigate" type="white" outlined>
              <FeatherIcon icon="chevron-right" />
            </Button>
          </div>
        </div>
        <div className="calendar-header__right">
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
          <NavLink className="schedule-list" to="./schedule">
            <FeatherIcon icon="list" />
            Schedule
          </NavLink>
        </div>
      </div>
      <table className="table-event schedule-event" width="100%">
        <tbody ref={dataList}>
          <div className="emptyData">Schedule Not Available!</div>
          {events.map(event => {
            uniqueDate.push(event.date[0]);
            return false;
          })}
          {[...new Set(uniqueDate)].map(date => {
            return (
              moment(date).format('MM') >=
                moment()
                  .add(currentMonth, 'month')
                  .format('MM') &&
              moment(date).format('MM') <=
                moment()
                  .add(currentMonth + 1, 'month')
                  .format('MM') && (
                <tr>
                  <td style={{ width: '120px' }}>
                    <span className="schedule-date">{moment(date).format('DD MMM ddd')}</span>
                  </td>
                  <td>
                    {events
                      .filter(item => item.date[0] === date)
                      .map(item => (
                        <Row>
                          <Col md={6}>
                            <span className={`bullet ${item.label}`} />
                            <span className="schedule-time">
                              {moment(item.time[0], 'h:mm a').format('h a')} -
                              {moment(item.time[0], 'h:mm a').format('h:mm a')}
                            </span>
                          </Col>
                          <Col md={18}>
                            <span className="event-title">{item.title}</span>
                          </Col>
                        </Row>
                      ))}
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </Cards>
  );
};

export default ScheduleCalendar;
