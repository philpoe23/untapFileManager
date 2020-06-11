import React, { Fragment, useState, lazy, Suspense } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Spin } from 'antd';
import { Main } from '../styled';
import EamilNavbar from './overview/Navbar';
import { Button } from '../../components/buttons/buttons';
import ComposeMail from './overview/Compose';
import { Switch, Route } from 'react-router-dom';

const Inbox = lazy(() => import('./overview/Inbox'));
const Sent = lazy(() => import('./overview/Sent'));
const Draft = lazy(() => import('./overview/Draft'));
const Starred = lazy(() => import('./overview/Starred'));
const Trash = lazy(() => import('./overview/Trash'));
const Spam = lazy(() => import('./overview/Spam'));
const MailDetailView = lazy(() => import('./overview/MailDetailView'));

const Email = ({ match }) => {
  const [isMailEditorOpen, setMailEditorStatus] = useState(false);

  const toggleMailComposer = e => {
    setMailEditorStatus(!isMailEditorOpen);
  };

  const closeMailComposr = e => {
    setMailEditorStatus(false);
  };

  const path = match.path.split(':')[0];
  return (
    <Fragment>
      <PageHeader ghost title={match.params.page} />
      {isMailEditorOpen && <ComposeMail close={closeMailComposr} />}

      <Main>
        <Row gutter={25}>
          <Col md={5}>
            <Cards headless bodypadding="30px">
              <Button onClick={toggleMailComposer} shape="round" type="primary" size="default" block>
                + Compose
              </Button>
              <EamilNavbar path={path} />
            </Cards>
          </Col>

          <Col md={19}>
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
      </Main>
    </Fragment>
  );
};

export default Email;
