/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Input } from 'antd';
import { BackShadow, CreatePost } from './style';
import { Cards } from '../../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../../components/buttons/buttons';

const Post = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <CreatePost>
      {drawer && <BackShadow onClick={() => setDrawer(false)} />}
      <Cards title="Post Something">
        <div className="postBody">
          <img src={require('../../../../../static/img/chat-author/t1.jpg')} alt="" />
          <Input.TextArea
            onFocus={() => setDrawer(true)}
            onBlur={() => setDrawer(false)}
            placeholder="Write something..."
          />
        </div>
        <div className="postFooter">
          <Button shape="circle" type="light">
            <img src={require('../../../../../static/img/icon/image.png')} alt="" />
            Photo/Video
          </Button>
          <Button shape="circle" type="light">
            <FeatherIcon icon="more-horizontal" />
          </Button>
          {drawer && <Button type="primary">Publish Post</Button>}
        </div>
      </Cards>
    </CreatePost>
  );
};

export default Post;
