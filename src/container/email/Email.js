import React, { Fragment, useState, lazy, Suspense } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Spin } from 'antd';
import { Main } from '../styled';
import EamilNavbar from './overview/EamilNavbar';
import { Button } from '../../components/buttons/buttons';
import ComposeMail from './overview/ComposeMail';
import { Switch, Route } from 'react-router-dom';

const Inbox = lazy(() => import('./overview/Inbox'));
const Sent = lazy(() => import('./overview/Sent'));
const Draft = lazy(() => import('./overview/Draft'));
const Starred = lazy(() => import('./overview/Starred'));
const Trash = lazy(() => import('./overview/Trash'));
const Spam = lazy(() => import('./overview/Spam'));

const Email = ({ match }) => {
  const [state, setstate] = useState({
    isMail: false,
  });
  const { isMail } = state;
  const openClose = e => {
    setstate({
      isMail: isMail ? false : true,
    });
  };
  const onlyClose = e => {
    setstate({
      isMail: false,
    });
  };
  return (
    <Fragment>
      <PageHeader ghost title={match.params.page} />
      {isMail && <ComposeMail onClick={onlyClose} />}
      <Main>
        <Row gutter={15}>
          <Col md={5}>
            <Cards>
              <Button onClick={openClose} shape="round" type="primary">
                + Compose
              </Button>
              <EamilNavbar />
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
                <Route path={'/email/inbox'} component={Inbox} />
                <Route path={'/email/sent'} component={Sent} />
                <Route path={'/email/drafts'} component={Draft} />
                <Route path={'/email/starred'} component={Starred} />
                <Route path={'/email/spam'} component={Spam} />
                <Route path={'/email/trash'} component={Trash} />
              </Suspense>
            </Switch>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Email;
