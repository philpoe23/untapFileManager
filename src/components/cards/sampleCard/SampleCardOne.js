import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Button } from '../../buttons/buttons';

const CardWrapper = styled.figure`
  background: #fff;

  img {
    width: 100%;
  }
  figcaption {
    padding: 25px;
    h2 {
      margin: 0px 0 17px 0;
    }
    p {
      line-height: 25px;
    }
    button {
      background: ${({ theme }) => theme['primary-color']}15;
      color: ${({ theme }) => theme['primary-color']};
    }
  }
`;

const SampleCardOne = ({ item }) => {
  const { content, title, img } = item;
  return (
    <CardWrapper>
      <img src={require(`../../../${img}`)} alt="" />
      <figcaption>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button type="primary" size="large">
          View More
        </Button>
      </figcaption>
    </CardWrapper>
  );
};

SampleCardOne.propTypes = {
  item: propTypes.object,
};

SampleCardOne.defaultProps = {
  item: {
    id: 1,
    title: 'Technology Change the World',
    content: 'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled',
    img: 'static/img/sampleCards/1.png',
  },
};

export default SampleCardOne;
