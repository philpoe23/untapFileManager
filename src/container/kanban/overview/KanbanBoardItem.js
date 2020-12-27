import React, { useState } from 'react';
import { Modal } from 'antd';
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
  // }); sDash_kanvan-task__title
  const [state, setState] = useState({
    editable: false,
    modalVisible: false,
  });
  // const [editable, setEditable] = useState(false);

  const { editable, modalVisible } = state;
  const showModal = () => {
    console.log('clicked');
    setState({
      ...state,
      modalVisible: true,
    });
    console.log(modalVisible);
  };
  const handleTaskEdit = () => {
    setState({
      ...state,
      editable: !editable,
    });
  };

  return (
    <div className="">
      <h4
        className={editable ? 'sDash_kanvan-task__title edit-on' : 'sDash_kanvan-task__title'}
        onClick={() => showModal()}
      >
        <Link to="#">{title}</Link>
        {/* <h4></h4> */}
        {/* <Link to="#" className="btn-edit">
          <FeatherIcon icon="edit-2" size={12} />
        </Link> */}
        {/* <Modal title="Basic Modal" visible={modalVisible}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
      </h4>
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
