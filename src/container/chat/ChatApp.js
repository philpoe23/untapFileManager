import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Icon } from 'antd';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { UL, Content, BlockSpan, MessageList, Footer } from './style';
import { textRefactor } from '../../Helper';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';

const ChatApp = ({ searchData, chat }) => {
  const [state, setState] = useState({
    notdata: searchData,
    chatData: chat,
    me: 'woadud@gmail.com',
    singleContent: chat[0].content,
    name: chat[0].userName,
    inputValue: '',
  });

  const { notdata, chatData, singleContent, name, me, inputValue } = state;

  const patternSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const getLiData = e => {
    const email = e.target.getAttribute('data-email');
    const singleEmail = chatData !== undefined && chatData.filter(item => item.email === email);
    return setState({
      ...state,
      singleContent: singleEmail[0].content,
      name: singleEmail[0].userName,
    });
  };

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
    setState({
      ...state,
      singleContent: [...singleContent, pushcontent],
      inputValue: '',
    });
  };

  const content = (
    <Fragment>
      <NavLink to="#">
        <FeatherIcon icon="users" size={14} />
        <span>More one</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon icon="trash-2" size={14} />
        <span>More two</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon icon="slash" size={14} />
        <span>More three</span>
      </NavLink>
    </Fragment>
  );

  return (
    <Fragment>
      <PageHeader ghost title="Chat" />

      <Main>
        <Row gutter={15}>
          <Col md={6}>
            <Cards>
              <AutoComplete onSearch={patternSearch} dataSource={notdata} width="100%" patterns />
              <nav>
                <UL>
                  <li>
                    <NavLink to="/privet-chat">Privet Chat</NavLink>
                  </li>
                  <li>
                    <NavLink to="/group-chat">Group Chat</NavLink>
                  </li>
                  <li>
                    <NavLink to="/all-contacts">All Contacts</NavLink>
                  </li>
                </UL>
              </nav>
              <Content>
                <ul>
                  {chatData !== undefined &&
                    chatData.map((user, index) => {
                      const { userName, content, email } = user;
                      const id = content[content.length - 1]['time'];
                      const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
                      return (
                        <li onClick={getLiData} key={index + 1} data-email={email}>
                          <NavLink onClick={getLiData} data-email={email} to="#">
                            <BlockSpan onClick={getLiData} data-email={email}>
                              {userName}
                              <span style={{ float: 'right' }}>
                                {same ? moment(id).format('hh:mm A') : moment(id).format('LL')}
                              </span>
                            </BlockSpan>
                            <BlockSpan onClick={getLiData} data-email={email}>
                              {textRefactor(content[content.length - 1]['content'], 5)}
                            </BlockSpan>
                          </NavLink>
                        </li>
                      );
                    })}
                </ul>
              </Content>
            </Cards>
          </Col>
          <Col md={18}>
            <Cards title={name} more={content}>
              <ul>
                {singleContent.length ? (
                  singleContent.map((mes, index) => {
                    const id = mes.time;
                    const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
                    return (
                      <div key={index + 1} style={{ overflow: 'hidden' }}>
                        <div>
                          <Heading as={'h5'}>
                            {mes.email !== me && name}
                            <span>{same ? moment(id).format('hh:mm A') : moment(id).format('LL')}</span>
                          </Heading>
                        </div>
                        <Icon type="smile" />
                        <MessageList>{mes.content}</MessageList>
                      </div>
                    );
                  })
                ) : (
                  <p>No data found</p>
                )}
              </ul>
              <Footer>
                <form onSubmit={handleSubmit}>
                  <input
                    onChange={handleChange}
                    placeholder="Type your message..."
                    name="chat"
                    id="chat"
                    style={{ width: '70%' }}
                    value={inputValue}
                  />
                  <Button type="default">
                    <FeatherIcon icon="camera" size={18} />
                  </Button>
                  <Button type="default">
                    <FeatherIcon icon="paperclip" size={18} />
                  </Button>
                  <Button onClick={handleSubmit} type="primary">
                    <FeatherIcon icon="send" size={18} />
                  </Button>
                </form>
              </Footer>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
    chat: state.chat,
  };
};

export default connect(mapStateToProps)(ChatApp);
