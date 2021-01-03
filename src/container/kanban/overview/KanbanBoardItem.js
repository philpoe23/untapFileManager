/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Input } from 'antd';
import { Button } from '../../../components/buttons/buttons';

const KanbanBoardItem = ({ data, showModal }) => {
  const { title, id } = data;
  const [state, setState] = useState({
    taskId: '',
  });
  const onEditPopup = (e, tId) => {
    e.preventDefault();
    // console.log(tId);
    setState({
      ...state,
      taskId: tId,
    });
  };
  const { taskId } = state;
  // console.log(taskId);
  return (
    <div className={taskId === id ? 'sDash_kanvan-task__editable' : ''}>
      <h4 className="sDash_kanvan-task__title">
        <Link onClick={() => showModal(data)} to="#">
          {title}
        </Link>
        <Link to="#" className="btn-edit" onClick={e => onEditPopup(e, id)}>
          <FeatherIcon icon="edit-2" size={12} />
        </Link>
      </h4>
      <div className="sDash_kanvan-task__edit">
        <Input name="" id="" value={title} />
        <Button className="edit-kanban-task" htmlType="submit" size="small" type="primary">
          Save
        </Button>
      </div>
      <span className="task-edit-shade" />
    </div>
  );
};

KanbanBoardItem.propTypes = {
  data: propTypes.object,
  showModal: propTypes.func,
};

export default KanbanBoardItem;
