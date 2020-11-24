import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { Body } from '../Style';
import { Cards } from '../../../components/cards/frame/cards-frame';

const MainContent = ({ folder }) => {
  return (
    <Cards headless bodyStyle={{ background: '#F4F5F7', borderRadius: '10px' }}>
      {folder.name}
    </Cards>
  );
};

MainContent.propTypes = {};

export default MainContent;
