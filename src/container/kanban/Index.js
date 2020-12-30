import React, { useState, lazy, Suspense, useCallback, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { Switch, NavLink, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Input, Form } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { SortableContainer, SortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { KanvanBoardWrap } from './style';
import KanbanBoardItem from './overview/KanbanBoardItem';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Dropdown } from '../../components/dropdown/dropdown';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { ToAddBoard } from '../../redux/kanban/actionCreator';

const Kanban = () => {
  const { boardData, taskData } = useSelector(state => {
    return {
      boardData: state.KanbanBoard.boardData,
      taskData: state.KanbanTask.taskData,
    };
  });

  const dispatch = useDispatch();

  const [tasks, setTaskStatus] = useState(taskData);
  const [addColumn, setAddColumn] = useState(false);

  const [state, setState] = useState({
    columnTitle: '',
    taskTitle: '',
    boardID: '',
  });

  const [form] = Form.useForm();

  const KanbanColumn = ({ status, changeTaskStatus, children }) => {
    const ref = useRef(null);
    const [, drop] = useDrop({
      accept: 'card',
      drop(item) {
        changeTaskStatus(item.id, status);
      },
    });
    drop(ref);
    return (
      <div className="sDash_kanban-board-item" ref={ref}>
        {children}
      </div>
    );
  };

  const KanbanItem = ({ id, children }) => {
    const ref = useRef(null);
    const [{ isDragging }, drag] = useDrag({
      item: { type: 'card', id },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(ref);
    return (
      <div className="sDash_kanvan-task__single" ref={ref} style={{ opacity }}>
        {children}
      </div>
    );
  };

  const changeTaskStatus = useCallback(
    (id, status) => {
      let task = tasks.find(item => item.id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, boardId: status };
      const newTasks = update(tasks, {
        [taskIndex]: { $set: task },
      });
      setTaskStatus(newTasks);
    },
    [tasks],
  );

  const actions = (
    <>
      <Link to="#">
        <span>Edit Card Title</span>
      </Link>
      <Link to="#">
        <span>Delete Card</span>
      </Link>
    </>
  );

  const activeAddOption = e => {
    e.preventDefault();
    setAddColumn(true);
  };
  const diActiveAddOption = e => {
    e.preventDefault();
    setAddColumn(false);
  };
  const onColumnTitleChange = e => {
    setState({
      ...state,
      columnTitle: e.target.value,
    });
  };

  const onTaskTitleChange = e => {
    setState({
      ...state,
      taskTitle: e.target.value,
    });
  };

  const { taskTitle, columnTitle, boardId } = state;

  const addColumnHandler = () => {
    const arrayData = [];
    boardData.map(data => {
      return arrayData.push(data.boardId);
    });
    const max = Math.max(...arrayData);
    if (columnTitle !== '') {
      dispatch(
        ToAddBoard([
          ...boardData,
          {
            boardId: max + 1,
            title: columnTitle,
          },
        ]),
      );
      setState({
        ...state,
        columnTitle: '',
      });
      setAddColumn(false);
    } else {
      alert('Please Enter a Column Ttile');
    }
  };

  const addTaskHandler = () => {
    const arrayData = [];
    boardData.map(data => {
      return arrayData.push(data.boardId);
    });
    const max = Math.max(...arrayData);
    if (columnTitle !== '') {
      dispatch(
        ToAddBoard([
          ...boardData,
          {
            boardId: max + 1,
            title: columnTitle,
          },
        ]),
      );
      setState({
        ...state,
        columnTitle: '',
      });
      setAddColumn(false);
    } else {
      alert('Please Enter a Task Ttile');
    }
  };

  const handleOnAddTask = (e, id) => {
    e.preventDefault();
    setState({
      ...state,
      boardId: id,
    });
  };

  const handleOffAddTask = e => {
    e.preventDefault();
    setState({
      ...state,
      boardId: '',
    });
  };

  return (
    <>
      <PageHeader
        title="Kanban"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <KanvanBoardWrap>
              <Cards headless title="Product Design">
                <DndProvider backend={HTML5Backend}>
                  <div className="sDash_kanban-board-list">
                    {boardData.map(board => {
                      return (
                        <KanbanColumn key={board.boardId} status={board.boardId} changeTaskStatus={changeTaskStatus}>
                          <div className="sDash_kanban-board-item__header">
                            <div className="list-header-target" />
                            <h4 className="list-header-title">
                              <span>{board.title}</span>
                              <Dropdown content={actions} action={['click']} className="wide-dropdwon kanbanCard-more">
                                <Link to="#" className="btn-more">
                                  <FeatherIcon icon="more-horizontal" size={14} />
                                </Link>
                              </Dropdown>
                            </h4>
                            <textarea name="title-edit" id="title-edit" className="title-edit" />
                          </div>
                          <div className="sDash_kanvan-task">
                            {tasks
                              .filter(item => item.boardId === board.boardId)
                              .map(item => (
                                <KanbanItem key={item.id} id={item.id}>
                                  <KanbanBoardItem data={item} />
                                </KanbanItem>
                              ))}
                          </div>
                          {/* sDash_addTask-control */}
                          <div
                            className={
                              board.boardId === boardId ? 'sDash_addTask-control add-task-on' : 'sDash_addTask-control'
                            }
                          >
                            <Link to="#" className="btn-addTask" onClick={e => handleOnAddTask(e, board.boardId)}>
                              <FeatherIcon icon="plus" size={12} />
                              <span>Add Task</span>
                            </Link>
                            <Form className="addTask-form" name="taskAdd" form={form} onFinish={addTaskHandler}>
                              <div className="sDash_addTask-from">
                                <Input
                                  value={taskTitle}
                                  className="sDash_addTask-input"
                                  onChange={onTaskTitleChange}
                                  placeholder="Enter a Title"
                                />
                                <Input type="hidden" value={board.boardId} />
                                <div className="sDash_addTask-action">
                                  <Button className="add-column" size="small" type="primary">
                                    Add
                                  </Button>
                                  <Link onClick={handleOffAddTask}>
                                    <FeatherIcon icon="x" size={18} />
                                  </Link>
                                </div>
                              </div>
                            </Form>
                          </div>
                        </KanbanColumn>
                      );
                    })}
                    <div className={addColumn ? 'btn-addColumn add-column-on' : 'btn-addColumn'}>
                      <div className="btn-addColumn-inner">
                        <Link to="#" className="btn-add" onClick={activeAddOption}>
                          <FeatherIcon icon="plus" size={12} />
                          <span>Add Column</span>
                        </Link>
                        <Form className="addColumn-form" name="columnAdd" form={form} onFinish={addColumnHandler}>
                          <div className="btn-addColumn-form">
                            <Input
                              value={columnTitle}
                              className="sDash-add-column-input"
                              onChange={onColumnTitleChange}
                              placeholder="Enter Column Title"
                            />
                            <div className="sDash_add-column-action">
                              <Button className="add-column" htmlType="submit" size="small" type="primary">
                                Add
                              </Button>
                              <Link onClick={diActiveAddOption}>
                                <FeatherIcon icon="x" size={18} />
                              </Link>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </DndProvider>
              </Cards>
            </KanvanBoardWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Kanban;
