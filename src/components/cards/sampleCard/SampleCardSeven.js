import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const CardWrapper = styled.figure`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  img {
    max-width: 50px;
    margin: 25px 25px 0 25px;
  }
  figcaption {
    padding: 25px;
    h2 {
      margin: 0px 0 17px 0;
    }
    p {
      line-height: 25px;
    }
  }
`;

const SampleCardSeven = ({ item }) => {
  const { content, title, img } = item;
  return (
    <CardWrapper>
      <img src={require(`../../../${img}`)} alt="" />
      <figcaption>
        <h2>{title}</h2>
        <p>{content}</p>
      </figcaption>
    </CardWrapper>
  );
};

SampleCardSeven.propTypes = {
  item: propTypes.object,
};

SampleCardSeven.defaultProps = {
  item: {
    id: 1,
    title: 'Adobe CC',
    content: 'Lorem Ipsum is simply dummy text of the and the ',
    img: 'static/img/icon/adobe.svg',
  },
};

export default SampleCardSeven;
