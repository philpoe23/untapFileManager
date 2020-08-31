/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import { Upload, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SmileOutlined, MoreOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { SingleChatWrapper, MessageList, Footer } from '../style';
import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import { updatePrivetChat } from '../../../redux/chat/actionCreator';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';

const SingleChat = ({ match }) => {
  const dispatch = useDispatch();
  const chat = useSelector(state => state.chatSingle.data);
  const [state, setState] = useState({
    chatData: chat,
    me: 'woadud@gmail.com',
    singleContent: chat[0].content,
    name: chat[0].userName,
    inputValue: '',
    fileList: [],
    fileList2: [],
  });

  const { singleContent, name, me, inputValue } = state;

  // ?
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        chatData: chat,
        singleContent: chat[0].content,
        name: chat[0].userName,
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
    };
    dispatch(updatePrivetChat(match.params.id, pushcontent));
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
        // console.log(info.file, info.fileList);
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
    <SingleChatWrapper>
      <Cards
        title={
          <>
            <Heading as="h5">{name}</Heading>
            <p>Active Now</p>
          </>
        }
        isbutton={[
          <Dropdown content={content} key="1">
            <Link to="#">
              <FeatherIcon icon="more-vertical" />
            </Link>
          </Dropdown>,
        ]}
      >
        <ul className="atbd-chatbox">
          {singleContent.length ? (
            singleContent.map((mes, index) => {
              const id = mes.time;
              const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');

              return (
                <>
                  {index === 1 && (
                    <p className="time-connector text-center text-capitalize">
                      <span>today</span>
                    </p>
                  )}
                  <li className="atbd-chatbox__single" key={id} style={{ overflow: 'hidden' }}>
                    <div className={mes.email !== me ? 'left' : 'right'}>
                      {mes.email !== me ? (
                        <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                      ) : null}

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
                                  <FeatherIcon icon="more-horizontal" size={16} />
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
                        {mes.email === me && singleContent.length === index + 1 ? (
                          <div className="message-seen text-right">
                            <span className="message-seen__time">Seen 9:20 PM </span>
                            <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </li>
                </>
              );
            })
          ) : (
            <p>No data found</p>
          )}
        </ul>
        <Footer>
          <form onSubmit={handleSubmit}>
            <div className="chatbox-reply-form d-flex">
              <div className="chatbox-reply-input">
                <span className="smile-icon">
                  <FeatherIcon icon="smile" size={24} />
                </span>
                <input
                  onChange={handleChange}
                  placeholder="Type your message..."
                  name="chat"
                  id="chat"
                  style={{ width: '100%' }}
                  value={inputValue}
                />
              </div>
              <div
                className={`chatbox-reply-action d-flex ${state.fileList.length && 'hasImage'} ${state.fileList2
                  .length && 'hasFile'}`}
              >
                <Link to="#">
                  <Upload {...props}>
                    <FeatherIcon icon="camera" size={18} />
                  </Upload>
                </Link>
                <Link to="#">
                  <Upload {...attachment}>
                    <FeatherIcon icon="paperclip" size={18} />
                  </Upload>
                </Link>
                <Button onClick={handleSubmit} type="primary" className="btn-send">
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

SingleChat.propTypes = {
  match: PropTypes.shape(PropTypes.object),
};
export default SingleChat;
