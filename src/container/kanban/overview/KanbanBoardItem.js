/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Input, Modal, Progress } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
// import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { Checkbox } from '../../../components/checkbox/checkbox';
import { Button } from '../../../components/buttons/buttons';
// import { ToAddTask } from '../../../redux/kanban/actionCreator';

const KanbanBoardItem = ({ data }) => {
  const { title, checklist } = data;

  // const { knbanData } = useSelector(state => {
  //   return {
  //     knbanData: state.Kanban.data,
  //   };
  // }); sDash_kanvan-task__title

  const { tasks } = useSelector(state => {
    return {
      tasks: state.KanbanBoard.taskData,
    };
  });

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

  const onCancelEdit = e => {
    e.preventDefault();
    setState({
      ...state,
      editable: false,
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

  const onCheckListSubmit = (id, boardId, checkList) => {
    const arrayData = [];
    const checkItem = document.querySelector(`input[name="checkListInputValue"]`).value;
    checkList.map(item => {
      return arrayData.push(item.id);
    });
    const max = checkList.length ? Math.max(...arrayData) : 0;
    tasks.map(item => {
      if (item.id === id && item.boardId === boardId) {
        return (item.checklist = [...checkList, { id: `${max + 1}`, label: checkItem, checkListTask: [] }]);
      }
      return item;
    });
    setState({
      ...state,
      editable: false,
    });
  };

  const onCheckListDelete = (id, boardId, checkList, delId, event) => {
    event.preventDefault();
    tasks.map(item => {
      if (item.id === id && item.boardId === boardId) {
        return (item.checklist = checkList.filter(listItem => listItem.id !== delId));
      }
      return item;
    });
  };

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
              <Button onClick={handleTaskEdit} className="btn-checklist" type="primary">
                <FeatherIcon icon="edit" size={14} />
                Add Checklist
              </Button>
              {!editable ? null : (
                <div className="addChecklist-form">
                  <Input
                    name="checkListInputValue"
                    className="add-checklist"
                    placeholder="Checklist Title"
                    onPressEnter={() => onCheckListSubmit(data.id, data.boardId, checklist)}
                  />
                  <div className="addChecklist-form-action">
                    <Button
                      onClick={() => onCheckListSubmit(data.id, data.boardId, checklist)}
                      className="btn-add"
                      size="small"
                      type="primary"
                    >
                      Add
                    </Button>
                    <Link onClick={onCancelEdit} to="#">
                      <FeatherIcon icon="x" size={18} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="sDash_checklist-row">
              {checklist.map((item, i) => {
                return (
                  <div className="sDash_checklist-item" key={i}>
                    <div className="sDash_checklist-item__top">
                      <h4 className="sDash_checklist-item__title">{item.label} </h4>
                      <Button
                        onClick={event => onCheckListDelete(data.id, data.boardId, checklist, item.id, event)}
                        className="btn-delete"
                        type="light"
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="sDash_checklist__progress">
                      {item.checkListTask.length ? <Progress percent={80} /> : null}
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
