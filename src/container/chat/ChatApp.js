import React, { Fragment, useState, lazy, Suspense } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Spin } from 'antd';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { NavLink, Switch, Route } from 'react-router-dom';
import { UL, Content, BlockSpan } from './style';
import { textRefactor } from '../../Helper';
import moment from 'moment';
//import SingleChat from './overview/singleChat';
//const SingleChat = lazy(() => import('./overview/singleChat'));
const ChatApp = ({ searchData, chat, match }) => {
  const [state, setState] = useState({
    notdata: searchData,
    chatData: chat,
    me: 'woadud@gmail.com',
  });

  const { notdata, chatData } = state;

  const patternSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

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
                        <li key={index + 1}>
                          <NavLink to={match.path + '/' + email}>
                            <BlockSpan>
                              {userName}
                              <span style={{ float: 'right' }}>
                                {same ? moment(id).format('hh:mm A') : moment(id).format('LL')}
                              </span>
                            </BlockSpan>
                            <BlockSpan>{textRefactor(content[content.length - 1]['content'], 5)}</BlockSpan>
                          </NavLink>
                        </li>
                      );
                    })}
                </ul>
              </Content>
            </Cards>
          </Col>
          <Col md={18}>
            <Switch>
              <Suspense
                fallback={
                  <div className="spin">
                    <Spin />
                  </div>
                }
              >
                {/* <Route path={match.path + '/:id'} component={SingleChat} /> */}
              </Suspense>
            </Switch>
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
