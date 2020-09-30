import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import PropTypes from 'prop-types';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper, CardToolbox } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const DragHandle = sortableHandle(() => <FeatherIcon style={{ cursor: 'pointer', color: '#999' }} icon="move" />);

const UserListDataTable = () => {
  const { users } = useSelector(state => {
    return {
      users: state.users,
    };
  });

  const usersTableData = [];
  users.map((user, index) => {
    const { name, designation, img, status } = user;

    return usersTableData.push({
      key: index + 1,
      index,
      user: (
        <div className="user-info">
          <figure>
            <img style={{ width: '40px' }} src={require(`../../${img}`)} alt="" />
          </figure>
          <figcaption>
            <Heading className="user-name" as="h6">
              {name}
            </Heading>
            <span className="user-designation">San Francisco, CA</span>
          </figcaption>
        </div>
      ),
      email: 'john@gmail.com',
      company: 'Business Development',
      position: designation,
      joinDate: 'January 20, 2020',
      status: <span className={status}>{status}</span>,
      action: (
        <div className="table-actions">
          <>
            <Button className="btn-icon" type="primary" to="#" shape="circle">
              <FeatherIcon icon="eye" size={16} />
            </Button>
            <Button className="btn-icon" type="info" to="#" shape="circle">
              <FeatherIcon icon="edit" size={16} />
            </Button>
            <Button className="btn-icon" type="danger" to="#" shape="circle">
              <FeatherIcon icon="trash-2" size={16} />
            </Button>
          </>
        </div>
      ),
    });
  });

  const usersTableColumns = [
    {
      title: 'Sort',
      dataIndex: 'sort',
      width: 30,
      className: 'drag-visible',
      render: () => <DragHandle />,
    },
    {
      title: 'User',
      dataIndex: 'user',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Company',
      dataIndex: 'company',
    },
    {
      title: 'Position',
      dataIndex: 'position',
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      width: '90px',
    },
  ];

  const [state, setState] = useState({
    dataSource: usersTableData,
  });

  const { dataSource } = state;

  const SortableItem = sortableElement(props => <tr {...props} />);
  const SortableContainer = sortableContainer(props => <tbody {...props} />);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      setState({ ...state, dataSource: newData });
    }
  };

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  DraggableBodyRow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };

  const DraggableContainer = props => (
    <SortableContainer useDragHandle helperClass="row-dragging" onSortEnd={onSortEnd} {...props} />
  );

  return (
    <>
      <CardToolbox>
        <PageHeader ghost title="Drag & Drop" />
      </CardToolbox>

      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <TableWrapper className="table-responsive">
                <Table
                  pagination={false}
                  dataSource={dataSource}
                  columns={usersTableColumns}
                  rowKey="index"
                  components={{
                    body: {
                      wrapper: DraggableContainer,
                      row: DraggableBodyRow,
                    },
                  }}
                />
              </TableWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default UserListDataTable;
