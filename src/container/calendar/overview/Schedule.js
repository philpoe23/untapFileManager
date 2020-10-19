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
      <div className="calenderHeader">
        <div className="left">
          <Button type="white" outlined>
            <NavLink to="./day">Today</NavLink>
          </Button>
          <Button onClick={onDecrement} type="white" outlined>
            <FeatherIcon icon="chevron-left" />
          </Button>
          <span>
            {`${moment()
              .add(currentMonth, 'month')
              .format('MMM YYYY')} - ${moment()
              .add(currentMonth + 1, 'month')
              .format('MMM YYYY')}`}
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
      <table border="1" width="100%">
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
                  <td style={{ width: '120px' }}>{moment(date).format('DD MMM ddd')}</td>
                  <td>
                    {events
                      .filter(item => item.date[0] === date)
                      .map(item => (
                        <Row>
                          <Col md={6}>
                            <span className={`bullet ${item.label}`} />
                            <span>
                              {moment(item.time[0], 'h:mm a').format('h a')} -
                              {moment(item.time[0], 'h:mm a').format('h:mm a')}
                            </span>
                          </Col>
                          <Col md={18}>{item.title}</Col>
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
