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
    position: absolute;
    top: 0;
    left: 0;
    padding: 25px;
    background: ${({ theme }) => theme['dark-color']}50;
    color: ${({ theme }) => theme['extra-light-color']};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      color: ${({ theme }) => theme['extra-light-color']};
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

const SampleCardFive = ({ item }) => {
  const { content, title, img } = item;
  return (
    <CardWrapper>
      <img src={require(`../../../${img}`)} alt="" />
      <figcaption>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="feedbackSection">
          <div className="author">
            <img src={require('../../../static/img/chat-author/t1.jpg')} alt="" />
            <span>Burns Marks</span>
          </div>
        </div>
      </figcaption>
    </CardWrapper>
  );
};

SampleCardFive.propTypes = {
  item: propTypes.object,
};

SampleCardFive.defaultProps = {
  item: {
    id: 1,
    title: 'How to Use Apples Products',
    content: 'Lorem Ipsum is simply dummy text of the printing ',
    img: 'static/img/sampleCards/6.png',
  },
};

export default SampleCardFive;
