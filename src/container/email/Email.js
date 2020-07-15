import React, { useState, lazy, Suspense, useLayoutEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { Switch, Route } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import EamilNavbar from './overview/Navbar';
import ComposeMail from './overview/Compose';
import { EmailWrapper, MailSideBar } from './overview/style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Inbox = lazy(() => import('./overview/Inbox'));
const Sent = lazy(() => import('./overview/Sent'));
const Draft = lazy(() => import('./overview/Draft'));
const Starred = lazy(() => import('./overview/Starred'));
const Trash = lazy(() => import('./overview/Trash'));
const Spam = lazy(() => import('./overview/Spam'));
const MailDetailView = lazy(() => import('./overview/MailDetailView'));

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

  const toggleMailComposer = () => {
    setMailEditorStatus(!isMailEditorOpen);
  };

  const closeMailComposr = () => {
    setMailEditorStatus(false);
  };

  const path = match.path.split(':')[0];
  return (
    <>
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
              {responsive <= 991 && (
                <Button type="link" style={{ marginTop: 0 }} onClick={toggleCollapsed}>
                  <FeatherIcon icon={collapsed ? 'align-left' : 'align-right'} />
                </Button>
              )}

              {responsive > 991 ? (
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
                  <Route path={`${path}inbox`} component={Inbox} />
                  <Route path={`${path}sent`} component={Sent} />
                  <Route path={`${path}drafts`} component={Draft} />
                  <Route path={`${path}starred`} component={Starred} />
                  <Route path={`${path}spam`} component={Spam} />
                  <Route path={`${path}trash`} component={Trash} />
                  <Route path={`${path}single/:id`} component={MailDetailView} />
                </Suspense>
              </Switch>
            </Col>
          </Row>
        </EmailWrapper>
      </Main>
    </>
  );
};

Email.propTypes = {
  match: propTypes.object.isRequired,
};

export default Email;
