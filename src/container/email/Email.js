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
  const path = match.path.split(':')[0];
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
                <Route path="/" component={Inbox} />
                <Route path={path + 'inbox'} component={Inbox} />
                <Route path={path + 'sent'} component={Sent} />
                <Route path={path + 'drafts'} component={Draft} />
                <Route path={path + 'starred'} component={Starred} />
                <Route path={path + 'spam'} component={Spam} />
                <Route path={path + 'trash'} component={Trash} />
              </Suspense>
            </Switch>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Email;
