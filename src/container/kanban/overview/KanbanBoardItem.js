/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const KanbanBoardItem = ({ data, showModal }) => {
  const { title } = data;

  return (
    <div className="">
      <h4 className="sDash_kanvan-task__title">
        <Link onClick={() => showModal(data)} to="#">
          {title}
        </Link>
        <Link to="#" className="btn-edit">
          <FeatherIcon icon="edit-2" size={12} />
        </Link>
      </h4>
      <div className="sDash_kanvan-task__edit">
        <textarea name="" id="" />
      </div>
    </div>
  );
};

KanbanBoardItem.propTypes = {
  data: propTypes.object,
  showModal: propTypes.func,
};

export default KanbanBoardItem;
