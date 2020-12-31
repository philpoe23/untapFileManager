import React, { useState } from 'react';
import { Modal, Progress } from 'antd';
import { useSelector } from 'react-redux';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { Checkbox } from '../../../components/checkbox/checkbox';
import { Button } from '../../../components/buttons/buttons';

const KanbanBoardItem = ({ data }) => {
  const { title, checklist } = data;
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
      test: false,
      checkValue: {},
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

  function onChange(value, listId, taskId) {
    setState({
      ...state,
      checkValue: {
        ...state.checkValue,
        [`${listId}-${taskId}`]: value,
      },
    });
  }
  const actions = (
    <>
      <Link to="#">
        <span>Delete List</span>
      </Link>
    </>
  );
  return (
    <div className="">
      <h4 className={editable ? 'sDash_kanvan-task__title edit-on' : 'sDash_kanvan-task__title'}>
        <Link onClick={showModal} to="#">
          {title}
        </Link>
        <Link to="#" className="btn-edit">
          <FeatherIcon icon="edit-2" size={12} />
        </Link>
        <Modal
          title={
            <>
              <h4>File Manager Design</h4> <span className="sub-text">in list Active Project</span>
            </>
          }
          wrapClassName="sDash_task-details"
          visible={modalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="sDash_task-details-modal">
            <div className="sDash_task-details-modal__description">
              <span className="sDash_task-details__label">Description</span>
              <textarea name="task-details-label" placeholder="Add a more detailed description…" />
            </div>
          </div>
          <div className="sDash_checklist-block">
            <div className="addChecklist-wrap">
              <Button className="btn-checklist" type="primary">
                <FeatherIcon icon="edit" size={14} />
                Add Checklist
              </Button>
              <div className="addChecklist-form">
                <input type="text" name="add-checklist" className="add-checklist" placeholder="Checklist Title" />
                <div className="addChecklist-form-action">
                  <Button className="btn-add" size="small" type="primary">
                    Add
                  </Button>
                  <Link>
                    <FeatherIcon icon="x" size={18} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="sDash_checklist-row">
              {checklist.map((item, i) => {
                return (
                  <div className="sDash_checklist-item" key={i}>
                    <div className="sDash_checklist-item__top">
                      <h4 className="sDash_checklist-item__title">Research </h4>
                      <Button className="btn-delete" type="light">
                        Delete
                      </Button>
                    </div>
                    <div className="sDash_checklist__progress">
                      <Progress percent={80} />
                    </div>
                    <div className="sDash_checklist-tasks-wrap">
                      <ul className="sDash_checklist-tasks">
                        {item.checkListTask.map((task, i) => {
                          return (
                            <li className="sDash_checklist-tasks__single" key={i}>
                              <Checkbox onChange={value => onChange(value, item.id, task.id)}>{task.label} </Checkbox>
                              <Dropdown content={actions} action={['click']} className="wide-dropdwon kanbanCard-more">
                                <Link to="#" className="btn-more">
                                  <FeatherIcon icon="more-horizontal" size={14} />
                                </Link>
                              </Dropdown>
                            </li>
                          );
                        })}
                      </ul>
                      <Button className="add-item" type="light">
                        Add an Item
                      </Button>
                    </div>
                  </div>
                );
              })}
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
