import React, { useState } from 'react';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Checkbox } from '../../../components/checkbox/checkbox';
import { Button } from '../../../components/buttons/buttons';

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
  const showModal = e => {
    e.preventDefault();
    setState({
      ...state,
      modalVisible: !modalVisible,
    });
  };

  const handleTaskEdit = () => {
    setState({
      ...state,
      editable: !editable,
    });
  };
  const handleCancel = () => {
    setState({
      ...state,
      modalVisible: false,
    });
  };

  return (
    <div className="">
      <h4 className={editable ? 'sDash_kanvan-task__title edit-on' : 'sDash_kanvan-task__title'}>
        <Link onClick={showModal} to="#">
          {title}
        </Link>
        {/* <h4></h4> */}
        {/* <Link to="#" className="btn-edit">
          <FeatherIcon icon="edit-2" size={12} />
        </Link> */}
        <Modal
          title={
            <>
              <h4>Title</h4> <span className="sub-text">in list Active Project</span>
            </>
          }
          wrapClassName="sDash_task-details"
          visible={modalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="sDash_task-details-modal">
            <div className="sDash_task-details-modal__description">
              <textarea name="" id="" placeholder="Description" />
            </div>
          </div>
          <div className="sDash_checklist-block">
            <Button className="btn-create" type="primary">
              <FeatherIcon icon="edit" size={14} />
              Add Checklist
            </Button>
          </div>
          <div className="sDash_checklist-row">
            <div className="sDash_checklist-item">
              <div className="sDash_checklist-item__top">
                <h4 className="sDash_checklist-item__title">Research </h4>
                <Button className="btn-delete" type="light">
                  Delete
                </Button>
              </div>
              <ul className="sDash_checklist-tasks">
                <li className="sDash_checklist-tasks__single">
                  <Checkbox>Design Idea</Checkbox>
                </li>
              </ul>
            </div>
          </div>
        </Modal>
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
