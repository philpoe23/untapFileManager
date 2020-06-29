import React, { Fragment, useState, lazy, Suspense } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Spin } from 'antd';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Switch, Route, Link } from 'react-router-dom';
import { UL, Content, ChatSidebar } from './style';
import Heading from '../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';

import PrivetChat from './overview/PrivetChat';
import GroupChat from './overview/GroupChat';
import AllContacts from './overview/AllContacts';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const SingleChat = lazy(() => import('./overview/singleChat'));
const SingleGroup = lazy(() => import('./overview/SingleGroupChat'));

const ChatApp = ({ searchData, match }) => {
  const [state, setState] = useState({
    notdata: searchData,
    me: 'woadud@gmail.com',
    chatType: 'PrivetChat',
  });

  const { notdata, chatType } = state;

  const patternSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const onHandleChange = e => {
    e.preventDefault();
    const link = e.currentTarget;
    link
      .closest('ul')
      .querySelectorAll('li')
      .forEach(li => {
        li.classList.remove('active');
      });

    link.closest('li').classList.add('active');
    setState({
      ...state,
      chatType: e.currentTarget.getAttribute('data-type'),
    });
  };

  return (
    <Fragment>
      <PageHeader
        ghost
        title="Chat"
        buttons={[
          <div className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />

      <Main>
        <Row gutter={30}>
          <Col xxl={7} lg={10} xs={24}>
            <ChatSidebar>
              <Cards headless>
                <div className="chatbox-search">
                  <AutoComplete onSearch={patternSearch} dataSource={notdata} width="100%" patterns />
                </div>
                <nav>
                  <UL>
                    <li className="active">
                      <Link onClick={onHandleChange} data-type="PrivetChat" to="#">
                        Privet Chat
                      </Link>
                    </li>
                    <li>
                      <Link onClick={onHandleChange} data-type="GroupChat" to="#">
                        Group Chat
                      </Link>
                    </li>
                    <li>
                      <Link onClick={onHandleChange} data-type="AllContacts" to="#">
                        All Contacts
                      </Link>
                    </li>
                  </UL>
                </nav>
                <Content>
                  {chatType === 'PrivetChat' ? (
                    <PrivetChat match={match} />
                  ) : chatType === 'GroupChat' ? (
                    <GroupChat match={match} />
                  ) : (
                    <AllContacts match={match} />
                  )}
                </Content>
              </Cards>
            </ChatSidebar>
          </Col>
          <Col xxl={17} lg={14} xs={24}>
            <Switch>
              <Suspense
                fallback={
                  <div className="spin">
                    <Spin />
                  </div>
                }
              >
                <Route
                  exact
                  path={match.path}
                  component={() => {
                    return (
                      <Cards headless>
                        <Heading>Welcome to our Chating Service</Heading>
                      </Cards>
                    );
                  }}
                />
                {chatType !== 'GroupChat' ? (
                  <Route path={match.path + '/:id'} component={SingleChat} />
                ) : (
                  <Route path={match.path + '/:id'} component={SingleGroup} />
                )}
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
  };
};

export default connect(mapStateToProps)(ChatApp);
