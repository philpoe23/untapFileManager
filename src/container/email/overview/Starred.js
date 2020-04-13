import React from 'react';
import EmailContent from './EmailContent';
import { connect } from 'react-redux';

const Starred = ({ searchData, email }) => {
  return (
    <EmailContent
      email={email.filter(email => {
        return email.stared;
      })}
      searchData={searchData}
    />
  );
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
    email: state.email.allMessage,
  };
};

export default connect(mapStateToProps)(Starred);
