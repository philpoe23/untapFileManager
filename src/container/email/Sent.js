import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import EamilNavbar from '../../components/email/EamilNavbar';
import { Button } from '../../components/buttons/buttons';
import EmailContent from '../../components/email/EmailContent';
import { connect } from 'react-redux';
import ComposeMail from '../../components/email/ComposeMail';

const Sent = ({ searchData, email }) => {
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
      <PageHeader ghost title="Sent" />

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
            <EmailContent
              email={email.filter(email => {
                return email.type === 'sent';
              })}
              searchData={searchData}
            />
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
    email: state.email.allMessage,
  };
};

export default connect(mapStateToProps)(Sent);
