import React, { Fragment, useState, lazy, Suspense } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Spin } from 'antd';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
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
                    <li>
                      <NavLink activeClassName="active" to={match.path + '/private'}>
                        Privet Chat
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to={match.path + '/group'}>
                        Group Chat
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to={match.path + '/all'}>
                        All Contacts
                      </NavLink>
                    </li>
                  </UL>
                </nav>
                <Content>
                  <Switch>
                    <Route path={match.path + '/private'} component={PrivetChat} />
                    <Route path={match.path + '/group'} component={GroupChat} />
                    <Route path={match.path + '/all'} component={AllContacts} />
                  </Switch>
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
                <Route path={match.path}/>
                <Route path={match.path} component={SingleChat} />
                <Route path={match.path + '/:type/:id'} component={SingleChat} />
                <Route path={match.path + '/group/:id'} component={SingleGroup} />
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
