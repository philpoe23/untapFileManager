/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import { Upload, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SmileOutlined, MoreOutlined } from '@ant-design/icons';
import { SingleChatWrapper, MessageList, Footer } from '../style';
import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import { updateGroupChat } from '../../../redux/chat/actionCreator';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';

const SingleGroupChat = ({ match }) => {
  const dispatch = useDispatch();
  const chat = useSelector(state => state.chatSingleGroup.data);

  const [state, setState] = useState({
    chatData: chat,
    me: 'woadud@gmail.com',
    singleContent: chat[0].content,
    name: chat[0].groupName,
    inputValue: '',
    fileList: [],
    fileList2: [],
  });

  const { singleContent, name, me, inputValue } = state;

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        chatData: chat,
        singleContent: chat[0].content,
        name: chat[0].groupName,
        inputValue: '',
        me: 'woadud@gmail.com',
        fileList: [],
        fileList2: [],
      });
    }
    return () => {
      unmounted = true;
    };
  }, [match, chat]);

  const handleChange = e => {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const pushcontent = {
      content: inputValue,
      time: new Date().getTime(),
      seen: false,
      reaction: false,
      email: me,
      userName: 'Woadud Akand',
    };
    dispatch(updateGroupChat(parseInt(match.params.id, 10), pushcontent));
    setState({
      ...state,
      singleContent: [...singleContent, pushcontent],
      inputValue: '',
    });
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    listType: 'picture-card',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
        setState({
          ...state,
          fileList: info.fileList,
        });
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const attachment = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
        setState({
          ...state,
          fileList2: info.fileList,
        });
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const content = (
    <>
      <NavLink to="#">
        <FeatherIcon icon="users" size={14} />
        <span>Create new group</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon icon="trash-2" size={14} />
        <span>Delete conversation</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon icon="slash" size={14} />
        <span>Block & Report</span>
      </NavLink>
    </>
  );

  return (
    <SingleChatWrapper className="group-chat">
      <Cards
        title={
          <div className="group-chat-header d-flex">
            <Heading as="h5">{name}</Heading>
            <div className="members">
              <Link to="#">
                <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
              </Link>
              <Link to="#">
                <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
              </Link>
              <Link to="#">
                <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
              </Link>
              <Link to="#">
                <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
              </Link>
              <Link to="#">
                <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
              </Link>
              <Link to="#">
                <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
              </Link>
              <Link className="show-more">
                <span>20+</span>
              </Link>
              <Link className="add-more">
                <span className="add-icon">
                  <FeatherIcon icon="plus" size={14} />
                </span>
              </Link>
            </div>
          </div>
        }
        more={content}
      >
        <ul className="atbd-chatbox">
          {singleContent.length ? (
            singleContent.map((mes, index) => {
              const id = mes.time;
              const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
              return (
                <li className="atbd-chatbox__single" key={id} style={{ overflow: 'hidden' }}>
                  <div className={mes.email !== me ? 'left' : 'right'}>
                    {mes.email !== me ? <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" /> : null}

                    <div className="atbd-chatbox__content">
                      <Heading as="h5" className="atbd-chatbox__name">
                        {mes.email !== me && name}
                        <span>{same ? moment(id).format('hh:mm A') : moment(id).format('LL')}</span>
                      </Heading>
                      {mes.email !== me ? (
                        <div className="atbd-chatbox__contentInner d-flex">
                          <div className="atbd-chatbox__message">
                            <MessageList className="message-box">{mes.content}</MessageList>
                          </div>

                          <div className="atbd-chatbox__actions">
                            <Dropdown
                              action={['hover']}
                              content={
                                <div className="atbd-chatbox__emoji">
                                  <ul>
                                    <li>
                                      <Link to="#">
                                        <span role="img">&#127773;</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <span role="img">&#128116;</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <span role="img">&#128127;</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <span role="img">&#128151;</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <span role="img">&#128400;</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <MoreOutlined />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              }
                              placement="bottomCenter"
                            >
                              <Link to="#">
                                <SmileOutlined />
                              </Link>
                            </Dropdown>
                            <Dropdown
                              action={['hover']}
                              content={
                                <div className="atbd-chatbox__messageControl">
                                  <ul>
                                    <li>
                                      <Link to="#">Copy</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Quote</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Forward</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Report</Link>
                                    </li>
                                  </ul>
                                </div>
                              }
                              placement="bottomCenter"
                            >
                              <Link to="#">
                                <MoreOutlined />
                              </Link>
                            </Dropdown>
                          </div>
                        </div>
                      ) : (
                        <div className="atbd-chatbox__contentInner d-flex">
                          <div className="atbd-chatbox__actions">
                            <Dropdown
                              action={['hover']}
                              content={
                                <div className="atbd-chatbox__emoji">
                                  <ul>
                                    <li>
                                      <Link to="#">&#127773;</Link>
                                    </li>
                                    <li>
                                      <Link to="#">&#128116;</Link>
                                    </li>
                                    <li>
                                      <Link to="#">&#128127;</Link>
                                    </li>
                                    <li>
                                      <Link to="#">&#128151;</Link>
                                    </li>
                                    <li>
                                      <Link to="#">&#128400;</Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <MoreOutlined />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              }
                              placement="bottomCenter"
                            >
                              <Link to="#">
                                <SmileOutlined />
                              </Link>
                            </Dropdown>
                            <Dropdown
                              action={['hover']}
                              content={
                                <div className="atbd-chatbox__messageControl">
                                  <ul>
                                    <li>
                                      <Link to="#">Copy d</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Quote</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Forward</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Report</Link>
                                    </li>
                                  </ul>
                                </div>
                              }
                              placement="bottomCenter"
                            >
                              <Link to="#">
                                <MoreOutlined />
                              </Link>
                            </Dropdown>
                          </div>
                          <div className="atbd-chatbox__message">
                            <MessageList className="message-box">{mes.content}</MessageList>
                          </div>
                        </div>
                      )}
                      {singleContent.length === index + 1 ? (
                        <div className="group-seen">
                          <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                          <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                          <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                          <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                          <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                          <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <p>No data found</p>
          )}
        </ul>
        <Footer>
          <form onSubmit={handleSubmit}>
            <div
              className={`chatbox-reply-form d-flex ${state.fileList.length && 'hasImage'} ${state.fileList2.length &&
                'hasFile'}`}
            >
              <span className="smile-icon">
                <FeatherIcon icon="smile" size={24} />
              </span>
              <div className="chatbox-reply-input">
                <input
                  onChange={handleChange}
                  placeholder="Type your message..."
                  name="chat"
                  id="chat"
                  style={{ width: '100%' }}
                  value={inputValue}
                />
              </div>
              <div className="chatbox-reply-action d-flex">
                <Upload {...props}>
                  <Link to="#">
                    <FeatherIcon icon="camera" size={18} />
                  </Link>
                </Upload>
                <Upload {...attachment}>
                  <Link to="#">
                    <FeatherIcon icon="paperclip" size={18} />
                  </Link>
                </Upload>
                <Button onClick={handleSubmit} type="primary">
                  <FeatherIcon icon="send" size={18} />
                </Button>
              </div>
            </div>
          </form>
        </Footer>
      </Cards>
    </SingleChatWrapper>
  );
};

SingleGroupChat.propTypes = {
  match: PropTypes.shape(PropTypes.object),
};

export default SingleGroupChat;
