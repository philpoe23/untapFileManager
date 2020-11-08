import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Cards } from '../frame/cards-frame';

const CardWrapper = styled.figure`
  display: flex;
  margin: 0;
  h2,
  p {
    margin: 0;
  }
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, className }) => theme[`${className}-color`]};
  ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
`;

const SampleCardSix = ({ item }) => {
  const { content, title, img, className } = item;
  return (
    <Cards headless>
      <CardWrapper>
        <Icon className={className}>
          <img src={require(`../../../${img}`)} alt="" />
        </Icon>
        <figcaption>
          <h2>{title}</h2>
          <p>{content}</p>
        </figcaption>
      </CardWrapper>
    </Cards>
  );
};

SampleCardSix.propTypes = {
  item: propTypes.object,
};

SampleCardSix.defaultProps = {
  item: {
    id: 1,
    title: '47',
    content: 'Total tasks',
    img: 'static/img/icon/1.svg',
    className: 'primary',
  },
};

export default SampleCardSix;
