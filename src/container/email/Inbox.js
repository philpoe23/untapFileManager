import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import EamilNavbar from '../../components/email/EamilNavbar';
import { Button } from '../../components/buttons/buttons';

const Inbox = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Inbox" />
      <Main>
        <Row gutter={15}>
          <Col md={5}>
            <Cards>
              <Button shape="round" type="primary">
                + Compose
              </Button>
              <EamilNavbar />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Inbox;
