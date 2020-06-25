import React, { Fragment, useState, lazy, Suspense, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Spin, Icon } from 'antd';
import { Main } from '../styled';
import EamilNavbar from './overview/Navbar';
import { Button } from '../../components/buttons/buttons';
import ComposeMail from './overview/Compose';
import { Switch, Route } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const Inbox = lazy(() => import('./overview/Inbox'));
const Sent = lazy(() => import('./overview/Sent'));
const Draft = lazy(() => import('./overview/Draft'));
const Starred = lazy(() => import('./overview/Starred'));
const Trash = lazy(() => import('./overview/Trash'));
const Spam = lazy(() => import('./overview/Spam'));
const MailDetailView = lazy(() => import('./overview/MailDetailView'));
import { EmailWrapper, MailSideBar } from './overview/style';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Email = ({ match }) => {
  const [isMailEditorOpen, setMailEditorStatus] = useState(false);
  const [state, setState] = useState({
    responsive: 0,
    collapsed: false,
  });
  const { responsive, collapsed } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed,
    });
  };

  const toggleMailComposer = e => {
    setMailEditorStatus(!isMailEditorOpen);
  };

  const closeMailComposr = e => {
    setMailEditorStatus(false);
  };

  const path = match.path.split(':')[0];
  return (
    <Fragment>
      <PageHeader
        ghost
        title={match.params.page}
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
      {isMailEditorOpen && <ComposeMail close={closeMailComposr} />}

      <Main>
        <EmailWrapper>
          <Row className="justify-content-center" gutter={25}>
            <Col lg={7} xl={5}>
              {responsive <= 800 && (
                <Button type="link" style={{ marginTop: 0 }} onClick={toggleCollapsed}>
                  <FeatherIcon icon={collapsed ? 'align-left' : 'align-right'} />
                </Button>
              )}

              {responsive > 800 ? (
                <div className="mail-sideabr">
                  <Cards headless>
                    <div className="mail-sidebar-top">
                      <Button onClick={toggleMailComposer} shape="round" type="primary" size="default" block>
                        + Compose
                      </Button>
                    </div>

                    <div className="mail-sidebar-bottom">
                      <EamilNavbar path={path} />
                    </div>
                  </Cards>
                </div>
              ) : (
                <MailSideBar collapsed={collapsed} className="mail-sideabr">
                  <Cards headless>
                    <div className="mail-sidebar-top">
                      <Button onClick={toggleMailComposer} shape="round" type="primary" size="default" block>
                        + Compose
                      </Button>
                    </div>

                    <div className="mail-sidebar-bottom">
                      <EamilNavbar path={path} />
                    </div>
                  </Cards>
                </MailSideBar>
              )}
            </Col>

            <Col lg={17} xl={19}>
              <Switch>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Route path={path + 'inbox'} component={Inbox} />
                  <Route path={path + 'sent'} component={Sent} />
                  <Route path={path + 'drafts'} component={Draft} />
                  <Route path={path + 'starred'} component={Starred} />
                  <Route path={path + 'spam'} component={Spam} />
                  <Route path={path + 'trash'} component={Trash} />
                  <Route path={path + 'single/:id'} component={MailDetailView} />
                </Suspense>
              </Switch>
            </Col>
          </Row>
        </EmailWrapper>
      </Main>
    </Fragment>
  );
};

export default Email;
