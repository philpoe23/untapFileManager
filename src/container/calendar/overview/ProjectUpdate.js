import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { UpdatePopup } from '../Style';

const ProjectUpdate = ({ title, id, description, label, onEventDelete, time, date }) => {
  return (
    <UpdatePopup>
      <Cards headless>
        <div className={`headerUpdate ${label}`}>
          <h4>{title}</h4>
          <div className="action">
            <Link to="#">
              <FeatherIcon icon="edit-3" size={14} />
            </Link>
            <Link to="#">
              <FeatherIcon icon="mail" size={14} />
            </Link>
            <Link onClick={() => onEventDelete(id)} to="#">
              <FeatherIcon icon="trash-2" size={14} />
            </Link>
            <Link to="#">
              <FeatherIcon icon="x" size={14} />
            </Link>
          </div>
        </div>
        <div className="bodyUpdate">
          <p>
            <FeatherIcon icon="calendar" size={16} /> Date: {moment(date[0]).format('dddd, MMMM DD')}
          </p>
          <p>
            <FeatherIcon icon="clock" size={16} /> Time: {`${time[0]} - ${time[1]}`}
          </p>
          <p>
            <img src={require(`../../../static/img/icon/right.svg`)} alt="menu" /> {description}
          </p>
        </div>
      </Cards>
    </UpdatePopup>
  );
};

export default ProjectUpdate;
