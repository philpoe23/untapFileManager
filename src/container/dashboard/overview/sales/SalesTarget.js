import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import HalfProgressBar from '../../../../components/utilities/progressBar';

const moreContent = (
  <>
    <Link to="#">
      <FeatherIcon size={16} icon="printer" />
      <span>Printer</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="book-open" />
      <span>PDF</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="file-text" />
      <span>Google Sheets</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="x" />
      <span>Excel (XLSX)</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="file" />
      <span>CSV</span>
    </Link>
  </>
);

const SalesTarget = () => {
  return (
    <Cards more={moreContent} title="Monthly Sales Target">
      <HalfProgressBar percent={80} />
      <Row>
        <Col md={12}>
          <h2>$5,870</h2>
          <p>Revenue</p>
        </Col>
        <Col md={12}>
          <h2>$7,870</h2>
          <p>Target</p>
        </Col>
      </Row>
    </Cards>
  );
};

export default SalesTarget;
