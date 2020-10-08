/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { AllPosts, Title } from './style';
import { Cards } from '../../../../../components/cards/frame/cards-frame';

const Posts = () => {
  return (
    <AllPosts>
      <Cards
        title={
          <Title>
            <img src={require('../../../../../static/img/chat-author/t1.jpg')} alt="" />
            <p>
              Meyri Carles <span>2 minuts ago</span>
            </p>
          </Title>
        }
        more={
          <>
            <Link to="#">Delete</Link>
          </>
        }
      >
        <div className="gallery">Gallery</div>
        <div className="post">Post</div>
        <div className="share">Share</div>
        <div className="comments">Comments</div>
      </Cards>
    </AllPosts>
  );
};

export default Posts;
