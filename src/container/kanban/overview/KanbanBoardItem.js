import React from 'react';
import { useSelector } from 'react-redux';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const KanbanBoardItem = ({ data }) => {
  const { title } = data;
  // const { knbanData } = useSelector(state => {
  //   return {
  //     knbanData: state.Kanban.data,
  //   };
  // });

  return (
    <div className="">
      <div className="sDash_kanvan-task__title">
        <h4>{title}</h4>
        <Link className="btn-edit">
          <FeatherIcon icon="edit-2" size={12} />
        </Link>
      </div>
      <div className="sDash_kanvan-task__edit">
        <textarea name="" id="" />
      </div>
    </div>
  );
};

KanbanBoardItem.propTypes = {
  data: propTypes.object,
};

export default KanbanBoardItem;
