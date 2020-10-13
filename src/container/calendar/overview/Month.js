import React, { useState, useLayoutEffect, useRef } from 'react';
import { Calendar } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink } from 'react-router-dom';
import CalenDar from 'react-calendar';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import ProjectUpdate from './ProjectUpdate';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { Dropdown } from '../../../components/dropdown/dropdown';
import './style.css';
import { calendarDeleteData } from '../../../redux/calendar/actionCreator';
import { Modal } from '../../../components/modals/antd-modals';

const MonthCalendar = () => {
  const dispatch = useDispatch();
  const { events } = useSelector(state => {
    return {
      events: state.Calender.events,
    };
  });
  const [state, setState] = useState({
    date: new Date(),
    container: null,
    currentLabel: moment().format('MMMM YYYY'),
    width: 0,
    visible: true,
    // maxYear: 2025,
    // minYear: 2018,
  });
  const { date, container, currentLabel, width, visible } = state;
  const getInput = useRef();

  useLayoutEffect(() => {
    const button = document.querySelector('.left .react-calendar__navigation .react-calendar__navigation__label');
    const containers = document.querySelector('.left .react-calendar__viewContainer');
    const calenderDom = document.querySelectorAll('.ant-picker-calendar-date-content');
    calenderDom.forEach(element => {
      element.addEventListener('click', e => {
        if (e.target.classList[0] === 'ant-picker-calendar-date-content') {
          alert(moment(e.currentTarget.closest('td').getAttribute('title')).format('MM/DD/yyyy'));
        }
      });
    });
    button.addEventListener('click', () => containers.classList.add('show'));
    setState({ container: containers, date, currentLabel, width: getInput.current.clientWidth, visible });
  }, [date, currentLabel, visible]);

  const onChange = dt => setState({ ...state, date: dt });

  const onEventDelete = id => {
    const data = events.filter(item => item.id !== id);
    dispatch(calendarDeleteData(data));
  };

  function getListData(value) {
    let listData;
    const data = [];
    events.map(event => {
      if (moment(event.date[0]).format('MMMM YYYY') === currentLabel) {
        const { label, title, id, description, time, date } = event;
        const a = moment(moment(event.date[1]).format('DD MMMM YYYY'));
        const b = moment(moment(event.date[0]).format('DD MMMM YYYY'));
        const totalDays = a.diff(b, 'days');

        switch (value.date()) {
          case parseInt(moment(event.date[0]).format('DD'), 10):
            data.push({ label, title, id, totalDays, description, time, date });
            listData = data;
            break;
          default:
        }
      }
      return listData;
    });
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <Dropdown
            key={item.id}
            style={{ padding: 0 }}
            placement="bottomRight"
            content={<ProjectUpdate onEventDelete={onEventDelete} {...item} />}
            action={['click']}
          >
            <li ref={getInput}>
              <Link style={{ width: width * (item.totalDays + 1) }} className={item.label} to="#">
                {item.title}
              </Link>
            </li>
          </Dropdown>
        ))}
      </ul>
    );
  }

  const showModal = type => {
    setState({
      visible: true,
    });
  };

  const handleOk = () => {
    setState({
      visible: false,
      colorModal: false,
    });
  };

  const handleCancel = () => {
    setState({
      visible: false,
      colorModal: false,
    });
  };

  return (
    <Cards headless>
      <Modal type="primary" title="Create Event" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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
