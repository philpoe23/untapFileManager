import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const CardWrapper = styled.figure`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
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
    .feedbackSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${({ theme }) => theme['extra-light-color']};
      .author {
        color: ${({ theme }) => theme[' gray-color']};
        img {
          width: 50px;
          border-radius: 50%;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')} : 10px;
        }
      }
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
