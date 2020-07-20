import React, { useState, lazy, Suspense } from 'react';
import { Row, Col, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import { UL, Content, ChatSidebar } from './style';
import PrivetChat from './overview/PrivetChat';
import GroupChat from './overview/GroupChat';
import AllContacts from './overview/AllContacts';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const SingleChat = lazy(() => import('./overview/singleChat'));
const SingleGroup = lazy(() => import('./overview/SingleGroupChat'));

const ChatApp = ({ match }) => {
  const searchData = useSelector(state => state.headerSearchData);
  const [state, setState] = useState({
    search: searchData,
    me: 'woadud@gmail.com',
  });

  const { notdata } = state;

  const patternSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      search: data,
    });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Chat"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
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
                      <NavLink activeClassName="active" to={`${match.path}/private`}>
                        Privet Chat
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to={`${match.path}/group`}>
                        Group Chat
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to={`${match.path}/all`}>
                        All Contacts
                      </NavLink>
                    </li>
                  </UL>
                </nav>
                <Content>
                  <Switch>
                    <Route path={`${match.path}/private`} component={PrivetChat} />
                    <Route path={`${match.path}/group`} component={GroupChat} />
                    <Route path={`${match.path}/all`} component={AllContacts} />
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
                <Route path={match.path} />
                <Route path={match.path} component={SingleChat} />
                <Route path={`${match.path}/:type/:id`} component={SingleChat} />
                <Route path={`${match.path}/group/:id`} component={SingleGroup} />
              </Suspense>
            </Switch>
          </Col>
        </Row>
      </Main>
    </>
  );
};
ChatApp.propTypes = {
  match: PropTypes.object,
};
export default ChatApp;
