import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Comment, Icon, Tooltip, Avatar, List } from 'antd';
import moment from 'moment';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import CommentEditor from '../../components/comments/comments-editor';

const Comments = () => {
  const [state, setState] = useState({
    likes: 0,
    dislikes: 0,
    action: null,
  });

  const like = () => {
    setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  const dislike = () => {
    setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  const { likes, dislikes, action } = state;

  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        <Icon type="like" theme={action === 'liked' ? 'filled' : 'outlined'} onClick={like} />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title="Dislike">
        <Icon type="dislike" theme={action === 'disliked' ? 'filled' : 'outlined'} onClick={dislike} />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
    </span>,
    <span key="comment-basic-reply-to">Reply</span>,
  ];

  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply</span>],
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design resources (Sketch and
          Axure), to help people create their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(1, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
          <span>
            {moment()
              .subtract(1, 'days')
              .fromNow()}
          </span>
        </Tooltip>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply</span>],
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design resources (Sketch and
          Axure), to help people create their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(2, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
          <span>
            {moment()
              .subtract(2, 'days')
              .fromNow()}
          </span>
        </Tooltip>
      ),
    },
  ];

  const ExampleComment = ({ children }) => (
    <Comment
      actions={[<span key="comment-nested-reply-to">Reply</span>]}
      author={<NavLink to="#">Han Solo</NavLink>}
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design resources (Sketch and
          Axure).
        </p>
      }
    >
      {children}
    </Comment>
  );

  return (
    <Fragment>
      <PageHeader title="Comments" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards title="Basic comment">
              <Comment
                actions={actions}
                author={<NavLink to="#">Han Solo</NavLink>}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                  <p>
                    We supply a series of design principles, practical patterns and high quality design resources
                    (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                  </p>
                }
                datetime={
                  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
              />
            </Cards>
          </Col>
          <Col md={24}>
            <Cards title="Usage with list">
              <List
                className="comment-list"
                header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <li>
                    <Comment
                      actions={item.actions}
                      author={item.author}
                      avatar={item.avatar}
                      content={item.content}
                      datetime={item.datetime}
                    />
                  </li>
                )}
              />
            </Cards>
          </Col>
          <Col md={24}>
            <Cards title="Nested comments">
              <div className="nested-comment-wrapper">
                <h6 className="comment-title">Reply to</h6>
                <ExampleComment>
                  <ExampleComment>
                    <ExampleComment />
                    <ExampleComment />
                  </ExampleComment>
                </ExampleComment>
              </div>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Reply Editor">
              <CommentEditor />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Comments;
