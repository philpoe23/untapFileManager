import React, { Fragment } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { TasklistAction } from '../style';

const TaskList = () => {
  const dataSource = [
    {
      key: '1',
      title: <del>Add Images To the gallery</del>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img className="task-author" style={{ width: '30px' }} src={require('../../../static/img/users/1.png')} alt="" />
          <span className="task-move"><FeatherIcon icon="move" size={16} /></span>
          <div className="task-action">
            <Dropdown
              content={
                <Fragment>
                  <Link to="#">
                    <FeatherIcon icon="eye" size={14} />
                    View
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="edit" size={14} />
                    Edit
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="trash-2" size={14} />
                    Delete
                  </Link>
                </Fragment>
              }
            >
              <Link to="#">
                <FeatherIcon icon="more-horizontal" size={16} />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
  ];

  const columns = [
    {
      dataIndex: 'title',
      key: 'title',
    },
    {
      dataIndex: 'component',
      key: 'component',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return <Table pagination={false} rowSelection={rowSelection} dataSource={dataSource} columns={columns} />;
};

export default TaskList;
