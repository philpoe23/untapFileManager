import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import NoteCard from '../../../components/note/Card';
import { Cards } from '../../../components/cards/frame/cards-frame';

const All = () => {
  const { noteData } = useSelector(state => {
    return {
      noteData: state.Note.data,
    };
  });
  return (
    <Cards title="Note Lists">
      <Row gutter={15}>
        {noteData.map(item => {
          return (
            <Col md={8} key={item.key}>
              <NoteCard data={item} />
            </Col>
          );
        })}
      </Row>
    </Cards>
  );
};

export default All;
