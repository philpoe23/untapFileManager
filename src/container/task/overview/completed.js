import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Checkbox } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Button } from '../../../components/buttons/buttons';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { TaskListWrap } from '../style';

const Completed = () => {
  const task = useSelector(state => state.Task.data);
  const [state, setState] = useState({
    tasks: task,
  });

  const { tasks } = state;
  return (
    <TaskListWrap>
      <div className="sDash_tasklist-wrap">
        <div className="sDash_tasklist-head">
          <h2 className="sDash_task-list-title">Task Lists</h2>
        </div>
        <div className="sDash_tasklist-body">
          <ul className="sDash_tasks">
            {tasks
              .filter(item => item.completed)
              .map((value, i) => {
                return (
                  <li className="sDash_tasks-item" key={i}>
                    <div className="sDash_tasks-item__content">
                      <div className="sDash_tasks-item__title">
                        <Checkbox>{value.title}</Checkbox>
                      </div>
                      <div className="sDash_tasks-item__text">
                        <p>{value.description}</p>
                      </div>
                    </div>
                    <div className="sDash_tasks-item__action">
                      <span className="task-favourite">
                        <FeatherIcon icon="star" size={14} />
                      </span>
                      <Dropdown
                        content={
                          <>
                            <Link>
                              <FeatherIcon icon="edit" size={14} />
                              <span>Edit</span>
                            </Link>
                            <Link>
                              <FeatherIcon icon="trash-2" size={14} />
                              <span>Delete</span>
                            </Link>
                          </>
                        }
                      >
                        <Link to="#">
                          <FeatherIcon icon="more-vertical" size={18} />
                        </Link>
                      </Dropdown>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </TaskListWrap>
  );
};

export default Completed;
