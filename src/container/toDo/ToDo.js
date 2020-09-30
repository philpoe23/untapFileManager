import React, { useEffect } from 'react';
import { Row, Col, Table, Input, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { Main, TableWrapper } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { ToDoGetData } from '../../redux/todo/actionCreator';

const DragHandle = sortableHandle(() => (
  <FeatherIcon size={16} style={{ cursor: 'pointer', color: '#999' }} icon="move" />
));
const ToDo = () => {
  const todoData = useSelector(state => state.Todo.data);
  const dispatch = useDispatch();

  const columns = [
    {
      title: '',
      dataIndex: 'item',
    },
    {
      title: '',
      dataIndex: 'action',
      width: 120,
    },
  ];
  const dataSource = [];

  if (todoData !== null)
    todoData.map((item, index) => {
      return dataSource.push({
        key: index + 1,
        index,
        item: item.item,
        action: (
          <div>
            <DragHandle />
            <Link to="#">
              <FeatherIcon icon="star" style={{ color: item.favorite ? 'gold' : '#888' }} size={16} />
            </Link>
            <Link to="#">
              <FeatherIcon icon="trash-2" size={16} />
            </Link>
          </div>
        ),
      });
    });

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  useEffect(() => {
    if (ToDoGetData) {
      dispatch(ToDoGetData());
    }
  }, [dispatch]);

  const SortableItem = sortableElement(props => <tr {...props} />);
  const SortableContainer = sortableContainer(props => <tbody {...props} />);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      // setState({ ...state, dataSource: newData });
    }
  };

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  const DraggableContainer = props => (
    <SortableContainer useDragHandle helperClass="row-dragging" onSortEnd={onSortEnd} {...props} />
  );

  return (
    <>
      <PageHeader
        ghost
        title="To Do"
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
        <Row gutter={30}>
          <Col md={12}>
            <Cards title="Task Lists">
              <TableWrapper>
                <Table
                  rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                  }}
                  columns={columns}
                  dataSource={dataSource}
                  pagination={false}
                  rowKey="index"
                  components={{
                    body: {
                      wrapper: DraggableContainer,
                      row: DraggableBodyRow,
                    },
                  }}
                />
              </TableWrapper>
              <br />
              <Form>
                <Input placeholder="Input Item Name......." />
                <br />
                <br />

                <Button type="primary" size="large">
                  + Add New Task
                </Button>
              </Form>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Task Lists" />
          </Col>
        </Row>
      </Main>
    </>
  );
};

ToDo.propTypes = {
  // match: PropTypes.shape(PropTypes.object),
};
export default ToDo;
