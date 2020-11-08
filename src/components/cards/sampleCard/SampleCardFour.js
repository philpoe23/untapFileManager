import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';

const CardWrapper = styled.figure`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
  }
  figcaption {
    padding: 25px;
    h4 {
      display: flex;
      justify-content: space-between;
    }
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
      .feedback {
        span {
          font-size: 13px;
          ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')} : 10px;
          svg {
            margin: 0 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

const SampleCardFour = ({ item }) => {
  const { content, title, img } = item;
  return (
    <CardWrapper>
      <img src={require(`../../../${img}`)} alt="" />
      <figcaption>
        <h4>
          <span>Web Development</span>
          <span>01 July 2020 </span>
        </h4>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="feedbackSection">
          <div className="author">
            <img src={require('../../../static/img/chat-author/t1.jpg')} alt="" />
            <span>Burns Marks</span>
          </div>
          <div className="feedback">
            <span className="like">
              <FeatherIcon icon="heart" size={14} />
              70
            </span>
            <span className="view">
              <FeatherIcon icon="eye" size={14} />
              120
            </span>
          </div>
        </div>
      </figcaption>
    </CardWrapper>
  );
};

SampleCardFour.propTypes = {
  item: propTypes.object,
};

SampleCardFour.defaultProps = {
  item: {
    id: 1,
    title: 'How to Use Apples Products',
    content:
      'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
    img: 'static/img/sampleCards/6.png',
  },
};

export default SampleCardFour;
